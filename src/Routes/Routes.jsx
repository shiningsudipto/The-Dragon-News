import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../layouts/Layout';
import Category from '../pages/shared/Category';
import News from '../pages/News';
import NewsLayout from '../layouts/NewsLayout';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Category />,
                loader: () => fetch('https://shiningsudipto.github.io/the-dragon-news-api/news.json'),
                // loader: ()=> fetch('http://localhost:5000/news')
            },
            {
                path: '/category/:id',
                element: <Category />,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
        ]
    },
    {
        path: 'news',
        element: <NewsLayout />,
        children: [
            {
                path: ':id',
                element: <News />,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default routes;