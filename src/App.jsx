import React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import About from "./components/About";
// import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import TechStack from "./components/TechStack";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-grow"
      >
        <About />
        {/* <Skills /> */}
        <TechStack />
        <Projects />
        <Stats />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  );
};

export default App;
