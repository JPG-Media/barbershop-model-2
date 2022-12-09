import "../styles/globals.css";

import type { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BarberPole, Loader } from "../src/components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="overflow-hidden w-full h-full relative">
      
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
