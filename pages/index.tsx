import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import { barbershopInfo, logo } from "../src/data/constants";
import {
  Hero,
  Navbar,
  Services,
  About,
  Footer,
  Logo,
  Gallery,
  Socials,
  BookNow,
} from "../src/components";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <Head>
        <title>{barbershopInfo.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAVBAR========================================================================================== */}
      <div id="Home" className=" z-10 flex justify-between px-10 items-center  bg-opacity-100 backdrop-blur-md py-4 w-full border-solid border-b-[1px] border-[rgb(255,208,0)] bg-black  ">
        <Navbar />
      </div>
      {/* NAVBAR========================================================================================== */}

      {/* HERO SECTION==================================================================================== */}
      <div className=" py-4 flex justify-center items-center text-black backdrop-blur-md w-full border-solid border-b-[1px] border-[rgb(255,208,0)] bg-gradient-blue  ">
        <div className="flex justify-center items-center py-4 px-4 w-11/12">
          <Hero />
        </div>
      </div>
      {/* HERO SECTION==================================================================================== 255, 208, 0*/}

      {/* ESTABLISHMENT========================================================================================255, 208, 0*/}
      <div
        id="TheEstablishment"
        className=" py-24 z-10 flex flex-col px-2 md:px-10 items-center justify-center w-full  text-white border-solid border-b-[1px] border-[rgb(255,208,0)] bg-black"
      >
        <div className="flex md:justify-start justify-center md:items-start items-center w-full">
          <h1
            className="lg:text-8xl sm:text-6xl text-4xl text-center font-logo font-bold py-6 mb-5
        w-full justify-start items-start flex"
          >
            <Logo name={logo.establishment} bg="black" />
          </h1>
        </div>
        <div className="w-11/12 flex justify-center items-center">
          <Socials />
        </div>
      </div>
      {/* ESTABLISHMENT========================================================================================*/}
      {/* About======================================================================================== */}

      <div
        id="About"
        className=" py-2 flex flex-col justify-start items-start border-solid border-b-[1px] border-[rgb(255,208,0)] bg-gradient-blue text-white backdrop-blur-md w-full px-2 md:px-10"
      >
        <About />
      </div>

      {/* About========================================================================================*/}

      {/* SERVICES======================================================================================== */}

      <div
        id="Services"
        className="py-4 flex flex-col justify-start items-start border-solid border-b-[1px] border-[rgb(255,208,0)] bg-black text-white  w-full px-2 md:px-10"
      >
        <div className="flex md:justify-start justify-center md:items-start items-center w-full">
          <h1 className="lg:text-8xl sm:text-6xl text-4xl  font-primary font-normal py-6">
            <Logo name="Services" bg="black" />
          </h1>
        </div>

        <Services />
      </div>

      {/* SERVICES========================================================================================*/}
      {/* Gallery SECTION==================================================================================== */}
      <div
        id="Gallery"
        className=" bg-background py-4 flex justify-center items-center  text-white w-full border-solid border-b-[1px] border-[rgb(255,208,0)]"
      >
        <div className="flex justify-center items-center py-4 px-2 md:px-10 w-full font-logo font-semibold ">
          <Gallery />
        </div>
      </div>
      {/* Gallery SECTION==================================================================================== */}
      {/* FOOTER========================================================================================*/}
      <div className=" md:py-10 z-10 flex justify-center sm:px-8 items-center  bg-black w-full ">
        <Footer />
      </div>

      {/* FOOTER========================================================================================*/}
    </div>
  );
};

export default Home;
