import React from "react";
import { colors, theEstablishment, workingHours } from "../data/constants";
import { placeImage } from "../data/constants";

const Socials = () => {
  return (
    <div className="md:p-0 w-full gap-24 flex flex-col">
      <div
        className=" w-full flex flex-col md:flex-row sm:py-4
      p-4  gap-5 "
      >
        <div className="w-full md:w-3/5 sm:pr-4 text-left flex items-center">
          <p
            className={`font-primary xxl:text-3xl xl:text-2xl md:text-xl text-lg ${colors.primaryText} font-extralight `}
          >
            {theEstablishment}
          </p>
        </div>
        <div className="md:w-2/5 w-full  rounded-tl-3xl rounded-br-3xl">
          <img
            src={placeImage}
            className="rounded-tl-2xl border-solid border-4 border-secondary rounded-br-2xl w-full h-full object-cover"
            alt="place"
          />
        </div>
      </div>

      <div
        className={`${colors.primaryText} py-10 flex flex-col md:flex-row justify-center items-center md:items-start text-center gap-5`}
      >
        <div className="p-10 border-solid border-[3px] border-secondary rounded  font-bold md:text-3xl
        text-base font-logo  text-left flex md:flex-row flex-col justify-center items-center w-11/12 md:w-1/2">
          <ul className="flex w-full flex-col items-center justify-center">
            <li className="flex w-full md:flex-row flex-col justify-center border-b-2 border-dashed border-primary p-4">
              <h1 className="w-full text-left">Monday:</h1>
              <p className="w-full text-left sm:text-right">{workingHours.Monday}</p>
            </li>
            <li className="flex w-full sm:flex-row flex-col justify-center border-b-2 border-dashed border-primary p-4">
              <h1 className="w-full text-left">Tuesday:</h1>
              <p className="w-full text-left sm:text-right">{workingHours.Tuesday}</p>
            </li>
            <li className="flex w-full sm:flex-row flex-col justify-center border-b-2 border-dashed border-primary p-4">
              <h1 className="w-full text-left">Wednesday:</h1>
              <p className="w-full text-left sm:text-right">{workingHours.Wednesday}</p>
            </li>
            <li className="flex w-full sm:flex-row flex-col justify-center border-b-2 border-dashed border-primary p-4">
              <h1 className="w-full text-left">Thursday:</h1>
              <p className="w-full text-left sm:text-right">{workingHours.Thursday}</p>
            </li>
            <li className="flex w-full sm:flex-row flex-col justify-center border-b-2 border-dashed border-primary p-4">
              <h1 className="w-full text-left">Friday:</h1>
              <p className="w-full text-left sm:text-right">{workingHours.Friday}</p>
            </li>
            <li className="flex w-full sm:flex-row flex-col justify-center border-b-2 border-dashed border-primary p-4">
              <h1 className="w-full text-left">Saturday:</h1>
              <p className="w-full text-left sm:text-right">{workingHours.Saturday}</p>
            </li>
            <li className="flex w-full sm:flex-row flex-col justify-center border-b-2 border-dashed border-primary p-4">
              <h1 className="w-full text-left">Sunday:</h1>
              <p className="w-full text-left sm:text-right">{workingHours.Sunday}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Socials;
