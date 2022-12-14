import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import Logo from "./Logo";
import { barbershopInfo, logo, colors } from "../data/constants";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleButton = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <section className={`w-full flex justify-between relative mx-auto bg-gradient-to-r ${colors.bgGradient}`}>
      <nav className="md:gap-10 gap-4 justify-between relative w-full flex md:flex-row flex-col py-8">
        <div
          className=" md:w-auto gap-2 flex items-start justify-start
         p-4 rounded-b-3xl rounded-tl-3xl md:text-5xl xl:text-8xl sm:text-2xl text-md flex-col"
        >
          <div className="flex justify-start items-start">
          <Logo name={logo.footer.name} text={logo.footer.text} border={logo.footer.border}  />
          </div>
          <div className="flex md:justify-start md:items-start justify-center items-center text-center w-full py-4">
            <a className={`text-base  md:w-1/2 ${colors.secondaryText} font-primary font-light`}>
              WilliamBarber©2022
            </a>
          </div>
        </div>
        <div className="flex md:flex-row md:gap-0 gap-4 flex-col justify-between md:pr-48 w-4/5 md:px-36 px-10 py-1">
          <div
            className={`md:w-auto flex flex-col font-secondary justify-start items-start
         p-4 ${colors.primaryText} text-white  md:text-2xl xl:text-8xl sm:text-2xl text-md border-solid border-l-2 border-primary`}
          >
            <h1 className={` md:text-3xl xl:text-4xl sm:text-2xl text-md pb-4 font-text`}>
              Contact
            </h1>
            <div className="px-1 font-primary font-extralight">
              <h1 className="text-base ">{barbershopInfo.address}</h1>
              <h1 className="text-base ">{barbershopInfo.phone}</h1>
              <h1 className="text-base ">{barbershopInfo.email}</h1>
            </div>
          </div>
          <div className={`gap-2 md:w-auto flex flex-col font-secondary border-solid border-l-2 border-primary p-4 
          ${colors.primaryText} md:text-2xl xl:text-8xl sm:text-2xl text-md`}>
            <h1 className=" md:text-3xl xl:text-4xl sm:text-sm text-md mb-2 font-text">
              Navigation
            </h1>
            <ul className="px-1 flex flex-col font-primary text-base items-start font-light">
            <motion.li>
                <motion.a
                  className=" rounded   items-center  justify-center  text-center "
                  href="#Home"
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
                  <AnimatedText text="Home" type="paragraph" />
                </motion.a>
              </motion.li>
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
          <div className= {`md:w-auto flex font-secondary items-center justify-center border-solid border-l-2 border-primary p-4 ${colors.secondaryText} md:text-5xl xl:text-4xl sm:text-2xl text-md`}>
            <div className="md:flex-col flex h-full justify-center gap-6 items-center  ">
              <a
                target="_blank"
                className="text-4xl"
                href={barbershopInfo.instagram}
              >
                <FaInstagram />
              </a>
              <a
                target="_blank"
                className="text-4xl"
                href={barbershopInfo.facebook}
              >
                <FaFacebook />
              </a>
            </div>

           
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
