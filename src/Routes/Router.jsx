import React from 'react';
import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
import AuthLayout from '../Layout/Authlayout';
import Login from '../Component/Auth/Login';
import Signup from '../Component/Auth/Signup';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import MyProfile from '../Pages/MyProfile';
import About from '../Pages/About';
import ViewDetails from '../Pages/ViewDetails';
import { RiseLoader } from 'react-spinners';
import BookSession from '../Pages/BookSession';
import EditProfile from '../Pages/EditProfile';
import ResetPassword from '../Pages/ResetPassword';
import PrivateRoute from './PrivateRoute';
import Loading from '../Pages/Loading';

const Router = createBrowserRouter([
  {
    path:'/',
    Component: MainLayout,
     children:[
          {
            index: true,
            Component:Home,
          },
          {
            path:'myProfile',
            element: <PrivateRoute><MyProfile></MyProfile></PrivateRoute>,

          },
          {
            path:'editProfile',
            Component: EditProfile,
          },
          {
            path:'about',
            Component:About ,
          },
          {
            path:'bookSession',
            Component:BookSession,
          },
          {
            path:'viewDetails/:id',
            element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute> ,
            loader: () => fetch('/skills2.json'),
            hydrateFallbackElement:<Loading></Loading>
          },
        ]
  },
  {
    path:'auth',
    Component: AuthLayout,
    children:[
      {
        path:'login',
        element: <Login></Login>,
       
      },
      {
        path:'signup',
        element: <Signup></Signup> 
      },
      {
        path:'reset-password',
        element: <ResetPassword></ResetPassword>
      },
    ]
  },
  {
    path:'/*',
    Component: Error,
  },
])

export default Router;