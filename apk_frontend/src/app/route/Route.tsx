import { createBrowserRouter } from 'react-router'
import { Layout } from '../layout/Layout'
import { Home } from '@widgets/home'
export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
])
