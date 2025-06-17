// hooks
import { useNavigate } from "react-router-dom"
import { UseFormReset, UseFormSetError, UseFormTrigger, UseFormWatch } from "react-hook-form"

// type
import { CustomerDataType } from "../../types/CustomerApi.type"
import { loadingObject, messageDialog, showConfirmDialog } from "../../hooks/types/useMessageDialog.type"
import type { TFunction } from "i18next"

const useFormHandlers = ({
    reset,
    trigger,
    API,
    watch,
    watchedCustomerId,
    watchedUserName,
    watchedEmail,
    watchedPhone,
    watchedStatus,
    setLoading,
    setMessageDialog,
    t,
    showConfirmDialog,
    setError
}: {
    reset: UseFormReset<CustomerDataType>
    trigger: UseFormTrigger<CustomerDataType>
    API: string
    watch: UseFormWatch<CustomerDataType>
    watchedCustomerId: string
    watchedUserName: string
    watchedEmail: string
    watchedPhone: string
    watchedStatus: boolean
    t: TFunction
    setLoading: React.Dispatch<React.SetStateAction<loadingObject>>
    setMessageDialog: React.Dispatch<React.SetStateAction<messageDialog>>
    showConfirmDialog: (config: showConfirmDialog) => Promise<boolean>
    setError: UseFormSetError<CustomerDataType>
}) => {

    const navigate = useNavigate()

    const handleReset = () => reset()
    const handleAdd = async () => {

        setLoading((prev) => ({ ...prev, add: true }))

        const isValid = await trigger()
        if (!isValid) {
            setMessageDialog({
                open: true,
                title: t('fail'),
                content: t('form_validation_fail'),
                type: 'error'
            })
            setLoading((prev) => ({ ...prev, add: false }))
            return
        }

        const res = await fetch(API)
        const existingCustomers = await res.json()

        const currentSKU = watch('id')

        const skuExists = existingCustomers.some((item: CustomerDataType) => item.id === currentSKU)
        if (skuExists) {
            setError('id', {
                type: 'manual',
                message: t('sku_already_exists')
            })
            setMessageDialog({
                open: true,
                title: t('fail'),
                content: t('form_validation_fail'),
                type: 'error'
            })
            setLoading((prev) => ({ ...prev, add: false }))
            return
        }

        const payload = {
            id: watchedCustomerId,
            username: watchedUserName,
            email: watchedEmail,
            phone: watchedPhone,
            status: watchedStatus,
            createdAt: new Date()
        }

        await fetch(API, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })

        console.log(payload)

        setMessageDialog({
            open: true,
            title: t('success'),
            content: t('operation_completed'),
            type: 'success'
        })
        reset()
        setLoading((prev) => ({ ...prev, add: false }))
    }

    const handleSave = async () => {

        setLoading((prev) => ({ ...prev, save: true }))

        const isValid = await trigger()

        if (!isValid) {
            setMessageDialog({
                open: true,
                title: t('fail'),
                content: t('form_validation_fail'),
                type: 'error'
            })
            setLoading((prev) => ({ ...prev, save: false }))
            return
        }

        const payload = {
            id: watchedCustomerId,
            username: watchedUserName,
            email: watchedEmail,
            phone: watchedPhone,
            status: watchedStatus,
        }

        await fetch(`${API}/${watchedCustomerId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })

        console.log(payload)

        setLoading((prev) => ({ ...prev, save: false }))
        setMessageDialog({
            open: true,
            title: t('success'),
            content: t('operation_completed'),
            type: 'success'
        })
    }

    const handleDelete = async () => {
        if (!watchedCustomerId) return
        setLoading((prev) => ({ ...prev, delete: true }))

        const isConfirmed = await showConfirmDialog({
            title: t('warning'),
            content: t("are_you_sure_you_want_to_delete_this_data"),
            type: 'warning'
        })

        if (!isConfirmed) {
            setLoading((prev) => ({ ...prev, delete: false }))
            return
        }

        try {
            const res = await fetch(`${API}/${watchedCustomerId}`, {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' }
            })

            if (!res.ok) throw new Error('刪除失敗')

            setMessageDialog({
                open: true,
                title: t('success'),
                content: `SKU: ${watchedCustomerId} ${t('deleted')}`,
                type: 'success',
                onConfirm() {
                    setLoading((prev) => ({ ...prev, delete: false }))
                    navigate(-1)
                }
            })

            reset()
        } catch (err) {
            setMessageDialog({
                open: true,
                title: t('error'),
                content: t('delete_fail'),
                type: 'error'
            })
        }
    }

    return {
        handleReset,
        handleAdd,
        handleSave,
        handleDelete
    }
}

export default useFormHandlers