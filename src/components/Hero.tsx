import React from "react";
import Image from "next/image";
import SvgLogo from "../assets/SvgLogo.svg";
import HeroCarousel from "./HeroCarousel";
import BookNow from "./BookNow";
import { barbershopInfo, hero, hero2, colors } from "../data/constants";

const Hero = () => {
  return (
    <div className="flex flex-col  items-center justify-start  w-full">
      <div className="md:px-10 xl:px-20 mx-auto flex flex-col md:flex-row items-center md:gap-10 font-belda text-3xl w-full">
        <div className="w-full md:w-2/3 mx-auto">
              <div className="rounded-tl-[3rem] w-full flex items-center justify-center  p-4 md:min-h-[300px]">
                <HeroCarousel />
          </div>
        </div>

        <div className="font-primary flex flex-col md:px-0 px-4 items-center md:items-start font-thin text-3xl md:w-1/3 gap-10">
          <div className="p-10 w-full flex items-center justify-center">
            <Image src={SvgLogo} alt="a" width={150} />
          </div>
          <div className="gap-2 flex flex-col">
            <h1 className={`md:text-left font-bold font-text text-center ${colors.primaryText}`}>{hero}</h1>
            <p className={`${colors.secondaryText} font-primary text-lg font-light`}>
              {hero2}
            </p>
          </div>

          

          <div className="flex  w-full flex-col md:flex-row text-3xl">
            <div className=" items-center justify-center md:justify-start flex w-full sm:gap-3 xl:gap-5 gap-2">
              <span className="z-10 font-medium text-black">
                <BookNow name='Book Now'/>
              </span>
            </div>
          </div>
          <div className=" gap-4 flex font-primary font-extralight w-full justify-start pt-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill={colors.primary}
            >
              <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
            </svg>
            <h1 className={`${colors.secondaryText} text-base md:text-xl xl:text-2xl sm:text-sm font-text font-medium`}>
              {barbershopInfo.address}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
