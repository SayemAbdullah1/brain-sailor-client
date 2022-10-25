import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../componants/pages/Blog/Blog';
import Courses from '../componants/pages/Courses/Courses';
import FAQ from '../componants/pages/FAQ/FAQ';
import Home from '../componants/pages/Home/Home';
import Login from '../componants/pages/Login/Login';
import Register from '../componants/pages/Register/Register';
import Main from '../layout/Main/Main';

export const route = createBrowserRouter([
    {
        path: '/', 
        element: <Main></Main>, 
        children:[
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/courses', element: <Courses></Courses>
            },
            {
                path: '/FAQ', element: <FAQ></FAQ>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            }
        ]
    }
])
const Route = () => {

    return (
        <div>
            
        </div>
    );
};

export default Route;