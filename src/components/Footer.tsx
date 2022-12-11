import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { useState } from "react";
import Logo from "./Logo";
import { logo } from "../data/constants";
import SocialMediaIcons from "./SocialMediaIcons";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleButton = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <section className=" w-full flex justify-between relative mx-auto bg-gradient-green">
      <nav className="md:gap-10 gap-4 justify-between relative w-full flex  py-8">
        <div
          className=" md:w-auto gap-2 flex items-center justify-start
         p-4 rounded-b-3xl rounded-tl-3xl md:text-5xl xl:text-8xl sm:text-2xl text-md flex-col"
        >
          <Logo name={logo.nav} bg="black" />

          <div className="flex justify-start items-start w-full py-4">
            <a className="text-base  w-1/2 text-white font-primary font-light">
              WilliamBarber©2022
            </a>
          </div>
        </div>
        <div className="flex justify-between pr-48 w-4/5 px-36 py-1">
          <div
            className=" md:w-auto flex flex-col font-secondary justify-start items-start
         p-4  text-white  md:text-2xl xl:text-8xl sm:text-2xl text-md border-solid border-l-2 border-[rgb(255,208,0)]"
          >
            <h1 className="text-white md:text-3xl xl:text-4xl sm:text-2xl text-md pb-4 font-text">
              Contact
            </h1>
            <div className="px-1 font-primary font-extralight">
              <h1 className="text-base ">Minsk, rua Lenina, 33</h1>
              <h1 className="text-base ">Telefone: +375 (29) 847 43 23</h1>
              <h1 className="text-base ">E-mail: golovorez@mail.ru</h1>
            </div>
          </div>
          <div className="gap-2 md:w-auto flex flex-col font-secondary border-solid border-l-2 border-[rgb(255,208,0)] p-4 text-white md:text-2xl xl:text-8xl sm:text-2xl text-md">
            <h1 className=" md:text-3xl xl:text-4xl sm:text-sm text-md mb-2 font-text">
              Navigation
            </h1>
            <ul className="px-1 flex flex-col font-primary text-base items-start font-extralight">
            <motion.li>
            <motion.a
              className=" rounded   items-center  justify-center  text-center "
              href="#TheEstablishment"
              whileHover={"visible"}
              variants={{
                visible: {
                  transition: {
                    type: "spring",
                    duration: 0.05,
                    staggerChildren: 0.02,
                  },
                },
              }}
            >
              <AnimatedText text="The Establishment" type="paragraph" />
            </motion.a>
          </motion.li>
          <motion.li>
            <motion.a
              className="rounded items-center justify-center text-center"
              href="#About"
              whileHover={"visible"}
              variants={{
                visible: {
                  transition: {
                    type: "spring",
                    duration: 0.05,
                    staggerChildren: 0.02,
                  },
                },
              }}
            >
              <AnimatedText text="About" type="paragraph" />
            </motion.a>
          </motion.li>

          

          <motion.li>
            <motion.a
              className="rounded items-center justify-center text-center"
              href="#Services"
              whileHover={"visible"}
              variants={{
                visible: {
                  transition: {
                    type: "spring",
                    duration: 0.05,
                    staggerChildren: 0.02,
                  },
                },
              }}
            >
              <AnimatedText text="Services" type="paragraph" />
            </motion.a>
          </motion.li>

          <motion.li>
            <motion.a
              className="rounded items-center justify-center text-center"
              href="#Gallery"
              whileHover={"visible"}
              variants={{
                visible: {
                  transition: {
                    type: "spring",
                    duration: 0.05,
                    staggerChildren: 0.02,
                  },
                },
              }}
            >
              <AnimatedText text="Gallery" type="paragraph" />
            </motion.a>
          </motion.li>
            </ul>
          </div>
          <div className=" md:w-auto flex flex-col font-secondary gap-5 items-center justify-center border-solid border-l-2 border-[rgb(255,208,0)] p-4 text-gray-400 md:text-5xl xl:text-4xl sm:text-2xl text-md">
            <SocialMediaIcons />
            <SocialMediaIcons />
            <SocialMediaIcons />
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
      </nav>
    </section>
  );
};

export default Navbar;
