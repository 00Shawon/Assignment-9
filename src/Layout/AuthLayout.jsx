import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Login from '../Component/Auth/Login';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div>
    <Navbar></Navbar>
    <Outlet></Outlet>
   
    </div>
  );
};

export default AuthLayout;