import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { barbershopInfo, colors, logo } from "../src/data/constants";

import {
  Hero,
  Navbar,
  Services,
  About,
  Footer,
  Logo,
  Gallery,
  Socials,
} from "../src/components";




const Home: NextPage = () => {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-center bg-gradient-to-r ${colors.bgGradient} `}>
      <Head>
        <title>{barbershopInfo.name}</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      {/* NAVBAR========================================================================================== */}
      <div id="Home" className=" z-10 flex justify-between px-10 items-center  bg-opacity-100 backdrop-blur-md py-4 w-full border-solid border-b-[2px] border-primary bg-black  ">
        <Navbar />
      </div>
      {/* NAVBAR========================================================================================== */}

      {/* HERO SECTION==================================================================================== */}
      <div className={`py-4 flex justify-center items-center w-full border-solid border-b-[2px] border-primary bg-gradient-to-r ${colors.bgGradient}`}>
        <div className="flex justify-center items-center py-4 px-4 w-11/12">
          <Hero />
        </div>
      </div>
      {/* HERO SECTION==================================================================================== */}

      {/* ESTABLISHMENT========================================================================================*/}
      <div
        id="TheEstablishment"
        className={` py-8 z-10 flex flex-col px-2 md:px-10 items-center justify-center w-full   
        border-solid border-b-[2px] border-primary ${colors.bgPrimary}`}
      >
        <div className="flex md:justify-start justify-center md:items-start items-center w-full">
          <div>
          <h1
            className="lg:text-8xl sm:text-6xl text-4xl text-center font-logo font-bold mb-5
        w-full justify-start items-start flex"
          >
            <Logo name={logo.establishment.name} text={logo.establishment.text} border={logo.establishment.border} />
          </h1>
          </div>
        </div>
        <div className="w-11/12 flex justify-center items-center">
          <Socials />
        </div>
      </div>
      {/* ESTABLISHMENT========================================================================================*/}
      {/* About======================================================================================== */}

      <div
        id="About"
        className={`py-8 flex flex-col justify-start items-start border-solid border-b-[2px] border-primary bg-gradient-to-r 
        ${colors.bgGradient} text-white  w-full px-2 md:px-10`}
      >
        <About />
      </div>

      {/* About========================================================================================*/}

      {/* SERVICES======================================================================================== */}

      <div
        id="Services"
        className={`py-4 flex flex-col justify-start items-start border-solid border-b-[2px] border-primary  ${colors.bgPrimary} w-full px-2 md:px-10`}
      >
        <div className="flex md:justify-start justify-center md:items-start items-center w-full">
          <h1 className="lg:text-8xl sm:text-6xl text-4xl  font-primary font-normal py-6">
            <Logo name={logo.services.name} text={logo.services.text} border={logo.services.border} />
          </h1>
        </div>

        <Services />
      </div>

      {/* SERVICES========================================================================================*/}
      
      {/* Gallery SECTION==================================================================================== */}
      <div
        id="Gallery"
        className=" bg-background py-4 flex justify-center items-center w-full border-solid border-b-[2px] 
        border-primary"
      >
        <div className="flex justify-center items-center py-4 px-2 md:px-10 w-full font-logo font-semibold ">
          <Gallery />
        </div>
      </div>
      {/* Gallery SECTION==================================================================================== */}
      {/* FOOTER========================================================================================*/}
      <div className={` md:py-10 z-10 flex justify-center sm:px-8 items-center ${colors.bgPrimary} w-full `}>
        <Footer />
      </div>

      {/* FOOTER========================================================================================*/}
    </div>
  );
};

export default Home;
