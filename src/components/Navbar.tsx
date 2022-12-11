import React from "react";
import NavbarLeftItems from "./NavbarLeftItems";
import { useState } from "react";
5;
import Logo from "./Logo";
import { logo } from "../data/constants";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [replay, setReplay] = useState(false);

  const handleButton = () => {
    if (toggle) {
      setToggle(false);
      setReplay(false);
    } else {
      setToggle(true);
      setReplay(true);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-start bg-black rounded-3xl">
      <section className="w-full flex justify-center items-center relative mx-auto ">
        <nav className="md:gap-0 gap-4 relative w-full flex p-4 items-center justify-center sm:px-2 ">
          <Logo name={logo.nav} bg="black" />

          <div className="hidden md:block w-full">
            <NavbarLeftItems />
          </div>
          {/** MOBILE HAMBURGER */}
          <button className="" onClick={handleButton}>
            <div
              className={`md:hidden relative space-y-2 transition-all
          ${toggle ? "" : "block"}
          `}
            >
              <span
                className={`transition-all duration-500 ease-[cubic-bezier(.72,-0.95,.06,1.69)] block w-8 h-1 ${
                  toggle
                    ? "bg-primary relative  border-solid border-[1px] border-contrast translate-y-3 rounded-tl -rotate-45 "
                    : "bg-white"
                }`}
              ></span>
              <span
                className={`transition-all duration-500 ease-[cubic-bezier(.72,-0.95,.06,1.69)] block w-8 h-1 ${
                  toggle ? "opacity-0" : "bg-white"
                }`}
              ></span>
              <span
                className={`transition-all duration-500 ease-[cubic-bezier(.72,-0.95,.06,1.69)] block h-1 ${
                  toggle
                    ? "bg-logo relative border-solid border-[1px] border-contrast rounded-bl -translate-y-3 rotate-45 w-8"
                    : "bg-white w-5"
                }`}
              ></span>
            </div>
          </button>
          {/** MOBILE HAMBURGER */}
        </nav>
      </section>
      <div
        className={`${
          !toggle ? "hidden" : "flex animate-navbarMobile "
        } p-6 md:hidden justify-center items-center  w-full opacity-0 relative transition-all  right-0 left-0  my-2 rounded-xl flex`}
      >
        <ul className="list-none  flex justify-end items-start w-full flex-col flex-1 text-white">
          <motion.li>
            <motion.a
              className=" rounded   items-center  justify-center  text-center "
              href="#TheEstablishment"
              animate={replay ? "hidden" : ""}
              variants={{
                hidden: {
                  transition: {
                    type: "spring",
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              <AnimatedText text="Establishment" type="heading2" />
            </motion.a>
          </motion.li>
          <motion.li>
            <motion.a
              className="rounded items-center justify-center"
              href="#Gallery"
              animate={replay ? "hidden" : ""}
              variants={{
                hidden: {
                  transition: {
                    type: "spring",
                    staggerChildren: 0.05,
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
              animate={replay ? "hidden" : ""}
              variants={{
                hidden: {
                  transition: {
                    type: "spring",
                    staggerChildren: 0.01,
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
              animate={replay ? "hidden" : ""}
              variants={{
                hidden: {
                  transition: {
                    type: "spring",
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              <AnimatedText text="About" type="heading2" />
            </motion.a>
          </motion.li>


        </ul>
      </div>


    </div>
  );
};

export default Navbar;
