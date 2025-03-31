import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const statsData = [
  {
    label: "Lines of code written across all projects",
    value: 5000,
    suffix: "+",
  },
  { label: "RESTful APIs designed and implemented", value: 35, suffix: "+" },
  { label: "Projects Completed", value: 50, suffix: "+" },
];

const Stats = () => {
  return (
    <section id="stats" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600">
          Stats Section
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg transition-transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-4xl sm:text-5xl font-bold text-violet-500">
                <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-base sm:text-xl text-gray-700 dark:text-gray-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
