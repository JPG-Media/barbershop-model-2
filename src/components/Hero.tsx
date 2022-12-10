import React from "react";
import Image from "next/image";
import SvgLogo from "../assets/SvgLogo.svg";
import HeroCarousel from "./HeroCarousel";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import BookNow from "./BookNow";
import { motion } from "framer-motion";
import {hero} from "../data/constants"

const Hero = () => {
  return (
    <div className="flex flex-col  items-center justify-start  w-full">
      <div className="md:px-10 xl:px-20 mx-auto flex flex-col md:flex-row items-center md:gap-10 font-belda text-3xl w-full">
        <div className="w-full md:w-2/3 mx-auto">
          <div className="flex flex-col ">
            <div className="sm:w-full text-center sm:py-4">
              <div className="rounded-tl-[3rem] w-full flex items-center justify-center  p-4 md:min-h-[300px]">
                <HeroCarousel />
              </div>
            </div>
          </div>
        </div>

        <div className="font-primary flex flex-col md:px-0 px-4 items-center md:items-start font-thin text-3xl md:w-1/3">
          <div className="p-10 w-full flex items-center justify-center">
            <Image src={SvgLogo} alt="a" width={150} />
          </div>
          <h1 className="md:text-left text-center text-white">
            {hero}
          </h1>
          <div className="w-full justify-center items-start flex flex-col gap-[3px] py-4 pb-8">
              <div className="md:w-16 w-1/2 h-[5px] bg-primary rounded-t"></div>
              <div className="md:w-16 w-1/2 h-2 bg-logo1 rounded-[2px] barber-pole"></div>
              <div className="md:w-16 w-1/2 h-[5px] bg-logo rounded-b"></div>
            </div>


          <div className="flex  w-full flex-col md:flex-row text-3xl">
            <div 
            className=" items-center justify-center md:justify-start flex w-full sm:gap-3 xl:gap-5 gap-2" 
            
            >
             <span className="z-10 font-medium text-white"><BookNow /></span>

             {/* <motion.span
             initial={{x:-150, opacity:0}}
             animate={{x:0, opacity:[0, 0, 1]}}
             transition={{delay:1, times:[0, 0.1, 0.11]}}
             >
              <a
                className=" drop-shadow-[0px_12px_3px_rgba(255,208,0,0.35)] active:drop-shadow-none transition-all duration-500 flex md:justify-start justify-center"
                target="_blank" href="https://www.instagram.com/sharpoetry/"
              >
                <button className="bg-primary p-2 rounded-br-3xl  hover:bg-background hover:text-white transition-all duration-700 hover:ease-out hover:border-primary border-solid border-4 border-transparent font-logo active:translate-y-3 active:drop-shadow-[0_5px_0px_rgba(255,208,0,1)] drop-shadow-[0_12px_0px_rgba(255,208,0,0.5)] hover:drop-shadow-[0_12px_0px_rgba(255,208,0,1)] lg:text-3xl md:text-3xl sm:text-3xl text-3xl">
                  <FaInstagram/>
                </button>
              </a>
              </motion.span>
              <motion.span 
              initial={{x:-250, opacity:0}}
              animate={{x:0, opacity:[0, 0, 1]}}
              transition={{delay:1, times:[0, 0.1, 0.11]}}>
              <a
                className=" drop-shadow-[0px_12px_3px_rgba(255,208,0,0.35)] active:drop-shadow-none transition-all duration-500 flex md:justify-start justify-center"
                target="_blank" href="https://www.facebook.com/sharpoetry/"
              >
                <button className="bg-primary p-2 rounded-br-3xl  hover:bg-background hover:text-white transition-all duration-700 hover:ease-out hover:border-primary border-solid border-4 border-transparent font-zilla active:translate-y-3 active:drop-shadow-[0_5px_0px_rgba(255,208,0,1)] drop-shadow-[0_12px_0px_rgba(255,208,0,0.5)] hover:drop-shadow-[0_12px_0px_rgba(255,208,0,1)] lg:text-3xl md:text-3xl sm:text-3xl text-3xl">
                <FaFacebook/>
                </button>
              </a>
              </motion.span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
