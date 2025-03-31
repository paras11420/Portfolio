import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white text-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-4">
        <p className="text-sm sm:text-base">Follow me on social platforms</p>
      </div>
      <div className="flex justify-center gap-4 mb-4">
        <a
          href="https://github.com/paras11420"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/paras-goel-447927272/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:paras11420@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors text-2xl"
        >
          <IoMdMailUnread />
        </a>
        <a
          href="https://wa.me/9560514426"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors text-2xl"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.instagram.com/_paras_goel_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-colors text-2xl"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="text-sm sm:text-base">
        © {new Date().getFullYear()} Paras Goel. All rights reserved.
      </p>
    </motion.footer>
  );
};

export default Footer;
