import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";
import ExploreCard from "./ExploreCard";
import { heroImages } from "../data/constants";




// APP=======================================================
const HeroCarousel = () => {
  const [active, setActive] = useState('hero2')
  
  

  
  

  return (
    <div className="w-full h-full flex justify-center items-center">
      <motion.div className="cursor-grab w-full h-full rounded-l-3xl">
        <motion.div className="flex gap-3 flex-col md:flex-row w-full md:h-auto h-[90vh] sm:p-10 p-2">
          {heroImages.map((image, index)=>{
            return(
              <ExploreCard
                key={image.id}
                {...image}
                index={index}
                active={active}
                handleClick={setActive}
              />
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroCarousel;



