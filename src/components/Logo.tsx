import React from "react";

const Logo = (props: any) => {


  return (
    <div
      className={`w-full md:w-auto flex items-center justify-center ${props.text} ${props.border} pl-4 pr-0 py-2 md:text-3xl xl:text-5xl text-2xl font-logo border-black rounded-br-xl border-solid border-l-[3px] border-b-4 `}
    >
      <div className="border-b-4 border-solid border-logo2 rounded-br-xl pb-[2px]">
        <h2 className="  leading-snug  rounded-br-xl   border-b-4 border-solid border-logo mb-1">
          {props.name}
        </h2>
      </div>
    </div>
  );
};

export default Logo;
