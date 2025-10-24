import React from 'react';

import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { Outlet, useNavigate } from 'react-router';
import Loading from '../Pages/Loading';



const MainLayout = () => {
  const { state } = useNavigate();
  return (
    <div className=''>
      <nav className=''>
        <Navbar></Navbar>
      </nav>
      <main className='h-screen'>
        {state=='loading' ? <Loading></Loading> : <Outlet></Outlet>}
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;