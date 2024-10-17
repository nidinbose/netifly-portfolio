import React, { useState } from 'react';
import { IoLinkSharp } from "react-icons/io5";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Define arrays with image URLs and custom project names
  const imagesTab1 = [
    { src: 'e6.avif', name: 'Food website' },
    { src: '/e1.jpg', name: 'college website' },
    { src: '/e2.png', name: 'E commerce website' },
    { src: '/e3.avif', name: 'Traval website' },
    { src: '/e4.jpg', name: 'Discover World' },
    { src: '/e5.jpg', name: 'Hotel Booking' }
  ];

  const imagesTab2 = [
    { src: 'https://cdn.dribbble.com/userupload/16126913/file/original-f4f60eec82f31b3e21f1c0775ef5e0cf.png', name: 'Project Seven' },
    { src: '/forest.png', name: 'Project Eight' },
    { src: '/forest.png', name: 'Project Nine' },
    { src: '/forest.png', name: 'Project Ten' },
    { src: '/forest.png', name: 'Project Eleven' },
    { src: '/forest.png', name: 'Project Twelve' }
  ];

  const imagesTab3 = [
    { src: '', name: 'Project Thirteen' },
    { src: '/beach.png', name: 'Project Fourteen' },
    { src: '/beach.png', name: 'Project Fifteen' },
    { src: '/beach.png', name: 'Project Sixteen' },
    { src: '/beach.png', name: 'Project Seventeen' },
    { src: '/beach.png', name: 'Project Eighteen' }
  ];

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const imagesToDisplay = activeTab === 1 ? imagesTab1 : activeTab === 2 ? imagesTab2 : imagesTab3;

  return (
    <div className="mx-auto py-10 px-4">
      {/* Heading and Subheading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-500 via-violet-500 to-pink-600 bg-clip-text text-transparent">Our Projects</h1>
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center space-x-2 sm:space-x-4 mb-8 w-auto xl:w-96 md:w-96 mx-auto grid grid-cols-3">
        <button
          onClick={() => handleTabClick(1)}
          className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full ${
            activeTab === 1 ? 'bg-gradient-to-b from-violet-600 to-pink-600 text-white' : 'bg-transparant'
          } hover:bg-gradient-to-b from-violet-600 to-pink-600`}
        >
          Full Stack
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full ${
            activeTab === 2 ? 'bg-gradient-to-b from-violet-600 to-pink-600 text-white ' : 'bg-transparant'
          } hover:bg-gradient-to-b from-violet-600 to-pink-600`}
        >
          Figma
        </button>
        <button
          onClick={() => handleTabClick(3)}
          className={`px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full ${
            activeTab === 3 ? 'bg-gradient-to-b from-violet-600 to-pink-600' : 'bg-transparant'
          } hover:bg-gradient-to-b from-violet-600 to-pink-600`}
        >
          UI 
        </button>
      </div>

      {/* Images Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 p-5 xl:p-20 gap-5 md:gap-7 xl:gap-12 ">
        {imagesToDisplay.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl shadow-lg group">
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-violet-500 to-pink-500 opacity-0 group-hover:opacity-60 transition-all duration-300 transform -translate-y-full group-hover:translate-y-0"></div>

            {/* Text overlay */}
            <div className="absolute inset-0 flex items-end justify-center p-4">
              <div className="text-white text-lg font-semibold opacity-0 flex gap-20 items-center group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300">
                {image.name}
                <IoLinkSharp />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
