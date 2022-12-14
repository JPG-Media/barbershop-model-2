import React from "react";
import { colors, theEstablishment, workingHours } from "../data/constants";

const Socials = () => {
  return (
    <div className="md:p-0 w-full gap-24 flex flex-col">
      <div
        className=" w-full flex flex-col md:flex-row sm:py-4
      p-4  gap-5 "
      >
        <div className="w-full md:w-3/5 sm:pr-4 text-left flex items-center">
          <p className={`font-primary xxl:text-3xl xl:text-2xl md:text-xl text-lg ${colors.primaryText} font-extralight `}>
            {theEstablishment}
          </p>
        </div>
        <div className="md:w-2/5 w-full  rounded-tl-3xl rounded-br-3xl">
          <img
            src="/images/place.jpg"
            className="rounded-tl-2xl border-solid border-4 border-secondary rounded-br-2xl w-full h-full object-cover"
            alt="place"
          />
        </div>
      </div>

      <div className={`${colors.primaryText} py-10 flex flex-col md:flex-row justify-center items-center md:items-start text-center gap-5 `}>
        <div className="p-10 border-solid border-[3px] border-primary rounded-bl-3xl  font-bold text-4xl font-logo w-full">
          <h1>
            {workingHours.start} <span className="font-primary">&#10233;</span>{" "}
            {workingHours.end}
          </h1>
          <p>
            {workingHours.from}
            <span className={` font-primary`}>am to&nbsp;</span>
            {workingHours.to}
            <span className={` font-primary`}>pm</span>
          </p>
        </div>
        <div className="p-11 border-solid border-[3px] border-secondary rounded-br-3xl  font-bold text-4xl font-logo w-full">
          <h1>{workingHours.exception}</h1>
          <p>
            {workingHours.excFrom}
            {
            workingHours.excTo != '' ? 
            <div className="inline">
              <span className={` font-primary`}>am to&nbsp;</span>
            {workingHours.excTo}
            <span className={` font-primary`}>pm</span>
            </div> : ''
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Socials;
