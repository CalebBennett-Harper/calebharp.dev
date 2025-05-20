import * as React from "react";
import Layout from "../components/Layout";
import FlyInText from "../components/TypewriterText";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHeart, FaRegBookmark, FaCode,
  FaChessKnight, FaSkating, FaPaintBrush, FaLaptopCode
} from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SiNvidia, SiGoogle } from "react-icons/si";
import profileImage from "../images/professional/calebNvidia.jpeg";
import profileImage2 from "../images/professional/calebNvidiaJensen.jpeg";
import profileImage3 from "../images/professional/calebNvidiaBoss.jpeg";
import profileImage4 from "../images/professional/calebIG.jpg";
import imageLogo from "../images/professional/calebisCool.jpg";

const About = () => {
  const images = [profileImage, profileImage2, profileImage3, profileImage4];
  const [[currentImageIndex, direction], setImage] = React.useState([0, 0]);
  const [isLiked, setIsLiked] = React.useState(false);
  const [likeCount, setLikeCount] = React.useState(351);

  const imageIndex = React.useMemo(() => {
    return ((currentImageIndex % images.length) + images.length) % images.length;
  }, [currentImageIndex, images.length]);

  const nextImage = () => setImage([currentImageIndex + 1, 1]);
  const prevImage = () => setImage([currentImageIndex - 1, -1]);
  const handleLike = () => {
    setLikeCount(prev => prev + (isLiked ? -1 : 1));
    setIsLiked(!isLiked);
  };

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0 })
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Layout>
        <div className="relative z-10 text-white pb-20">
          <div className="text-center mt-8 mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-gradient font-serif italic">
                <FlyInText text="About Me" delay={0} speed={50} />
              </span>
            </h1>
          </div>

          <div className="max-w-6xl mx-auto text-lg text-gray-300 mb-16 px-4">
            <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
              <motion.div 
                className="lg:w-1/2 space-y-6 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-6 rounded-xl border border-blue-500/20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                    <FaLaptopCode className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-300">My Journey</h2>
                </div>

                <p className="leading-relaxed">
                  Nice to meet you! I'm an incoming Software Engineering Intern at Sixth Street and previously interned at NVIDIA through their Ignite program, where I worked on well-being initiatives and AI tooling.
                </p>

                <p className="leading-relaxed">
                  My journey into tech began as a Bank of America Student Leader collaborating with the Philadelphia Youth Network to expand access to internships for local students.
                </p>

                <div className="pt-4 border-t border-blue-500/20">
                  <h3 className="text-xl font-semibold text-blue-300 mb-3">Beyond Coding</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[["TouchDesigner", FaCode], ["Chess & Poker", FaChessKnight], ["Skateboarding", FaSkating], ["Art Museums", FaPaintBrush]].map(([label, Icon], idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-800/50 flex items-center justify-center">
                          <Icon className="text-blue-300" />
                        </div>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-blue-500/20">
                  <p className="text-blue-200 italic">
                    "I found my way into tech by focusing on people first—now, I build systems that do the same."
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="lg:w-1/2 bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden shadow-2xl border border-blue-500/20 max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-between p-3 border-b border-gray-700/50 bg-gradient-to-r from-gray-900 to-gray-800">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-blue-400/30 ring-offset-2 ring-offset-gray-900">
                      <img src={imageLogo} alt="Caleb's Logo" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">caleb.harp</p>
                      <p className="text-xs text-blue-400">Software Engineer</p>
                    </div>
                  </div>
                  <div className="text-gray-300 bg-gray-800/50 px-2 py-1 rounded-full text-xs hover:bg-gray-700/50 transition-colors cursor-pointer">Follow</div>
                </div>

                <div className="relative">
                  <div className="aspect-square bg-black flex items-center justify-center overflow-hidden">
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.img 
                        key={currentImageIndex}
                        src={images[imageIndex]} 
                        alt={`Gallery image ${imageIndex + 1}`}
                        className="absolute w-full h-full object-cover"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 }
                        }}
                      />
                    </AnimatePresence>

                    {images.length > 1 && (
                      <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-3 z-10">
                        <button onClick={prevImage} aria-label="Previous image" className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors backdrop-blur-sm border border-white/10 cursor-pointer">
                          <IoIosArrowBack className="text-sm" />
                        </button>
                        <div className="flex gap-2">
                          {images.map((_, index) => (
                            <button key={index} onClick={() => setImage([index, index > imageIndex ? 1 : -1])} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === imageIndex ? "bg-blue-400 scale-110" : "bg-gray-500/40 hover:bg-gray-400/60"}`} aria-label={`Go to image ${index + 1}`} />
                          ))}
                        </div>
                        <button onClick={nextImage} aria-label="Next image" className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 transition-colors backdrop-blur-sm border border-white/10 cursor-pointer">
                          <IoIosArrowForward className="text-sm" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 border-b border-gray-800/50 bg-gradient-to-r from-gray-900 to-gray-900">
                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      <button onClick={handleLike} aria-label={isLiked ? "Unlike" : "Like"} className="text-xl transition-transform hover:scale-110">
                        <FaHeart className={isLiked ? "text-red-500" : "text-gray-300"} />
                      </button>
                    </div>
                    <button aria-label="Save" className="text-xl text-gray-300 transition-transform hover:scale-110">
                      <FaRegBookmark />
                    </button>
                  </div>
                  <p className="mt-3 text-sm font-medium flex items-center">
                    <span className="flex -space-x-2 mr-1.5">
                      <span className="w-5 h-5 rounded-full border-2 border-gray-900 overflow-hidden bg-green-600 flex items-center justify-center text-white">
                        <SiNvidia className="text-[10px]" />
                      </span>
                      <span className="w-5 h-5 rounded-full border-2 border-gray-900 overflow-hidden bg-white flex items-center justify-center">
                        <SiGoogle className="text-[10px]" style={{ color: "#4285F4" }} />
                      </span>
                    </span>
                    Liked by <span className="font-semibold text-white ml-1">nvidia</span> and <span className="font-semibold text-white ml-1">others</span>
                  </p>
                </div>

                <div className="p-4 bg-gradient-to-b from-gray-900 to-gray-950">
                  <p className="text-sm">
                    <span className="font-medium text-white">caleb.harp</span>{" "}
                    <span className="text-gray-300">When I'm not coding, you'll find me exploring new places, and connecting with amazing people. Life is about balance!</span> 
                    <span className="text-blue-400"> #lifebeyondcode #exploration #balance</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-2 uppercase tracking-wide">2 days ago</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
export const Head = () => <title>About | Caleb Bennett-Harper</title>;
