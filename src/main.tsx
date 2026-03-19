import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Menu from "./pages/Menu/Menu"
import Cart from "./pages/Cart/Cart"
import Error from "./pages/Error/Error"
import './index.css'
import Layout from './layout/LayoutMenu/Layout'
import Product from './pages/Product/Product'
import Favorites from './pages/Favorites/Favorites'
import Login from './pages/Login/Login'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Menu />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/product/:id',
                element: <Product />
            }
        ]
    },
    {
        path: '/cart',
        element: <Cart />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/favorites',
        element: <Favorites />
    },
    {
        path: '*',
        element: <Error />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
