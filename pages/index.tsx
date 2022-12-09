import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import {
  barbershopInfo,
  logo,
} from "../src/data/constants"
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
    <div className="flex min-h-screen flex-col items-center justify-start bg-black">
      <Head>
        <title>{barbershopInfo.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NAVBAR========================================================================================== */}
      <div className=" z-10 flex justify-between px-10 items-center  bg-opacity-100 backdrop-blur-md py-4 w-full drop-shadow-[0px_2px_0px_rgba(170,29,78,1)] bg-black  ">
        <Navbar />
      </div>
      {/* NAVBAR========================================================================================== */}

      {/* HERO SECTION==================================================================================== */}
      <div className=" py-4 flex justify-center items-center text-black backdrop-blur-md w-full drop-shadow-[0px_2px_0px_rgba(170,29,78,1)] bg-background  ">
        <div className="flex justify-center items-center py-4 px-4 w-full">
          <Hero />
        </div>
      </div>
      {/* HERO SECTION==================================================================================== */}

      {/* Socials========================================================================================255, 208, 0*/}
      <div id="TheEstablishment" className="py-4 mt-10 z-10 flex flex-col px-2 md:px-10 items-start justify-start w-full  text-white drop-shadow-[0px_2px_0px_rgba(170,29,78,1)] bg-black">
        <h1 className="lg:text-8xl sm:text-6xl text-4xl text-center font-logo font-bold py-6 mb-5">
          <Logo name={logo.establishment} bg='black' />
        </h1>

        <Socials />
      </div>

      {/* Socials========================================================================================*/}

      {/* Gallery SECTION==================================================================================== */}
      <div
        id="Gallery"
        className=" bg-background py-4 flex justify-center items-center  text-white w-full drop-shadow-[0px_2px_0px_rgba(170,29,78,1)]"
      >
        <div className="flex justify-center items-center py-4 px-2 md:px-10 w-full font-logo font-semibold ">
          <Gallery />
        </div>
      </div>
      {/* Gallery SECTION==================================================================================== */}

      {/* SERVICES======================================================================================== */}

      <div
        id="Services"
        className="mt-10 py-4 flex flex-col justify-start items-start drop-shadow-[0px_2px_0px_rgba(170,29,78,1)] bg-black text-white  w-full px-2 md:px-10"
      >
        <h1 className="lg:text-8xl sm:text-6xl text-4xl  font-primary font-normal py-6">
          <Logo name="Services" bg='black'/>
        </h1>
        <Services />
      </div>

      {/* SERVICES========================================================================================*/}
      {/* About======================================================================================== */}

      <div
        id="About"
        className="mt-10 py-4 flex flex-col justify-start items-start drop-shadow-[0px_2px_0px_rgba(170,29,78,1)] bg-black text-white backdrop-blur-md w-full px-2 md:px-10"
      >
        <h1 className="lg:text-8xl sm:text-6xl text-4xl font-logo font-bold py-6">
          <Logo name="ABOUT" bg='black'/>
        </h1>
        <About />
        <div className=" flex justify-center items-center w-full p-10 md:text-7xl text-3xl">
          <BookNow />
        </div>
      </div>

      {/* About========================================================================================*/}
      {/* FOOTER========================================================================================*/}
      <div className="py-4 mt-10 z-10 flex justify-between sm:px-8 items-center  bg-black backdrop-blur-md w-full ">
        <Footer />
      </div>

      {/* FOOTER========================================================================================*/}
    </div>
  );
};

export default Home;
