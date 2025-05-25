import { lazy } from "react"
import { Outlet } from "react-router-dom"

const Login = lazy(() => import('../pages/login'))
const StoreBackend = lazy(() => import('../pages/storeBackend'))
const DashBoard = lazy(() => import('../pages/dashboard'))
const Setting = lazy(() => import('../pages/setting'))
const SystemSetting = lazy(() => import('../pages/systemSetting'))

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
                element: <>products</>
            },
            {
                path: 'orders',
                element: <>orders</>
            },
            {
                path: 'customers',
                element: <>customers</>
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
                        element: <>user</>
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