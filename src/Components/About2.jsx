import React from 'react';
import { motion } from 'framer-motion';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const about = {
  title: "About me",
  description: "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies",
  info: [
    { fieldName: "Name", fieldValue: "Nidinbose" },
    { fieldName: "Phone", fieldValue: "(+91) 7012543724" },
    { fieldName: "Experience", fieldValue: "12 years" },
    { fieldName: "Skype", fieldValue: "Nidinbose_" },
    { fieldName: "Nationality", fieldValue: "India" },
    { fieldName: "Email", fieldValue: "nidinbose@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Malayalam" },
  ]
};

const experience = {
  title: 'My Experience',
  description: 'Here is a summary of my professional experience.',
  items: [
    { company: 'Syneffo Solutions', position: 'Full Stack Developer intern', duration: '6 months' },
    { company: 'Techbolt Solutions', position: 'Frontend Developer intern', duration: '10 months' },
  ]
};

const education = {
  title: 'My Education',
  description: 'Here is a summary of my educational background.',
  items: [
    { institution: 'Syneffo Solutions', degree: 'Full Stack Web Development', duration: '1 year' },
    { institution: 'Musaliar College Pathanamthitta', degree: 'B.Com Finance and Taxation', duration: '3 years' },
    { institution: 'Govt HSS Thekkuthodu', degree: 'Computerised Commerce', duration: '2 years' },
  ]
};

const skills = {
  title: 'My Skills',
  description: 'A list of my technical skills.',
  items: ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'MongoDB', 'Tailwind'],
};

const About2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className='min-h-[80vh] flex items-center py-12 xl:py-0'
    >
      <div className="container mx-auto pb-20 pt-[100px]">
        <h1 className="text-center text-5xl font-mono hover:text-violet-400 mb-20 font-semibold text-white">
            Resume
        </h1>
        <Tabs className="flex flex-col xl:flex-row gap-6">
          <TabList className="flex flex-row sm:flex-col w-full sm:max-w-[500px] lg:max-w-[380px] mx-auto xl:mx-0 gap-4">
            <Tab className="text-white hover:bg-gradient-to-b from-violet-500 to-pink-500 hover:text-gray-100 font-bold font-mono rounded-md pb-1 pt-1 bg-white/10 text-center">Experience</Tab>
            <Tab className="text-white hover:bg-gradient-to-b from-violet-500 to-pink-500 hover:text-gray-100 font-bold font-mono rounded-md pb-1 pt-1 bg-white/10 text-center">Education</Tab>
            <Tab className="text-white hover:bg-gradient-to-b from-violet-500 to-pink-500 hover:text-gray-100 font-bold font-mono rounded-md pb-1 pt-1 bg-white/10 text-center">Skills</Tab>
            <Tab className="text-white hover:bg-gradient-to-b from-violet-500 to-pink-500 hover:text-gray-100 font-bold font-mono rounded-md pb-1 pt-1 bg-white/10 text-center">About me</Tab>
          </TabList>

          <div className='min-h-[70vh] w-full'>
            {/* Experience Tab Panel */}
            <TabPanel>
              <div className=" rounded-lg p-4 bg-transparant">
                <h2 className="text-2xl sm:text-sm font-bold mb-4 font-mono text-violet-400">{experience.title}</h2>
                <p className="mb-4  font-mono">{experience.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {experience.items.map((item, index) => (
    <li
      key={index}
      className="bg-white/5 p-4 rounded-lg text-white shadow-lg hover:bg-gradient-to-b from-violet-500 to-violet-500 hover:text-white font-mono transition-all duration-300"
    >
      <strong className="block text-lg font-semibold">{item.company}</strong>
      <span className="block mt-2">{item.position}</span>
      <span className="block mt-2 text-sm text-white/60">{item.duration}</span>
    </li>
  ))}
</ul>


              </div>
            </TabPanel>

            {/* Education Tab Panel */}
            <TabPanel>
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-4 text-violet-400 font-mono">{education.title}</h2>
                <p className="mb-4 text-white/60 hover:text-violet-100 font-mono">{education.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {education.items.map((item, index) => (
    <li
      key={index}
      className="bg-white/5 p-4 rounded-lg text-white shadow-lg hover:bg-gradient-to-b from-violet-500 to-violet-500 hover:text-white transition-all duration-500 transform hover:translate-y-2 hover:opacity-100 opacity-50"
    >
      <strong className="block text-lg font-semibold font-mono text-white">{item.institution}</strong>
      <span className="block mt-2 font-mono ">{item.degree}</span>
      <span className="block mt-2 text-sm text-white/60 fongt-mono">{item.duration}</span>
    </li>
  ))}
</ul>



              </div>
            </TabPanel>

            {/* Skills Tab Panel */}
            <TabPanel>
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-4 text-violet-400 font-mono">{skills.title}</h2>
                <p className="mb-4 text-white hover:text-violet-100 font-mono">{skills.description}</p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
  {skills.items.map((skill, index) => (
    <li
      key={index}
      className="bg-white/5 p-4 rounded-lg text-white shadow-lg hover:bg-gradient-to-b from-violet-500 to-violet font-mono-500 hover:text-white transition-colors text-center font-mono"
    >
      {skill}
    </li>
  ))}
</ul>

              </div>
            </TabPanel>

            {/* About Me Tab Panel */}
            <TabPanel>
              <div className="p-5">
                <h2 className="text-2xl font-bold mb-4 text-violet-400 font-mono">{about.title}</h2>
                <p className="mb-4 text-white hover:text-white/60 font-mono">{about.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  {about.info.map((info, index) => (
    <li
      key={index}
      className="bg-white/10 p-4 rounded-lg text-white shadow-lg hover:bg-gradient-to-b from-violet-500 to-violet-500 hover:text-white transition-colors"
    >
      <strong className="block text-lg font-semibold font-mono">{info.fieldName}:</strong>
      <span className="block mt-2 font-mono">{info.fieldValue}</span>
    </li>
  ))}
</ul>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About2;
