import React from "react";

const Logo = (props: any) => {
  return (
    <div
      className={`w-full md:w-auto flex items-center justify-center text-white pl-4 pr-2 py-2 drop-shadow-[-3px_4px_0px_rgba(255,255,255,1)] bg-${props.bg}
          md:text-3xl xl:text-5xl text-2xl font-logo font-light rounded-br-3xl`}
    >
      <div className="border-b-4 border-solid border-secondary rounded-br-xl pb-[2px]">
        <h2 className="  leading-snug  rounded-br-xl   border-b-4 border-solid border-primary mb-1">
          {props.name}
        </h2>
      </div>
    </div>
  );
};

export default Logo;
