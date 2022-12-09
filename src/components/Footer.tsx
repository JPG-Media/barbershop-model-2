import React from "react";
import BarberPole from "./BarberPole";
import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";
import { logo } from "../data/constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleButton = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className="w-full flex flex-col justify-center items-start ">
      <section className=" w-full flex justify-center items-center relative mx-auto ">
        <nav className="md:gap-10 gap-4 relative w-full flex p-4 items-center justify-center sm:px-2 ">
          

          <div className=" flex justify-center items-center">
            <motion.div
              animate={{ rotate: [-3, 3] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <a
                className=" drop-shadow-[0px_12px_3px_rgba(255,208,0,0.35)] active:drop-shadow-none transition-all duration-500 flex md:justify-start justify-center"
                href="#"
              >
                <button className="bg-primary p-4 rounded-tl-3xl   hover:bg-secondary transition-all duration-700 hover:ease-out hover:border-primary border-solid border-4 border-transparent font-zilla active:translate-y-3 active:drop-shadow-[0_5px_0px_rgba(255,208,0,1)] drop-shadow-[0_12px_0px_rgba(255,208,0,0.5)] hover:drop-shadow-[0_12px_0px_rgba(255,208,0,1)] lg:text-6xl md:text-4xl sm:text-2xl text-lg hover:text-white">
                  &#8593;
                </button>
              </a>
            </motion.div>
          </div>

          <div
            className=" md:w-auto flex items-center justify-center  
         p-4 rounded-b-3xl rounded-tl-3xl md:text-5xl xl:text-8xl sm:text-2xl text-md"
          >
            <Logo name={logo.nav} bg='black'/>
          </div>
          <motion.div
            animate={{ rotate: [3, -3] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className='xs:block hidden'
          >
            <a
              className=" drop-shadow-[0px_12px_3px_rgba(255,208,0,0.35)] active:drop-shadow-none transition-all duration-500 flex md:justify-start justify-center"
              href="#"
            >
              <button className="bg-primary p-4 rounded-tr-3xl  hover:bg-secondary transition-all duration-700 hover:ease-out hover:border-primary border-solid border-4 border-transparent font-zilla active:translate-y-3 active:drop-shadow-[0_5px_0px_rgba(255,208,0,1)] drop-shadow-[0_12px_0px_rgba(255,208,0,0.5)] hover:drop-shadow-[0_12px_0px_rgba(255,208,0,1)] lg:text-6xl md:text-4xl sm:text-2xl text-lg hover:text-white">
                &#8593;
              </button>
            </a>
          </motion.div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
