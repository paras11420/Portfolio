import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white sticky top-0 z-50 shadow-md"
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center p-4">
        <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">
          Paras Goel
        </h1>
        <nav>
          <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-center">
            <li>
              <a
                href="#about"
                className="hover:text-gray-300 text-sm sm:text-base"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-gray-300 text-sm sm:text-base"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-violet-500 text-sm sm:text-base"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-300 text-sm sm:text-base"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/resume.pdf"
                download
                className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors text-sm sm:text-base"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
