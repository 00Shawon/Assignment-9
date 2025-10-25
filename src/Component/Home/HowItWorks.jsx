import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const HowItWorks = () => { 
 useEffect(() => {
  AOS.init({
    duration: 2000,
    easing: 'ease-in-out',
    once: false, // allows animation to trigger every time you scroll back
    mirror: false, // prevents re-trigger when scrolling up
    offset: 120, // how far from the viewport the animation starts
    startEvent: 'scroll'
  });
}, []);



  return (
    <div className='my-15'>
      <section className="py-12 bg-gray-300 text-center rounded-2xl">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"data-aos="fade-down-right">
            <div className="text-3xl mb-3">🧑‍💻</div>
            <h3 className="font-semibold text-lg mb-2" data-aos="ease-in" data-aos-delay="1000">Create Profile</h3>
            <p className="text-gray-600 text-sm">Sign up and show what skills you can teach or want to learn.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition" data-aos="fade-down-right">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-semibold text-lg mb-2" >Browse or Post Skills</h3>
            <p className="text-gray-600 text-sm">Find people offering skills or post your own to connect.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition" data-aos="fade-down-left" >
            <div className="text-3xl mb-3">📅</div>
            <h3 className="font-semibold text-lg mb-2">Connect & Schedule</h3>
            <p className="text-gray-600 text-sm">Message and plan a convenient session together.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition" data-aos="fade-down-left">
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="font-semibold text-lg mb-2">Learn & Share</h3>
            <p className="text-gray-600 text-sm">Exchange knowledge and leave feedback to grow.</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default HowItWorks;