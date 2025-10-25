import React from 'react';
import 'animate.css';

const HowItWorks = () => {
  return (
    <div className='my-15' >
     <section class="py-12 bg-gray-300 text-center rounded-2xl">
  <h2 class="text-2xl font-bold mb-8 text-gray-800 animate__animated animate__swing">How It Works</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
    
    <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition ">
      <div class="text-3xl mb-3">🧑‍💻</div>
      <h3 class="font-semibold text-lg mb-2 animate__animated animate__bounce animate__delay-1s">Create Profile</h3>
      <p class="text-gray-600 text-sm">Sign up and show what skills you can teach or want to learn.</p>
    </div>

    <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
      <div class="text-3xl mb-3">🔍</div>
      <h3 class="font-semibold text-lg mb-2 animate__animated animate__bounce animate__delay-2s">Browse or Post Skills</h3>
      <p class="text-gray-600 text-sm">Find people offering skills or post your own to connect.</p>
    </div>

    <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
      <div class="text-3xl mb-3">📅</div>
      <h3 class="font-semibold text-lg mb-2 animate__animated animate__bounce animate__delay-3s">Connect & Schedule</h3>
      <p class="text-gray-600 text-sm ">Message and plan a convenient session together.</p>
    </div>

    <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
      <div class="text-3xl mb-3">⭐</div>
      <h3 class="font-semibold text-lg mb-2 animate__animated animate__bounce animate__delay-4s">Learn & Share</h3>
      <p class="text-gray-600 text-sm">Exchange knowledge and leave feedback to grow.</p>
    </div>
    
  </div>
  <h1 className='pt-5 animate__animated animate__bounce animate__delay-5s'>Easy peasy!</h1>
</section>

    </div>
  );
};

export default HowItWorks;