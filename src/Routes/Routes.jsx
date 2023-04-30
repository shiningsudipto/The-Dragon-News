import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../layouts/Layout';
import Category from '../pages/shared/Category';
import News from '../pages/News';
import NewsLayout from '../layouts/NewsLayout';
// import Login from '../pages/Login';
import UserAuth from '../layouts/UserAuth';
import Registration from '../pages/Registration';
import Login from '../pages/Login';
import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Category />,
                loader: () => fetch('https://shiningsudipto.github.io/the-dragon-news-api/news.json'),
                // loader: ()=> fetch('https://the-dragon-news-server-shiningsudipto.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category />,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-shiningsudipto.vercel.app/categories/${params.id}`)
            },
        ]
    },
    {
        path: 'news',
        element: <NewsLayout />,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-shiningsudipto.vercel.app/news/${params.id}`)
            }
        ]
    },
    {
        path: 'login',
        element: <Login />,
    },
    {
        path: 'signup',
        element: <Registration />,
    }
])

export default routes;