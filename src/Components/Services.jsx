import React from 'react'
import { motion } from 'framer-motion'
import './Scss/Services.scss';
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 12,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const Services = () => {
  return (
<>
<section class="min-h-screen bg-transparant text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
  <span class="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center font-mono">what I'M -  <span className='bg-gradient-to-r from-violet-500 via-pink-500 to-violet-600 bg-clip-text text-transparent'>   offering</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-indigo-600 ml-3 w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  </span>
  <motion.h1 class="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-16 leading-snug font-mono"
     variants={textVariants}
     initial="initial"
     animate="animate">My <span className='bg-gradient-to-r from-violet-500 via-violet-500 to-pink-600 bg-clip-text text-transparent font-mono'>Services</span> including</motion.h1>
  <div class="grid-offer text-left grid sm:grid-cols-2 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
    <div class="card bg-transparant p-10 relative">
      <div class="circle">
      </div>
      <div class="relative lg:pr-52 font-mono">
        <h2 class="capitalize text-white mb-4 text-2xl xl:text-3xl">Full Stack <br /> Web Development</h2>
        <p class="bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 bg-clip-text text-transparent font-mono">Full-stack development involves building both the front-end (client side) and back-end (server side) of web applications.</p>
      </div>
      <div class="icon"></div>
    </div>
    <div class="card border:bg-[#00ff99] p-10 relative border">
      <div class="circle">
      </div>
      <div class="relative lg:pl-48">
        <h2 class="capitalize bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-4 text-2xl xl:text-3xl">UI/UX <br /> Designing</h2>
        <p class="text-gray-400 font-mono">UI/UX design focuses on creating user-centered digital experiences. UI (User Interface) design is about crafting visually appealing, functional interfaces, ensuring that elements like buttons, menus, and layouts</p>
      </div>
    </div>
    <div class="card border p-10 relative">
      <div class="circle">
      </div>
      <div class="relative lg:pr-44">
        <h2 class="capitalize bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-4 text-2xl xl:text-3xl ">Graphic <br />Designing</h2>
        <p class="text-gray-400 font-mono">Graphic design is the art of visually communicating ideas and messages through creative visuals. It involves the use of typography, color, imagery, and layout to create compelling designs</p>
      </div>
    </div>
    <div class="card transparant p-10 relative">
      <div class="circle">
      </div>
      <div class="relative lg:pl-48">
        <h2 class="capitalize text-white mb-4 text-2xl xl:text-3xl">Mobile<br />App Development</h2>
        <p class=" font-mono bg-gradient-to-r from-violet-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">Mobile app development involves creating software applications specifically designed to run on mobile devices like smartphones and tablets.</p>
      </div>
    </div>
  </div>
  <div className='flex items-center justify-center'> 
<motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton"/>
</div>
  </section>
</>
  )
}

export default Services