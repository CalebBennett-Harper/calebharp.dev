import * as React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import FlyInText from "../components/TypewriterText";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Layout>
        <div className="relative min-h-screen flex flex-col items-center justify-start px-4 text-white z-10 py-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 tracking-tight font-jetbrains">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white" style={{
                willChange: "transform",
                WebkitFontSmoothing: "antialiased",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)"
              }}>
                <FlyInText 
                  text="Let's Connect"
                  delay={0}
                  speed={50}
                />
              </span>
            </h1>
          </div>

          <div className="w-full max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-2xl overflow-hidden shadow-xl border border-gray-500/30">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-white font-jetbrains">Direct Contact</h2>

                  <div className="space-y-4">
                    {[
                      {
                        label: "School Email",
                        email: "bennettharper.c@northeastern.edu",
                        href: "mailto:bennett-ha.c@northeastern.edu",
                      },
                      {
                        label: "Personal Email",
                        email: "caleb76harper@gmail.com",
                        href: "mailto:caleb.bennett.harper@gmail.com",
                      }
                    ].map(({ label, email, href }, idx) => (
                      <div key={idx} className="group">
                        <div className="flex items-start gap-4 p-3 rounded-xl transition-all duration-300 hover:bg-gray-900/30">
                          <div className="bg-gray-500/20 p-3 rounded-lg">
                            <FaEnvelope className="text-gray-400 w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white group-hover:text-gray-300 transition-colors">{label}</h3>
                            <p className="text-gray-400">{email}</p>
                            <a 
                              href={href}
                              className="inline-flex items-center mt-2 text-gray-400 hover:text-white transition-colors"
                            >
                              <span>Send email</span>
                              <FaArrowRight className="ml-2 w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div 
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl overflow-hidden shadow-xl border border-gray-500/30 p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-gray-300 text-center">
                  Looking forward to connecting with you!
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 rounded-2xl overflow-hidden shadow-xl border border-gray-500/30">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-white font-jetbrains">Social Profiles</h2>

                  <div className="grid grid-cols-1 gap-4">
                    {[
                      {
                        name: "LinkedIn",
                        url: "https://www.linkedin.com/in/caleb-bennett-harper/",
                        icon: <FaLinkedin className="text-gray-300 w-6 h-6" />,
                        desc: "Professional network & updates",
                        color: "gray"
                      },
                      {
                        name: "GitHub",
                        url: "https://github.com/CalebBennett-Harper",
                        icon: <FaGithub className="text-gray-300 w-6 h-6" />,
                        desc: "Code repositories & projects",
                        color: "gray"
                      }
                    ].map(({ name, url, icon, desc, color }, idx) => (
                      <a 
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                      >
                        <motion.div 
                          className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-${color}-900/50 to-${color}-800/50 hover:from-${color}-800/70 hover:to-${color}-700/70 transition-all duration-300 border border-${color}-700/50 hover:border-${color}-600`}
                          whileHover={{ y: -3 }}
                        >
                          <div className={`bg-${color}-800/80 p-3 rounded-lg`}>
                            {icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{name}</h3>
                            <p className="text-gray-400">{desc}</p>
                          </div>
                          <FaArrowRight className={`ml-auto text-${color}-400 opacity-0 group-hover:opacity-100 transition-opacity`} />
                        </motion.div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <motion.div 
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl overflow-hidden shadow-xl border border-gray-500/30 p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-2xl font-bold mb-4 text-white font-jetbrains">Let's Work Together</h2>
                <p className="text-gray-300 mb-6">
                  Feel free to reach out, I'm always open to discussing new projects, creative ideas!
                </p>

                <motion.a
                  href="mailto:bennettharper.c@northeastern.edu"
                  className="inline-block w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-gradient-to-r from-white to-gray-300 hover:from-gray-200 hover:to-gray-400 text-black font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-gray-900/30 transition-all duration-300">
                    <FaEnvelope className="w-5 h-5" />
                    <span>Start a Conversation</span>
                  </div>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;

export const Head = () => <title>Contact | Caleb Bennett-Harper</title>;
