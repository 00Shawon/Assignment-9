import { Star } from 'lucide-react';
import React from 'react';
import { IoStarSharp } from 'react-icons/io5';

const TopProvider = () => {
  return (  
    
    <div>
      <h2 className='font-bold text-3xl py-6'>Top Provider</h2>
    <div className='mt-20 grid grid-cols-1 md:grid-cols-3 '>
  
<div className="card bg-base-100  max-w-[400px] h-[450px] shadow-sm ">
  <figure className='relative'>
    <img className='object-cover '
      src="/src/assets/jopopz-tallorin-Rny5u2JwahI-unsplash.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Culinary Arts
      <div className="rounded-4xl px-2 flex items-center border border-yellow text-[#ffee00]  absolute top-3 right-2"> 4.9  <IoStarSharp /></div>
    </h2>
    <p>an Italian-born home chef, teaches authentic recipes passed down through generations, making every class a cultural delight.</p>
    <div className="card-actions justify-end">
      <div className="badge bg-blue-500 text-white">Rohomot Ali</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
<div className="card bg-base-100  max-w-[400px] h-[450px] shadow-sm ">
  <figure className='relative'>
    <img className='object-cover '
      src="/src/assets/prince-akachi-4Yv84VgQkRM-unsplash.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     Photography
      <div className="rounded-4xl px-2 flex items-center border border-yellow text-[#ffee00]  absolute top-3 right-2"> 4.9  <IoStarSharp /></div>
    </h2>
    <p>an Italian-born home chef, teaches authentic recipes passed down through generations, making every class a cultural delight.</p>
    <div className="card-actions justify-end">
      <div className="badge bg-blue-500 text-white">Karamot Ali</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
<div className="card bg-base-100  max-w-[400px] h-[450px] shadow-sm ">
  <figure className='relative'>
    <img className='object-cover '
      src="/src/assets/alonso-reyes-B2GdRGjEC2I-unsplash.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     Yoga and Fitness
      <div className="rounded-4xl px-2 flex items-center border border-yellow text-[#ffee00]  absolute top-3 right-2"> 4.9  <IoStarSharp /></div>
    </h2>
    <p>an Italian-born home chef, teaches authentic recipes passed down through generations, making every class a cultural delight.</p>
    <div className="card-actions justify-end">
      <div className="badge bg-blue-500 text-white">Rabeya khatun</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    </div>
    </div>
  );
};

export default TopProvider;