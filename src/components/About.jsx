import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpeg";
import "@fontsource/poppins"; // Make sure to install with: npm install @fontsource/poppins

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-600">
            About Me
          </h2>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 font-[Poppins]">
            Hi, I'm Paras Goel
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-4 font-medium leading-relaxed">
            A Full Stack Developer skilled in building dynamic and responsive
            web applications using modern technologies like{" "}
            <strong>React, Django, JavaScript, Tailwind CSS, and Python</strong>
            . I enjoy creating seamless user experiences and efficient backend
            solutions.
          </p>
          <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
            This is my personal portfolio where I showcase my projects and
            skills.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-48 sm:w-64 h-48 sm:h-64 object-cover rounded-full shadow-2xl border-4 border-blue-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
