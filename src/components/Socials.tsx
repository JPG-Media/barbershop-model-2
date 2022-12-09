import React from "react";
import { theEstablishment, workingHours } from "../data/constants";

const Socials = () => {
  return (
    <div className="md:p-0 w-full flex flex-col">
      <div
        className=" w-full flex flex-col md:flex-row sm:p-10
      p-4 rounded-tl-3xl rounded-br-[45px] gap-5 drop-shadow-[3px_-4px_0px_rgba(255,255,255,1)] bg-gradient-green"
      >
        <div className="w-full md:w-3/5 sm:px-10 text-left flex items-center">
          <p className="font-primary xxl:text-6xl xl:text-4xl md:text-3xl text-xl text-white font-extralight ">
            {theEstablishment}
          </p>
        </div>
        <div className="md:w-2/5 w-full  rounded-tl-3xl rounded-br-3xl">
          <img
            src="/images/place.jpg"
            className="rounded-tl-2xl border-solid border-4 border-background rounded-br-2xl w-full h-full object-cover"
            alt="place"
          />
        </div>
      </div>

      <div className="py-10 flex flex-col md:flex-row justify-center items-center md:items-start text-center gap-5 ">
        <div className="p-10 border-solid border-[3px] border-primary rounded-bl-3xl text-white font-bold text-4xl font-logo w-full">
          <h1>
            {workingHours.start} <span className="font-primary">&#10233;</span>{" "}
            {workingHours.end}
          </h1>
          <p>
            {workingHours.from}
            <span className="text-white font-primary">am to&nbsp;</span>
            {workingHours.to}
            <span className="text-white font-primary">pm</span>
          </p>
        </div>
        <div className="p-11 border-solid border-[3px] border-secondary rounded-br-3xl text-white font-bold text-4xl font-logo w-full">
          <h1>{workingHours.exception}</h1>
          <p>
            {workingHours.excFrom}
            {
            workingHours.excTo != '' ? 
            <div>
              <span className="text-white font-primary">am to&nbsp;</span>
            {workingHours.excTo}
            <span className="text-white font-primary">pm</span>
            </div> : ''
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Socials;
