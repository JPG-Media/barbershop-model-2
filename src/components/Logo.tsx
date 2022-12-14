import React from "react";

const Logo = ({text, border, name}:any) => {

 


  return (
    <div
      className={`${border} border-solid border-l-[3px] border-b-4 w-full md:w-auto flex items-center justify-center ${text}  pl-4 pr-0 py-2 md:text-3xl xl:text-5xl text-2xl font-logo rounded-br-xl  `}
    ><span className="hidden border-black "></span>
      <div className="border-b-4 border-solid border-logo2 rounded-br-xl pb-[2px]">
        <h2 className="  leading-snug  rounded-br-xl   border-b-4 border-solid border-logo mb-1">
          {name}
        </h2>
      </div>
    </div>
  );
};

export default Logo;
