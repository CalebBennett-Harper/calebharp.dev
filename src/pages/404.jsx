import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import TypewriterText from "../components/TypewriterText";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Layout>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 py-10">
          <div className="text-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 font-spaceGrotesk tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600" style={{
                willChange: "transform",
                WebkitFontSmoothing: "antialiased",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)"
              }}>
                <TypewriterText 
                  text="404" 
                  delay={0} 
                  speed={50}
                />
              </span>
            </h1>
          </div>

          <motion.div
            className="p-6 bg-black/30 rounded-xl border border-blue-500/20 backdrop-blur-sm max-w-xl mx-auto mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-2xl font-bold text-gray-200 mb-4 font-spaceGrotesk"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Page Not Found
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Sorry, the page you are looking for could not be found. It might have been moved or deleted.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <Link to="/">
                <motion.button
                  className="relative px-6 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  aria-label="Return to homepage"
                >
                  <span>Return Home</span>
                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -right-4 text-blue-500/20 text-8xl pointer-events-none"
            role="img"
            aria-hidden="true"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            ◈
          </motion.div>
        </div>
      </Layout>
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <title>Page Not Found | Caleb Bennett-Harper</title>;
