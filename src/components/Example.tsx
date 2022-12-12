import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { images } from "../data/constants";
import AnimatedText from "./AnimatedText";



  

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

/*
 * Experimenting with distilling swipe offset and velocity into a single variable, so the less distance a user has swiped, the more velocity they need to register as a swipe. Should accomodate longer swipes and short flicks without having binary checks on just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Example = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="flex flex-col w-full h-full relative">
    <div className=" flex rounded-tl-[45px] overflow-hidden justify-between items-center py-10 p-4 md:px-10 md:top-none bottom-0">
      <motion.div className="prev md:block hidden" onClick={() => paginate(-1)}
      whileHover={"visible"}
      variants={{
        visible: {
          transition: {
            type: "spring",
            duration: 0.05,
            staggerChildren: 0.02,
          },
        },
      }}>
        <AnimatedText text="PREVIOUS" type="heading2"/>
      </motion.div>
      <AnimatePresence initial={false} custom={direction}>
        <div className="relative cursor-grab flex items-center justify-center  overflow-clipped md:px-12 w-full h-full">
        <motion.img
          className=" object-cover max-w-full
          max-h-full border-solid border-white border-2"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
        </div>
      </AnimatePresence>


      <motion.div className="next md:block hidden" onClick={() => paginate(1)}
      whileHover={"visible"}
      variants={{
        visible: {
          transition: {
            type: "spring",
            duration: 0.05,
            staggerChildren: 0.02,
          },
        },
      }}>
        <AnimatedText text="NEXT" type="heading2"/>
      </motion.div>
      </div>


      <div className="flex w-full py-2 justify-center items-center absolute bottom-0 gap-2">



      <motion.div className="prev md:hidden flex justify-center items-center w-1/2" onClick={() => paginate(-1)}
      animate={"hidden"}
      variants={{
        visible: {
          transition: {
            type: "spring",
            duration: 0.05,
            staggerChildren: 0.02,
          },
        },
      }}>
        <p className="text-2xl">
        <AnimatedText text="PREV" type="paragraph"/>
        </p>
      </motion.div>

      <motion.div className="next md:hidden flex justify-center items-center w-1/2" onClick={() => paginate(1)}
      animate={"hidden"}
      variants={{
        visible: {
          transition: {
            type: "spring",
            duration: 0.05,
            staggerChildren: 0.02,
          },
        },
      }}>
        <p className="text-2xl">
        <AnimatedText text="NEXT" type="paragraph"/>
        </p>
      </motion.div>
      </div>
    </div>
  );
};

export default Example



