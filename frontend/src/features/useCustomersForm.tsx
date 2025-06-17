// hooks
import { useForm } from "react-hook-form"
import useFormHandlers from "./customers/useFormHandlers"
import useLoadData from "./customers/useLoadData"
import useFormWatchers from "./customers/useFormWatchers"
import useStatus from "../hooks/useStatus"
import { useTranslation } from "react-i18next"
import useMessageDialog from "../hooks/useMessageDialog"

// type
import { CustomerDataType } from "../types/CustomerApi.type"

// config
import { CUSTOMERS_API } from "../config/apiConfig"

const useCustomersForm = () => {

    const { t } = useTranslation()

    const {
        register,
        reset,
        watch,
        control,
        trigger,
        setError,
        formState: { errors }
    } = useForm<CustomerDataType>({
        mode: "onBlur",
        defaultValues: {
            id: "",
            username: "",
            email: '',
            phone: '',
            status: false
        }
    })

    const { watchedCustomerId, watchedUserName, watchedEmail, watchedPhone, watchedStatus } = useFormWatchers(watch)

    const { getFormDataFromId } = useLoadData({ reset, API: CUSTOMERS_API })

    const { loading, setLoading, messageDialog, setMessageDialog } = useStatus()

    const { showConfirmDialog, handleClose } = useMessageDialog({ setMessageDialog })

    const { handleReset, handleAdd, handleSave, handleDelete } = useFormHandlers({
        reset,
        trigger,
        API: CUSTOMERS_API,
        watch,
        watchedCustomerId,
        watchedUserName,
        watchedEmail,
        watchedPhone,
        watchedStatus,
        t,
        setLoading,
        setMessageDialog,
        showConfirmDialog,
        setError
    })

    return {
        register,
        control,
        handleAdd,
        handleReset,
        handleSave,
        getFormDataFromId,
        loading,
        messageDialog,
        errors,
        handleClose,
        handleDelete,
        watch
    }
}

export default useCustomersForm