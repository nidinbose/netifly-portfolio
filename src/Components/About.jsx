import React from 'react';
import Pic from './UI/Pic';
import { IoIosArrowForward } from "react-icons/io";
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
};

const headingVariants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const About = () => {
  return (
    <div className="min-h-full px-6 py-12 bg-transparent w-full">
      {/* Heading and Subheading */}
      <motion.div 
        initial="initial" 
        animate="animate" 
        variants={headingVariants} 
        className="text-center mb-12"
      >
      <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-violet-500 to-pink-600 bg-clip-text text-transparent font-mono">
  About Me
</h1>
<p className="text-lg font-medium text-violet-300 hover:text-transparent hover:bg-gradient-to-r hover:from-violet-500 hover:via-violet-500 hover:to-pink-600 hover:bg-clip-text mt-2 font-mono">
  Full Stack Developer with a passion for building stylish and responsive web applications
</p>

      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section (Info) */}
        <div className="flex flex-col justify-right items-end p-6 bg-transparent rounded-lg overflow-x-hidden">
          <motion.div
            initial="initial"
            animate="animate"
            variants={textVariants}
            className="space-y-4"
          >
            <div className="flex items-center gap-4 text-lg font-medium text-gray-400  hover:text-transparent hover:bg-gradient-to-r hover:from-violet-500 hover:via-violet-500 hover:to-pink-600 hover:bg-clip-text transition-all font-mono">
              <IoIosArrowForward className="text-violet-400" />
              <span>Name: Nidinbose</span>
            </div>
            <div className="flex items-center gap-4 text-lg  hover:text-transparent hover:bg-gradient-to-r hover:from-violet-500 hover:via-violet-500 hover:to-pink-600 hover:bg-clip-text transition-all font-mono">
              <IoIosArrowForward className="text-violet-400" />
              <span>Website: www.nidinbose.tech</span>
            </div>
            <div className="flex items-center gap-4 text-lg  hover:text-transparent hover:bg-gradient-to-r hover:from-violet-500 hover:via-violet-500 hover:to-pink-600 hover:bg-clip-text  transition-all font-mono">
              <IoIosArrowForward className="text-violet-400" />
              <span>Experience: 1+ Years</span>
            </div>
            <div className="flex items-center gap-4 text-lg  hover:text-transparent hover:bg-gradient-to-r hover:from-violet-500 hover:via-violet-500 hover:to-pink-600 hover:bg-clip-text  transition-all font-mono">
              <IoIosArrowForward className="text-violet-400" />
              <span>Phone: +91 7012543724</span>
            </div>
          </motion.div>
        </div>

        {/* Center Section (Profile Picture) */}
        <div className="flex justify-center items-center p-6 bg-transparent">
          <Pic />
        </div>

        {/* Right Section (Additional Info) */}
        <div className="flex flex-col justify-center items-start p-6 bg-transparent overflow-x-hidden">
          <motion.div
            initial="initial"
            animate="animate"
            variants={textVariants}
            className="space-y-4"
          >
            <div className="flex items-center gap-4 text-lg font-medium text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-violet-500 hover:via-violet-500 hover:to-pink-600 hover:bg-clip-text transition-all font-mono">
              <IoIosArrowForward className="text-violet-400" />
              <span>City: Pathanamthitta kerala India</span>
            </div>
            <div className="flex items-center gap-4 text-lg font-medium text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-violet-500 hover:via-violet-500 hover:to-pink-600 hover:bg-clip-text transition-all font-mono">
              <IoIosArrowForward className="text-violet-400" />
              <span>Age: 21</span>
            </div>
            <div className="flex items-center gap-4 text-lg font-medium text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-violet-500 hover:via-violet-500 hover:to-pink-600 hover:bg-clip-text transition-all font-mono">
              <IoIosArrowForward className="text-violet-400" />
              <span>Degree: Masters</span>
            </div>
            <div className="flex items-center gap-4 text-lg font-medium text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-violet-500 hover:via-violet-500 hover:to-pink-600 hover:bg-clip-text transition-all font-mono">
              <IoIosArrowForward className="text-violet-400" />
              <span>Email: nidinbose700@example.com</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
