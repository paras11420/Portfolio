import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white text-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <p>© {new Date().getFullYear()} Paras Goel. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
