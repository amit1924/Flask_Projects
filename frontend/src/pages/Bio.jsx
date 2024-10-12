/* eslint-disable no-unused-vars */
import React from "react";
import { BIO } from "../pages/constants";
import { motion } from "framer-motion";

const Bio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Animate from below
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="flex justify-center items-center flex-col max-w-4xl gap-12 pt-20 mx-auto  p-6 rounded-lg shadow-lg"
      id="bio"
    >
      <h2 className="text-center text-3xl lg:text-4xl font-bold text-blue-800">
        Bio
      </h2>
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        {BIO.map((bio, index) => (
          <motion.p
            className="mb-4 text-lg lg:text-xl text-gray-700 transition duration-300 hover:text-blue-600"
            key={index}
            variants={itemVariants}
          >
            {bio}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default Bio;
