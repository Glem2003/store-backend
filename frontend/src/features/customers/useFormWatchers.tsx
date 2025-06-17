// hooks
import { UseFormWatch } from "react-hook-form"

// type
import { CustomerDataType } from "../../types/CustomerApi.type"

const useFormWatchers = (watch: UseFormWatch<CustomerDataType>) => {

    const watchedCustomerId = watch('id')
    const watchedUserName = watch('username')
    const watchedEmail = watch('email')
    const watchedPhone = watch('phone')
    const watchedStatus = watch('status')

    return { watchedCustomerId, watchedUserName, watchedEmail, watchedPhone, watchedStatus }
}

export default useFormWatchers