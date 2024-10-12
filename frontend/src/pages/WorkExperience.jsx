/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const WorkExperience = () => {
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
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="pt-20" id="work">
      <motion.h2
        className="text-center text-4xl font-semibold tracking-tighter"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Journey as a Fullstack Developer
      </motion.h2>
      <motion.div
        className="space-y-8 p-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="rounded-xl border border-stone-50/30 bg-white/10 p-4"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold">Passion for Coding</h3>
          <p className="text-base mt-2">
            As a fresher fullstack developer, I have a strong passion for coding
            and building dynamic web applications. My journey began with
            self-learning HTML, CSS, and JavaScript, which ignited my interest
            in web development. I have since expanded my knowledge to include
            frameworks like React and Next.js, as well as backend technologies
            such as Node.js and MongoDB.
          </p>
        </motion.div>

        <motion.div
          className="rounded-xl border border-stone-50/30 bg-white/10 p-4"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold">Hands-on Projects</h3>
          <p className="text-base mt-2">
            I have worked on various projects during my learning phase,
            including a personal portfolio website, an e-commerce platform, and
            a weather application. These projects allowed me to apply my skills
            in real-world scenarios, focusing on responsive design, user
            experience, and efficient code.
          </p>
        </motion.div>

        <motion.div
          className="rounded-xl border border-stone-50/30 bg-white/10 p-4"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold">Continuous Learning</h3>
          <p className="text-base mt-2">
            I believe in continuous learning and keep myself updated with the
            latest trends and technologies in web development. I actively
            participate in online coding communities and contribute to
            open-source projects to enhance my skills and collaborate with other
            developers.
          </p>
        </motion.div>

        <motion.div
          className="rounded-xl border border-stone-50/30 bg-white/10 p-4"
          variants={itemVariants}
        >
          <h3 className="text-2xl font-semibold">Looking Forward</h3>
          <p className="text-base mt-2">
            As I embark on my professional journey, I am eager to apply my
            knowledge and skills in a collaborative environment, learn from
            experienced developers, and contribute to impactful projects that
            make a difference.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
