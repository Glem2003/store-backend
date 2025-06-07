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
    },
    {
        path: '/backend',
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
                        path: 'revision/:mock',
                        element: <Revision mode="add" />
                    },
                    {
                        path: 'revision/:mock/:id',
                        element: <Revision mode="edit" />
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