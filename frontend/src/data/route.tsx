import { lazy } from "react"
import { Outlet } from "react-router-dom"

const Login = lazy(() => import('../pages/login'))
const StoreBackend = lazy(() => import('../pages/storeBackend'))

const DashBoard = lazy(() => import('../pages/dashboard'))
const Products = lazy(() => import('../pages/products'))
const Orders = lazy(() => import('../pages/orders'))
const Customers = lazy(() => import('../pages/customers'))

const Setting = lazy(() => import('../pages/setting'))
const SystemSetting = lazy(() => import('../pages/systemSetting'))

const Revision = lazy(() => import('../pages/revision'))

export const webRoutes = [
    {
        path: '/',
        element: <Login />,
        index: true
    },
    {
        path: '/store-backend',
        element: <StoreBackend />,
        children: [
            {
                index: true,
                element: <DashBoard />
            },
            {
                path: 'products',
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <Products />
                    },
                    {
                        path: 'revision',
                        element: <Revision />
                    }
                ]
            },
            {
                path: 'orders',
                element: <Orders />
            },
            {
                path: 'customers',
                element: <Customers />
            },
            {
                path: 'setting',
                element: <Outlet />,
                children: [
                    {
                        index: true,
                        element: <Setting />
                    },
                    {
                        path: 'user',
                        element: <>coming soon</>
                    },
                    {
                        path: 'system',
                        element: <SystemSetting />
                    }
                ]
            }
        ]
    }
]