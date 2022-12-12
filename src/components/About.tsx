import React from "react";
import Map from "./Map";
import { GrStar } from "react-icons/gr";
import Logo from "./Logo";
import { about } from "../data/constants";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const About = () => {
  const list: any = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.02 },
    },
  };

  const item: any = {
    initial: {
      paddingLeft: 2,
      paddingRight: 2,
    },
    animate: {
      paddingLeft: [0, 10, 10, 0],
      paddingRight: [0, 10, 10, 0],
      rotateY: [0, 0, 360, 360],
      transition: {
        duration: 1.5,
        times: [0, 0.25, 0.75, 1],
        repeat: Infinity,
        repeatDelay: 3.5,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="flex md:flex-row flex-col py-4">
      <div className="flex justify-center md:items-start items-center">
      <h1 className="lg:text-8xl sm:text-6xl text-4xl font-logo font-bold pt-4">
        <Logo name="ABOUT" bg="black" />
      </h1>
      </div>
      <div className="w-full flex  px-2 md:px-10  gap-8 relative  min-h-[60vh]  rounded-tl-3xl rounded-br-3xl mt-10">
        <div className="w-full flex flex-col md:flex-row justify-start items-center sm:py-10 py-4  h-full rounded-tl-3xl rounded-br-3xl ">
          <div className="flex h-1/2 flex-col md:w-1/2 justify-center items-center gap-5 md:mr-10 lg:px-6">
            <div className="w-full flex justify-start">
              <h1
                className="flex justify-between items-end w-full text-4xl font-zilla text-center 
            text-yellow-400 mb-10 "
              >
                <div className=" h-1 w-1/3 flex items-center rounded-bl-[45px]"></div>
                <motion.div
                  className="flex"
                  initial="initial"
                  animate="animate"
                  variants={list}
                >
                  <motion.span variants={item}>
                    <GrStar />
                  </motion.span>
                  <motion.span
                    initial={{ y: 0 }}
                    animate={{ y: [0, -25, -25, 0] }}
                    transition={{
                      duration: 1.5,
                      times: [0, 0.25, 0.75, 1],
                      repeat: Infinity,
                      repeatDelay: 3.5,
                      repeatType: "reverse",
                    }}
                    variants={item}
                  >
                    <GrStar />
                  </motion.span>
                  <motion.span
                    initial={{ y: 0 }}
                    animate={{ y: [0, -50, -50, 0] }}
                    transition={{
                      duration: 1.5,
                      times: [0, 0.25, 0.75, 1],
                      repeat: Infinity,
                      repeatDelay: 3.5,
                      repeatType: "reverse",
                    }}
                    variants={item}
                  >
                    <GrStar />
                  </motion.span>
                  <motion.span
                    initial={{ y: 0 }}
                    animate={{ y: [0, -25, -25, 0] }}
                    transition={{
                      duration: 1.5,
                      times: [0, 0.25, 0.75, 1],
                      repeat: Infinity,
                      repeatDelay: 3.5,
                      repeatType: "reverse",
                    }}
                    variants={item}
                  >
                    <GrStar />
                  </motion.span>
                  <motion.span variants={item}>
                    <GrStar />
                  </motion.span>
                </motion.div>
                <div className=" h-1 w-1/3 flex items-center rounded-br-[45px]"></div>
              </h1>
            </div>

            <div>
              <p className="text-white font-primary font-extralight xl:text-3xl sm:text-2xl  text-md  ">
                {about.description}
              </p>
            </div>
            <div className="w-full flex justify-center">
              <h1 className="text-center  text-3xl font-light font-text text-primary ">
                {about.address}
              </h1>
            </div>
            <div className="w-full justify-center items-center flex flex-col gap-[3px] p-2">
               
              <div className="md:w-16 w-1/2 h-[4px] bg-logo rounded-b-3xl"></div>
            </div>

            <div className="flex-row flex h-full justify-center gap-6 items-center mb-5 ">
              <a
                target="_blank"
                className="text-4xl"
                href="https://www.instagram.com/sharpoetry/"
              >
                <FaInstagram />
              </a>
              <a
                target="_blank"
                className="text-4xl"
                href="https://www.instagram.com/sharpoetry/"
              >
                <FaFacebook />
              </a>
              <a
                target="_blank"
                className="text-4xl"
                href="https://www.instagram.com/sharpoetry/"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="relative md:w-1/2 w-full h-1/2 flex justify-start items-center">
            <div className="w-full  flex justify-end items-center bg-gradient-dark rounded-tl-3xl rounded-br-3xl ">
              <div className="w-full h-[50vh] sm:h-[60vh]">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
