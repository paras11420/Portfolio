import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";

const projects = [
  {
    title: "📚 Library Management System",
    description:
      "I built a comprehensive Full-Stack Library Management System using Django REST Framework, React, and Bootstrap, featuring JWT-based Role-Based Access Control (RBAC) for Admin, Librarian, and Member roles. The system includes 15+ RESTful APIs to efficiently manage borrowing, returns, reservations, and real-time availability for a collection of 1,000+ books and 500+ users. I integrated Celery and Redis for automated email notifications, achieving a 95% on-time delivery rate. Additionally, I enhanced the Django Admin interface and created custom dashboards with advanced search functionality, ensuring seamless management of extensive book collections.",
    github: "https://github.com/paras11420/Library_Management_System",
    live: "https://parking-system.vercel.app",
    tech: [
      "Python",
      "Django",
      "React",
      "RestAPI",
      "JWT",
      "Bootstrap",
      "Reddis",
    ],
    stats: [
      { label: "Books Managed", value: 1000, suffix: "+" },
      { label: "On-Time Notifications", value: 95, suffix: "%" },
      { label: "Users Served", value: 500, suffix: "+" },
    ],
  },
  {
    title: "🌍 Travel Itinerary Generator",
    description:
      "I developed a Travel Itinerary Generator that customizes plans based on user preferences, significantly boosting engagement. It features real-time weather updates, interactive maps, and a guide-matching system, enhancing the overall user experience. I also integrated real-time language translation supporting multiple languages, improving accessibility for diverse users. Additionally, I optimized API performance to ensure seamless and efficient interactions.",
    github: "https://github.com/paras11420/vihaan_hackathon_project",
    live: "https://travelogue-hackathon.netlify.app/",
    tech: ["React", "API Integration", "Tailwind CSS", "JavaScript"],
    stats: [
      { label: "Boosting Engagement", value: 40, suffix: "%" },
      { label: "Enhancing User Experience", value: 35, suffix: "%" },
      { label: "Language Translation Supporting", value: 20, suffix: "+" },
    ],
  },
  {
    title: "🔢 Bubble Sort Visualizer",
    description:
      "I created an interactive Bubble Sort Visualizer that effectively improves comprehension through dynamic visual representation. The application supports large datasets with optimized performance, reducing lag and enhancing responsiveness. It includes user-controlled customization options for sorting speed and array size, providing a more engaging and tailored experience. Additionally, asynchronous rendering was implemented to improve computation efficiency and overall user satisfaction.",
    github: "https://github.com/yourusername/bubble-sort-visualizer",
    live: "https://splendorous-rugelach-3b5436.netlify.app/",
    tech: ["React", "JavaScript", "CSS"],
    stats: [
      { label: "Reducing Lag By", value: 25, suffix: "%" },
      { label: "Boosting Interactivity", value: 35, suffix: "%" },
      { label: "Cutting Computation Time", value: 20, suffix: "%" },
    ],
  },
  {
    title: "🐍 Snake Game",
    description:
      "I developed a classic browser-based Snake Game using HTML5, CSS3, and Vanilla JavaScript. The game features real-time movement logic, collision detection, and dynamic score tracking for an immersive experience. Integrated sound effects for actions like movement, food consumption, and collisions to enhance gameplay. Deployed on Vercel with a responsive design and optimized rendering for smooth, enjoyable performance.",
    github: "https://github.com/paras11420/Snake_Game",
    live: "https://snake-game-nine-sooty.vercel.app/",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript"],
    stats: [
      { label: "Reducing Lag By", value: 25, suffix: "%" },
      { label: "Boosting Interactivity", value: 35, suffix: "%" },
      { label: "Cutting Computation Time", value: 20, suffix: "%" },
    ],
  },
  {
    title: "🎥 Netflix Clone",
    description:
      "I built a pixel-perfect replica of the Netflix India landing page using HTML5, CSS3, and JavaScript. Demonstrated expertise in advanced CSS styling, including flexbox, grid, positioning, and media queries for seamless responsiveness across all devices. Integrated interactive UI elements, hover effects, and a functional email input with CTA, simulating real-world user experience. Optimized performance and deployed on Vercel for a smooth, high-quality experience.",
    github: "https://github.com/paras11420/netlify",
    live: "https://netlify-ruddy.vercel.app/",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript"],
    stats: [
      { label: "Lines of Code for Pixel-Perfect UI", value: 1000, suffix: "+" },
      { label: "Responsiveness Across Devices", value: 100, suffix: "%" },
      {
        label: "Faster Rendering Through Optimized Styling",
        value: 20,
        suffix: "%",
      },
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="bg-gray-200 py-20 px-4 sm:px-8 text-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-600">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 sm:p-6 bg-white rounded-2xl shadow-lg transition-transform hover:scale-105"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-violet-500">
              {project.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-700">
              {project.description.substring(0, 100)}...
            </p>
            <button
              className="mt-4 bg-cyan-400 text-white px-3 py-2 rounded hover:bg-cyan-500 transition-colors text-sm sm:text-base"
              onClick={() => setSelectedProject(project)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal for project details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 max-w-3xl w-full relative overflow-y-auto max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 font-bold text-2xl"
                onClick={() => setSelectedProject(null)}
              >
                &times;
              </button>
              <div className="flex flex-col md:flex-row gap-4 text-left">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-bold text-violet-500">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                    {selectedProject.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <motion.div
                        key={i}
                        className="relative group p-2 bg-white dark:bg-gray-700 rounded-lg shadow-md cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className="bg-violet-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
                          {tech}
                        </div>
                        <motion.div
                          className="absolute bottom-[-24px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-gray-700 dark:bg-gray-600 text-white rounded px-2 py-1"
                          transition={{ duration: 0.3 }}
                        >
                          {tech}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                  {selectedProject.stats && (
                    <div className="mt-6">
                      <h4 className="text-xl sm:text-2xl font-bold text-violet-500 mb-2">
                        Key Metrics
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {selectedProject.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <p className="text-lg sm:text-2xl font-bold text-cyan-400">
                              <CountUp
                                end={stat.value}
                                duration={2}
                                suffix={stat.suffix}
                              />
                            </p>
                            <p className="text-xs sm:text-base text-gray-700">
                              {stat.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-4 md:mt-0 flex flex-col gap-4 justify-center">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-400 text-white px-4 py-2 rounded hover:bg-cyan-500 transition-colors text-sm sm:text-base"
                  >
                    GitHub
                  </a>
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600 transition-colors text-sm sm:text-base"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
