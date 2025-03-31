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
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Paras Goel</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-gray-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-violet-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <a
                href="/resume.pdf"
                download
                className="bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600 transition-colors"
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
