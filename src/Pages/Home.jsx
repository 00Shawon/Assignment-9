import React, { Suspense } from 'react';
import Header from '../Component/Header';
import Skills from '../Component/Home/Skills';
import TopProvider from '../Component/Home/TopProvider';
import HowItWorks from '../Component/Home/HowItWorks';
import { RiseLoader } from 'react-spinners';

const Home = () => {
  return (
    <div className='w-11/12 mx-auto'>
      <Header></Header>
     <h1 className='font-bold text-3xl py-6'>Popular skills</h1>
     <div className=''>
       <Suspense fallback={<RiseLoader />}>
       <Skills></Skills>
     </Suspense>
     </div>
    
   
    <TopProvider></TopProvider>
    <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;