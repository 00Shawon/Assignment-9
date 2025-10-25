import React from "react";

const Header = () => {
  return (
    <div className="carousel  h-[500px] rounded-2xl mb-2 ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="/src/assets/creative.jpg" className="w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/0 to-black/80" />

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>

        <div className="absolute left-10 top-10 items-center gap-3 flex flex-col">
          <p className="text-3xl text-white">Creative Art</p>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="/src/assets/Fitness.jpg" className="w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/0 to-black/80" />

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute left-10 top-10 items-center gap-3 flex flex-col">
          <p className="text-3xl text-white">Fitness</p>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="/src/assets/cooking.jpg" className="w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/0 to-black/80" />

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute left-10 top-10 items-center gap-3 flex flex-col">
          <p className="text-3xl text-white">Culinary</p>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="/src/assets/music.jpg" className="w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/30 to-black/80" />

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute left-10 top-10 items-center gap-3 flex flex-col">
          <p className="text-3xl text-white">Music</p>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src="/src/assets/technology.jpg" className="w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/0 to-black/50" />

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute left-10 top-10 items-center gap-3 flex flex-col">
          <p className="text-3xl text-white">Technology</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
