import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../componants/errorPage/ErrorPage';
import Blog from '../componants/pages/Blog/Blog';
import Category from '../componants/pages/Category/Category';
import CheckOut from '../componants/pages/CheckOut/CheckOut';
import Course from '../componants/pages/course/Course';
import CourseDetails from '../componants/pages/CourseDetails/CourseDetails';
import Courses from '../componants/pages/Courses/Courses';
import FAQ from '../componants/pages/FAQ/FAQ';
import Home from '../componants/pages/Home/Home';
import Login from '../componants/pages/Login/Login';
import Register from '../componants/pages/Register/Register';
import Main from '../layout/Main/Main';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const route = createBrowserRouter([
    {
        path: '/', 
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>, 
        children:[
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`http://localhost:5000/courses/`)
            },
            {
                path: '/course/:id', 
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
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