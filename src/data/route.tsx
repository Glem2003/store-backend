import { lazy } from "react"

const Login = lazy(() => import('../pages/login'))
const StoreBackend = lazy(() => import('../pages/storeBackend'))
const DashBoard = lazy(() => import('../pages/dashboard'))

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
                element: <>setting</>
            },
            {
                path: '*',
                element: <DashBoard />
            }
        ]
    }
]