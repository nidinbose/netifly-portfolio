import React, { useRef } from 'react';
import './Scss/Parallalx.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }) => {
  const ref = useRef();
  
  // Track the scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Apply a parallax effect for background movement
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: type === "about" 
          ? "linear-gradient(180deg, #111132, #0c0c1d)" 
          : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      {/* Parallax heading */}
      <motion.h1 style={{ y: yBg }}>
        {type === "about" ? "What we do?" : "What we did"}
      </motion.h1>

      {/* Parallax effect for different layers */}
      <motion.div
        className="mountains"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
      />
      <motion.div
        className="planets"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "150%"]) }}
      />
      <motion.div
        className="stars"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "200%"]) }}
      />
    </div>
  );
};

export default Parallax;
