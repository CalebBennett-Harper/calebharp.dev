import * as React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaTools, FaChevronDown, FaChevronUp } from "react-icons/fa";
import FlyInText from "../components/TypewriterText";

import sixthStreetLogo from "../images/companyLogos/6thst.png";
import boaLogo from "../images/companyLogos/boa.jpeg";
import googleLogo from "../images/companyLogos/google.jpeg";
import jsLogo from "../images/companyLogos/js.jpeg";
import locusLogo from "../images/companyLogos/Locus Logo.jpeg";
import morganStanleyLogo from "../images/companyLogos/morganstanley.jpeg";
import nvidiaLogo from "../images/companyLogos/nvidia.jpeg";
import phillyLogo from "../images/companyLogos/philly.jpeg";

const ExperienceCard = ({ company, position, type, duration, location, skills, onsite, program, additionalPositions }) => {
  const [expanded, setExpanded] = React.useState(false);

  const getLogo = () => {
    switch(company) {
      case "Locus": return locusLogo;
      case "Sixth Street": return sixthStreetLogo;
      case "Morgan Stanley": return morganStanleyLogo;
      case "NVIDIA": return nvidiaLogo;
      case "Jane Street": return jsLogo;
      case "Google": return googleLogo;
      case "Bank of America": return boaLogo;
      case "Philadelphia Youth Network": return phillyLogo;
      default: return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-black border border-gray-600 rounded-xl shadow-lg overflow-hidden mb-8 w-full max-w-5xl mx-auto hover:shadow-gray-500/30 hover:border-gray-400 transition-all duration-300 cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-6 relative">
        <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-white to-transparent"></div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-16 h-16 flex-shrink-0 bg-black border border-gray-500 rounded-lg flex items-center justify-center p-2 overflow-hidden">
            {getLogo() ? (
              <img src={getLogo()} alt={`${company} logo`} className="w-full h-full object-contain" />
            ) : (
              <div className="text-xl font-bold text-center text-gray-400">
                {company.substring(0, 2)}
              </div>
            )}
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-white font-jetbrains">{position}</h3>
                <h4 className="text-lg font-semibold text-gray-300 font-jetbrains">{company}</h4>
              </div>
              <div className="text-gray-400">
                {additionalPositions ? (expanded ? <FaChevronUp /> : <FaChevronDown />) : null}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {type && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-900 text-gray-200 border border-gray-700">
                  <FaBriefcase className="mr-1" />{type}
                </span>
              )}
              {onsite && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-900 text-gray-200 border border-gray-700">
                  {onsite}
                </span>
              )}
              {program && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-900 text-gray-200 border border-gray-700">
                  {program}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2 text-gray-400">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-2 text-gray-500" />
            <span>{duration}</span>
          </div>
          {location && (
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-500" />
              <span>{location}</span>
            </div>
          )}
          {skills && (
            <div className="flex items-start">
              <FaTools className="mr-2 mt-1 text-gray-500" />
              <div>
                <span className="font-medium text-gray-300">Skills: </span>
                <span>{skills}</span>
              </div>
            </div>
          )}
        </div>

        {additionalPositions && expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-6 pt-4 border-t border-gray-800"
          >
            {additionalPositions.map((pos, idx) => (
              <div key={idx} className="mb-6 last:mb-0">
                <h3 className="text-lg font-bold text-white font-jetbrains">{pos.position}</h3>
                <div className="flex flex-wrap gap-2 mt-1 mb-2">
                  {pos.program && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-900 text-gray-200 border border-gray-700">
                      {pos.program}
                    </span>
                  )}
                </div>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-gray-500" />
                    <span>{pos.duration}</span>
                  </div>
                  {pos.location && (
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-gray-500" />
                      <span>{pos.location}</span>
                    </div>
                  )}
                  {pos.skills && (
                    <div className="flex items-start">
                      <FaTools className="mr-2 mt-1 text-gray-500" />
                      <div>
                        <span className="font-medium text-gray-300">Skills: </span>
                        <span>{pos.skills}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        )}
        <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </motion.div>
  );
};

const experiences = [
  {
    company: "Locus",
    position: "Founder & CEO",
    type: "Full-time",
    duration: "Jun 2025 - Present · 2 mos",
    location: "New York City Metropolitan Area"
  },
  {
    company: "Sixth Street",
    position: "Software Engineer Intern",
    type: "Internship",
    duration: "Apr 2025 - Present",
    location: "New York City Metropolitan Area",
    onsite: "On-site",
    program: "Summer 2025",
    skills: "Python · SQL · GraphQL · Pandas · Data Analysis",
    additionalPositions: [
      {
        position: "Early Insights Program",
        duration: "Mar 2025 - Mar 2025 · 1 mo",
        location: "San Francisco, California, United States",
        skills: "Asset Management · Financial Modeling · Accounting · Financial Analysis"
      }
    ]
  },
  {
    company: "Morgan Stanley",
    position: "Sales & Trading Program",
    duration: "Jan 2025 - Jan 2025 · 1 mo",
    location: "Remote",
    skills: "Communication · Machine Learning · Problem Solving · Equity Trading",
    program: "Early Insights"
  },
  {
    company: "NVIDIA",
    position: "Ignite Intern",
    type: "Internship",
    duration: "May 2024 - Aug 2024 · 4 mos",
    location: "Santa Clara, California, United States",
    onsite: "On-site",
    skills: "Machine Learning · Mental Health First Aid · Mental Health · Mental Health Advocacy · Presentation Skills · Project Management"
  },
  {
    company: "Jane Street",
    position: "FOCUS",
    duration: "May 2024 - May 2024 · 1 mo",
    location: "New York City Metropolitan Area",
    onsite: "On-site",
    skills: "Problem Solving · OCaml · Coding Experience · Market Analysis",
    program: "FOCUS"
  },
  {
    company: "Google",
    position: "Google CS Research Mentorship Program (CSRMP)",
    type: "Apprenticeship",
    duration: "Sep 2023 - Dec 2023 · 4 mos",
    location: "Remote",
    skills: "Coding Experience · Python (Programming Language) · Java · Machine Learning",
    program: "CS Research Mentorship Program – Google Research"
  },
  {
    company: "Bank of America",
    position: "Bank of America Student Leader",
    type: "Internship",
    duration: "Jun 2023 - Aug 2023 · 3 mos",
    location: "Philadelphia, Pennsylvania, United States",
    onsite: "On-site",
    skills: "Nonprofit Organizations · Nonprofit Leadership · Communication · Entrepreneurship · Public Speaking · Community Development",
    program: "Philadelphia Bank of America Student Leaders"
  },
  {
    company: "Philadelphia Youth Network",
    position: "Human Resources Intern",
    type: "Internship",
    duration: "Jun 2023 - Aug 2023 · 3 mos",
    location: "Philadelphia, Pennsylvania, United States",
    onsite: "On-site",
    skills: "Nonprofit Organizations · Project Management · Nonprofit Leadership · Communication · Human Resources (HR) · Microsoft Office"
  }
];

const Experiences = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <Layout>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 tracking-tight font-jetbrains">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white" style={{
                willChange: "transform",
                WebkitFontSmoothing: "antialiased",
                backfaceVisibility: "hidden",
                transform: "translateZ(0)"
              }}>
                <FlyInText text="Professional Experiences" delay={0} speed={50} />
              </span>
            </h1>
          </div>

          <div className="w-full max-w-5xl">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Experiences;

export const Head = () => <title>Experiences | Caleb Bennett-Harper</title>;
