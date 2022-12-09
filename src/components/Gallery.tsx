import React from "react";
import Example from "./Example";
import Logo from "./Logo";



const Gallery = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <div className="flex justify-start w-full">
      <h1 className="lg:text-8xl sm:text-6xl text-4xl py-6">
        <Logo name='Gallery' bg='background'/>
      </h1></div>
      <div className="w-full h-full mx-auto drop-shadow-[3px_-4px_0px_rgba(255,255,255,1)] bg-background mt-10 rounded-tl-3xl rounded-br-3xl">
        <div className="flex flex-col w-full justify-center items-center ">
          <div className="md:w-11/12 text-center  md:py-10 w-full ">
            <div className=" flex justify-center relative h-[60vh] 
             rounded-tl-[45px] rounded-br-[45px]
            ">
              <Example  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
