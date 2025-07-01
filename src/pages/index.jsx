import * as React from "react";
import Layout from "../components/Layout";
import { Button } from "@nextui-org/button";
import FlyInText from "../components/TypewriterText";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import profileImage from "../images/professional/caleb bw.png";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const IndexPage = () => {
  return (
    <Layout>
      <div className="relative min-h-screen w-full overflow-y-auto pb-20">
        <motion.main
          className="flex flex-col items-center justify-center min-h-screen w-full relative z-10 px-4 max-w-7xl mx-auto pt-12 sm:pt-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.section className="flex flex-col items-center w-full mt-2 sm:mt-4">
            <motion.div
              className="relative mb-6 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-white via-gray-300 to-gray-500 animate-spin-slow" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-gray-300 to-gray-500 opacity-30 blur-md" />
              <img
                src={profileImage}
                alt="Caleb Bennett-Harper"
                className="relative w-full h-full rounded-full shadow-xl p-[3px] object-cover"
              />
            </motion.div>

            <div className="relative w-full text-center">
              <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-jetbrains">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white" style={{
                  willChange: "transform",
                  WebkitFontSmoothing: "antialiased",
                  backfaceVisibility: "hidden",
                  transform: "translateZ(0)"
                }}>
                  <FlyInText text="Caleb Bennett-Harper" delay={0} speed={50} />
                </span>
              </h1>
            </div>

            <motion.div
              className="text-base sm:text-lg md:text-xl mt-6 text-center text-gray-300 max-w-2xl mx-auto relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 }}
            >
              <FlyInText
                text="SWE Intern @ Sixth Street"
                delay={0}
                speed={50}
              />
            </motion.div>

            <motion.div
              className="mt-12 w-full max-w-5xl bg-gradient-to-r from-gray-900/30 to-gray-800/30 p-6 rounded-xl border border-gray-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.4 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 font-jetbrains" style={{
                willChange: "transform",
                WebkitFontSmoothing: "antialiased",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)"
              }}>
                Who Am I?
              </h3>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <motion.div
                  className="flex-1 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                >
                  <p className="text-gray-300">
                    Current undergraduate and rising third year at Northeastern University studying Computer Science & Economics.
                    My passion lies in creating systems that are as thoughtful in design as they are in engineering.
                  </p>
                </motion.div>

                <motion.div
                  className="flex-1 bg-black/40 p-5 rounded-lg border border-gray-500/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-xl font-semibold text-white mb-3 font-jetbrains">Core Skills</h4>
                  <ul className="space-y-2">
                    {[
                      "Full-Stack Development",
                      "Machine Learning",
                      "System Design",
                      "Data Analysis",
                      "Mental Health First Aid"
                    ].map((skill, index) => (
                      <motion.li
                        key={skill}
                        className="flex items-center gap-2 text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.8 + index * 0.1 }}
                      >
                        <span className="text-gray-500">→</span> {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <motion.div
                className="mt-10 pt-6 border-t border-gray-500/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                <h4 className="text-center text-gray-400 mb-5 font-light">Learn More</h4>
                <div className="flex flex-wrap justify-center gap-5">
                  <Link to="/experiences">
                    <motion.div
                      className="group relative overflow-hidden bg-gradient-to-br from-gray-600/20 to-gray-700/20 rounded-lg px-6 py-3 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      <div className="relative flex items-center gap-3">
                        <span className="text-xl text-gray-400">🚀</span>
                        <span className="text-white font-medium">Experiences</span>
                      </div>
                    </motion.div>
                  </Link>

                  <Link
                    to="/about"
                    className="px-6 py-3 bg-gradient-to-r from-white to-gray-300 text-black font-medium rounded-lg shadow-lg hover:from-gray-200 hover:to-gray-400 transition-all duration-300 flex items-center justify-center"
                  >
                    About Me
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-12 flex justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.9 }}
            >
              <a
                href="https://github.com/CalebBennett-Harper"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  className="bg-black/30 p-3 rounded-full border border-gray-500/30 hover:border-gray-400 transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <FaGithub className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.div>
              </a>

              <a
                href="https://www.linkedin.com/in/caleb-bennett-harper/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div
                  className="bg-black/30 p-3 rounded-full border border-gray-500/30 hover:border-gray-400 transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <FaLinkedin className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.div>
              </a>
            </motion.div>
          </motion.section>
        </motion.main>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Caleb Bennett-Harper - Portfolio</title>;
