import React from 'react';

const HowItWorks = () => {
  return (
    <div className='my-15' >
     <section class="py-12 bg-gray-300 text-center rounded-2xl">
  <h2 class="text-2xl font-bold mb-8 text-gray-800">How It Works</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
    
    <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition ">
      <div class="text-3xl mb-3">🧑‍💻</div>
      <h3 class="font-semibold text-lg mb-2">Create Profile</h3>
      <p class="text-gray-600 text-sm">Sign up and show what skills you can teach or want to learn.</p>
    </div>

    <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
      <div class="text-3xl mb-3">🔍</div>
      <h3 class="font-semibold text-lg mb-2">Browse or Post Skills</h3>
      <p class="text-gray-600 text-sm">Find people offering skills or post your own to connect.</p>
    </div>

    <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
      <div class="text-3xl mb-3">📅</div>
      <h3 class="font-semibold text-lg mb-2">Connect & Schedule</h3>
      <p class="text-gray-600 text-sm">Message and plan a convenient session together.</p>
    </div>

    <div class="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
      <div class="text-3xl mb-3">⭐</div>
      <h3 class="font-semibold text-lg mb-2">Learn & Share</h3>
      <p class="text-gray-600 text-sm">Exchange knowledge and leave feedback to grow.</p>
    </div>
  </div>
</section>

    </div>
  );
};

export default HowItWorks;