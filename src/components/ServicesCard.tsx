import React from "react";
import { useEffect, useRef, useState, useMemo } from "react";
import BarberPole from "./BarberPole";
import { AnimatePresence, motion } from "framer-motion";

const useElementOnScreen = (options: any) => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (targetRef.current) observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) observer.unobserve(targetRef.current);
    };
  }, [targetRef, options]);

  return [targetRef, isVisible];
};

const ServicesCard = (props: any) => {
  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
      threshold: 0.45,
    };
  }, []);

  const [priceRef, priceIsVisible]: any = useElementOnScreen(options);

  return (
    <div
      className="bg-gradient-green w-11/12 gap-5 md:gap-0 p-10 lg:p-16 text-white 
       border-solid border-[1px] border-[rgb(255,208,0)] flex md:flex-row flex-col items-center justify-between"
    >
      <div
        ref={priceRef}
        className="flex md:w-2/3 w-full md:justify-start justify-center flex-col md:px-10 py-4 gap-2 "
      >
        <h1 className="text-4xl lg:text-6xl justify-center font-medium font-logo uppercase">
          {props.name}
        </h1>
        <p className="text-lg font-primary font-light lg:text-2xl">
          {props.description}
        </p>
      </div>

      <div
        className={`flex items-center justify-between md:text- md:w-1/3 w-full`}
      >
        <AnimatePresence>
          {priceIsVisible && (

          <motion.div
            className=""
            initial={{
              opacity: 0,
              x: 190,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition = {{
              delay: 0.2,
              duration: 0.3,
              bounce: 0.3,
              type: 'spring'
            }}
          >
            <BarberPole />
          </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {priceIsVisible && (
        <motion.h1

        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition = {{
          delay: 0.2,
          duration: 0.4,
        }}


          className={`${
            priceIsVisible ? "" : ""
          }  text-5xl lg:text-8xl text-white font-primary font-bold`}  
            >
          {/* animate-price */}
          <span className="font-primary font-normal leading-loose text-2xl lg:text-4xl">
            $
          </span>
          {props.price}
          <span className=" font-normal leading-loose  text-2xl lg:text-5xl">
            ,00
          </span>
        </motion.h1>
        )}
        </AnimatePresence>
        <AnimatePresence>
          {priceIsVisible && (

          <motion.div
            className=""
            initial={{
              opacity: 0,
              x: -190,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition = {{
              delay: 0.2,
              bounce: 0.3,
              duration: 0.3,
              type: 'spring'
            }}
          >
            <BarberPole />
          </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServicesCard;
