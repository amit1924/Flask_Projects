import React, { useContext } from "react";
import { HERO } from "./constants/index";
import amitPic from "../assets/dev.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center mt-4">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-4">
        <motion.h2
          className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {HERO.name}
        </motion.h2>
        <motion.p
          className="p-2 text-3xl tracking-tighter lg:text-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {HERO.greet}
        </motion.p>
        <motion.p
          className="mb-8 p-2 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {HERO.description}
        </motion.p>
      </div>
      <div className="w-full md:w-1/2 lg:p-8 flex justify-center items-center">
        <motion.img
          src={amitPic}
          alt="amit"
          width={550}
          height={550}
          className="rounded-5xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
