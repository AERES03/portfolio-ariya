/** @format */

import React from "react";
import Squares from "../Squares";
import Fotoariya from "../../../public/img/fotoariya.jpeg";
const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden" id="home">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Squares
          speed={0.4}
          squareSize={50}
          direction="diagonal"
          borderColor="rgba(255,255,255,0.2)"
          hoverFillColor="#222222"
        />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-16 sm:px-48 md:px-[235px] lg:px-[25%]">
        <div className="text-center text-white">
          <div className="relative">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-audiowide mb-1">
              Ariya reza saputra
            </h1>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-poppins font-bold text-left">
              FULLSCTACK <br />
              DEVELOPER
            </h1>
            <img
              src={Fotoariya}
              alt=""
              srcSet=""
              className="w-14 sm:w-20 md:w-24 sm:bottom-3 md:bottom-4 lg:w-32 lg:bottom-5 absolute bottom-2 right-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
