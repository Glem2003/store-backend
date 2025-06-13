// hooks
import useProductForm from "../features/useProductForm"
import useCustomers from "../features/useCustomers"

// types
import { UseRevisionFormProps } from "./types/useRevisionForm.type"

const useRevisionForm = ({ resource, mode, id }: UseRevisionFormProps) => {

    const productForm = useProductForm()
    const customerForm = useCustomers()

    switch (resource) {
        case 'product':
            return productForm
        case 'customers':
            return customerForm
        default:
            throw new Error(`Unknown resource: ${resource}`)
    }
}

export default useRevisionForm