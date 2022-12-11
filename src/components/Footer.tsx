import React from "react";
import BarberPole from "./BarberPole";
import { motion } from "framer-motion";
import { useState } from "react";
import Logo from "./Logo";
import { logo } from "../data/constants";
import SocialMediaIcons from "./SocialMediaIcons";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleButton = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <section className=" w-full flex justify-between relative mx-auto ">
      <nav className="md:gap-10 gap-4 justify-between relative w-full flex  py-8">

        <div
          className=" md:w-auto gap-2 flex items-center justify-center  
         p-4 rounded-b-3xl rounded-tl-3xl md:text-5xl xl:text-8xl sm:text-2xl text-md flex-col"
        >
          <Logo name={logo.nav} bg="black" />
          

          <a className="text-base  w-1/2 text-white ">Política de Privacidade</a>
          <a className="text-base  w-1/2 text-white ">Acordo sobre o processamento de dados pessoais</a>
        </div>

        <div
          className=" md:w-auto flex flex-col font-secondary
         p-4 rounded-b-3xl text-white rounded-tl-3xl md:text-2xl xl:text-8xl sm:text-2xl text-md"
        >
          <h1 className="text-white md:text-3xl xl:text-4xl sm:text-2xl text-md mb-2">CONTATOS</h1>
          <h1 className="text-base ">Minsk, rua Lenina, 33</h1>
          <h1 className="text-base ">Telefone: +375 (29) 847 43 23</h1>
          <h1 className="text-base ">E-mail: golovorez@mail.ru</h1>
        </div>

        <div
          className="gap-2 md:w-auto flex flex-col font-secondary
         p-4 rounded-b-3xl text-white rounded-tl-3xl md:text-2xl xl:text-8xl sm:text-2xl text-md"
        >
          <h1 className="text-white md:text-3xl xl:text-4xl sm:text-sm text-md mb-2">NAVEGAÇÃO</h1>
          <a className="text-base cursor-pointer">Home</a>
          <a className="text-base cursor-pointer">The Establishment</a>
          <a className="text-base cursor-pointer">Gallery</a>
          <a className="text-base cursor-pointer">Services</a>
          <a className="text-base cursor-pointer">About</a>
        </div>

        <div
          className=" md:w-auto flex flex-col font-secondary
         p-4 rounded-b-3xl text-white rounded-tl-3xl md:text-5xl xl:text-4xl sm:text-2xl text-md"
        >
          <h1 className="text-white md:text-3xl xl:text-4xl sm:text-2xl text-md mb-2">REDES SOCIAIS</h1>
          <h1 className="text-base ">Procure-nos nas redes sociais</h1>
          <SocialMediaIcons/>
        </div>

        <motion.div
          animate={{ rotate: [3, -3] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="xs:block hidden"
        >
          <a
            className=" drop-shadow-[0px_12px_3px_rgba(255,208,0,0.35)] active:drop-shadow-none transition-all duration-500 flex md:justify-start justify-center"
            href="#"
          >
            <button className="bg-primary p-4 rounded-tr-3xl  hover:bg-secondary transition-all duration-700 hover:ease-out hover:border-primary border-solid border-4 border-transparent font-zilla active:translate-y-3 active:drop-shadow-[0_5px_0px_rgba(255,208,0,1)] drop-shadow-[0_12px_0px_rgba(255,208,0,0.5)] hover:drop-shadow-[0_12px_0px_rgba(255,208,0,1)] lg:text-6xl md:text-4xl sm:text-2xl text-lg hover:text-white">
              &#8593;
            </button>
          </a>
        </motion.div>
      </nav>
    </section>
  );
};

export default Navbar;
