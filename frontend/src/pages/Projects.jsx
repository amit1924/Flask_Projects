import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../pages/constants";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2, // Trigger animation when 20% of the component is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

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
    <section className="pt-20" id="projects">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Projects</h2>
      <motion.div
        ref={ref}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            className="group relative overflow-hidden rounded-3xl"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col text-center items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h3 className="text-white text-xl">{project.name}</h3>
              <p className="mt-5 p-4">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-4 py-2 text-black hover:bg-green-300 flex items-center justify-center"
              >
                <span>View on GitHub</span>
                <MdArrowOutward className="ml-2" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
