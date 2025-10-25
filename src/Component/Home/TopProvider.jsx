import { Star } from 'lucide-react';
import React from 'react';
import { IoStarSharp } from 'react-icons/io5';
import chef from '../../assets/jopopz-tallorin-Rny5u2JwahI-unsplash.jpg'
import Photographer from '../../assets/prince-akachi-4Yv84VgQkRM-unsplash.jpg'
import Yoga from '../../assets/alonso-reyes-B2GdRGjEC2I-unsplash.jpg'

const TopProvider = () => {
  return (  
    
    <div className='container mx-auto my-15'>
      <h2 className='w-[250px] font-bold text-3xl py-3 gradient'>Top Provider</h2>
    <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-5'>
  
<div className="card bg-base-100  max-w-[400px] h-[450px] shadow-sm ">
  <figure className='relative'>
    <img className='object-cover '
      src={chef}
      alt="Chef" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Culinary Arts
      <div className="rounded-4xl px-2 flex items-center border border-yellow text-[#ff9100]   absolute top-3 right-2"> 4.9  <IoStarSharp /></div>
    </h2>
    <p>Rohomot is a Bangladeshi-born home chef, teaches traditional recipes passed down through generations, making every class a cultural delight.</p>
    <div className="card-actions justify-end">
      <div className=" rounded-md bg-blue-500 px-2.5 py-0.5 text-white">Rohomot Ali</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
<div className="card bg-base-100  max-w-[400px] h-[450px] shadow-sm ">
  <figure className='relative'>
    <img className='object-cover '
      src={Photographer}
      alt="Photographer" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     Photography
      <div className="rounded-4xl px-2 flex items-center border border-yellow text-[#ff9100]  absolute top-3 right-2"> 4.9  <IoStarSharp /></div>
    </h2>
    <p>Nayeem is a freelance photographer specializing in nature and portrait photography. He helps students capture the perfect shot with any camera.</p>
    <div className="card-actions justify-end items-center">
      <div className=" rounded-md bg-blue-500 px-2.5 py-0.5 text-white">Nayeem Khan</div>
      <div className="badge badge-outline">View Course</div>
    </div>
  </div>
</div>
<div className="card bg-base-100  max-w-[400px] h-[450px] shadow-sm ">
  <figure className='relative'>
    <img className='object-cover '
      src={Yoga}
      alt="Yoga Teacher" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     Yoga and Fitness
      <div className="rounded-4xl px-2 flex items-center border border-yellow text-[#ff9100]  absolute top-3 right-2"> 4.9  <IoStarSharp /></div>
    </h2>
    <p>Pria Mehta is a certified yoga instructor with over 5 years of experience helping people find balance and mindfulness through yoga.</p>
    <div className="card-actions justify-end">
      <div className=" rounded-md bg-blue-500 px-2.5 py-0.5 text-white">Pria Mehta</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    </div>
    </div>
  );
};

export default TopProvider;