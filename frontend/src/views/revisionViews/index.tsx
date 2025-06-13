// view
import ProductView from './productView'
import CustomersView from './customersView'

// type
import { Mode, Resource } from '../../types/revisionType'

const getRevisionView = ({ resource, mode }: { resource: Resource, mode: Mode }) => {
    switch (resource) {
        case 'product':
            return (<ProductView resource='product' mode={mode} />)
        case 'customers':
            return (<CustomersView />)
        default:
            throw new Error(`Unknown resource: ${resource}`)
    }
}

export default getRevisionView