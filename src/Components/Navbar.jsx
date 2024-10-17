import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    closed: {
      x: '-100%',
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <nav className="bg-transparant text-white">
      <div className=" mx-auto flex justify-between xl:justify-center w-full items-center  xl:space-x-[50vw] p-5 ">
        {/* Logo */}
     <div>
     <Link to="/" className="text-3xl font-bold  bg-gradient-to-r from-violet-500 via-violet-500 to-pink-600 bg-clip-text text-transparent font-mono">
          Nidinbose .
        </Link>
     </div>

        {/* Normal Navbar (visible on medium screens and above) */}
        <ul className="hidden md:flex space-x-8">
          <li className="hover:text-violet-400">
            <Link to="/" className="font-mono">Home</Link>
          </li>
          <li className="hover:text-violet-400">
            <Link to="/projects" className="font-mono">Projects</Link>
          </li>
          {/* <li className="hover:text-violet-400">
            <Link to="/about" className="font-mono">About</Link>
          </li> */}
          <li className="hover:text-violet-400">
            <Link to="/services" className="font-mono">Services</Link>
          </li>
          <li className="hover:text-violet-400">
            <Link to="/contacts" className="font-mono">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle Button (visible on small screens) */}
        <button
          onClick={toggleMenu}
          className="text-white bg-transparent p-2 rounded-md focus:outline-none md:hidden"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navbar (visible on small screens) */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full bg-gray-900 text-white flex flex-col items-center justify-center z-50 md:hidden"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
      >
        <ul className="flex flex-col gap-8 text-lg mb-20">
          <li className="hover:text-emerald-400">
            <Link to="/" onClick={toggleMenu} className="font-mono">Home</Link>
          </li>
          <li className="hover:text-emerald-400">
            <Link to="/project" onClick={toggleMenu} className="font-mono">Projects</Link>
          </li>
          <li className="hover:text-emerald-400">
            <Link to="/about" onClick={toggleMenu} className="font-mono">About</Link>
          </li>
          <li className="hover:text-emerald-400">
            <Link to="/services" onClick={toggleMenu} className="font-mono">Services</Link>
          </li>
          <li className="hover:text-emerald-400">
            <Link to="/contact" onClick={toggleMenu} className="font-mono">Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
