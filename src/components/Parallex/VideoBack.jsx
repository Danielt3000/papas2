import React from "react";
import video from "../LazyLoadedVideo/assets/potato.mov";

function VideoBack() {
  return (
    <div className="pb-10">
      <div class="video-container  ">
        <span className="blur "></span>
        <video class="video" src={video} autoPlay muted loop />
      </div>

      <div
        class="index z-10 text-3xl sm:text-4xl md:text-5xl xl:text-6xl  text-center text-white xl:mt-28     py-5"
        data-aos="zoom-in"
      >
        <h1 class="w-9/12 font-bold  sm:w-7/12 md:w-10/12 lg:w-6/12 mx-auto">
          Tu Solución de Papas: Patatas Impecables, Potencia Industrial.
        </h1>
        <button
          class="bg-[#21209C] mt-5 md:mt-20 text-white active:bg-[#21209C] font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
        >
          Contactanos
        </button>
      </div>
    </div>
  );
}

export default VideoBack;
