import React from "react";
import { motion } from "framer-motion";

// Define tech stack with names (update icon paths if available)
const techStack = [
  { name: "React" },
  { name: "Django" },
  { name: "JavaScript" },
  { name: "Tailwind CSS" },
  { name: "Python" },
  { name: "Bootstrap" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "SQL" },
  { name: "MongoDB" },
  { name: "PostgreSQL" },
  { name: "Git" },
  { name: "Github" },
];

// Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600">
          Skills & Technologies
        </h2>
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="relative group p-3 sm:p-4 bg-white rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
              variants={itemVariants}
            >
              <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto flex items-center justify-center">
                <span className="text-base sm:text-xl font-semibold text-cyan-500">
                  {tech.name}
                </span>
              </div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-80 text-white text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 rounded-lg"
                transition={{ duration: 0.3 }}
              >
                {tech.name}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
