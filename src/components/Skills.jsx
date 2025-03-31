// import { motion } from "framer-motion";
// import React from "react";

// const skills = [
//   "JavaScript",
//   "React",
//   "Tailwind CSS",
//   "Git",
//   "Github",
//   "HTML",
//   "CSS",
//   "Django",
//   "Python",
//   "Cpp",
//   "Sql",
//   "Postman",
//   "PostgreSQL",
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="py-16 bg-white">
//       <div className="container mx-auto text-center px-4">
//         <motion.h2
//           className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-600"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           Skills & Technologies
//         </motion.h2>

//         <div className="flex flex-wrap justify-center gap-4 mt-8">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={skill}
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <div className="px-4 py-2 text-lg font-medium rounded-full shadow-md bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 transition-transform cursor-pointer">
//                 {skill}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
