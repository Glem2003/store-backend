import { lazy } from "react"

const Login = lazy(() => import('../pages/login'))
const StoreBackend = lazy(() => import('../pages/storeBackend'))

const routes = [
    {
        path: '/',
        element: <Login />,
        index: true
    },
    {
        path: '/store-backend',
        element: <StoreBackend />,
    }
]

export default routes
