import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const NavbarLeftItems = () => {
  return (
    <div className="container px-4 w-full flex flex-wrap items-center justify-end ">
      <div className="">

      <ul className="flex justify-center items-center gap-3 list-none w-full text-lg xl:text-2xl text-white font-text font-light ">
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
            <AnimatedText text="Establishment" type="heading2" />
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
            <AnimatedText text="Gallery" type="heading2" />
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
            <AnimatedText text="Services" type="heading2" />
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
            <AnimatedText text="About" type="heading2" />
          </motion.a>
        </motion.li>
        <li className="flex  text-white flex-col text-center">
           +375 (29) 847 43 23 <br />
            Пн-Bс 09:00-21:00
          </li>
      </ul>
      </div>
      
    </div>
  );
};

export default NavbarLeftItems;
