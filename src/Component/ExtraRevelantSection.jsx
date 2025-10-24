import React from 'react';

const ExtraRevelantSection = () => {
  return (
<div class="relative h-[300px] w-full rounded-2xl overflow-hidden shadow-lg bg-center bg-cover bg-no-repeat bg-[url(https://i.ibb.co.com/4g9h3P3V/lucas-k-w-QLAGv4-OYs-unsplash.jpg)]">
 
  <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-black/50"></div>


  <div class="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
    <h2 class="text-4xl font-bold tracking-wide mb-2 drop-shadow-lg">Learn. Teach. Connect. </h2>
    <p class="max-w-md text-sm opacity-90">
     Anything Anytime but in Swap skill .
    </p>
    <button class="mt-4 px-5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-medium rounded-full transition-all duration-300">
      Explore
    </button>
  </div>
</div>

  );
};

export default ExtraRevelantSection;