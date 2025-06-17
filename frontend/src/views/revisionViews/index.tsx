// view
import ProductView from './productView'
import CustomersView from './customersView'

// type
import { Mode, Resource } from '../../types/RevisionType'

const getRevisionView = ({ resource, mode }: { resource: Resource, mode: Mode }) => {
    switch (resource) {
        case 'product':
            return (<ProductView resource='product' mode={mode} />)
        case 'customers':
            return (<CustomersView resource='customers' mode={mode} />)
        default:
            throw new Error(`Unknown resource: ${resource}`)
    }
}

export default getRevisionView