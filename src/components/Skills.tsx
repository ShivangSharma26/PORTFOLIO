import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../constants';
import { textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';
import { Tilt } from 'react-tilt';

interface TechProps {
  index: number;
  name: string;
  icon: string;
}

const TechCard: React.FC<TechProps> = ({ index, name, icon }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1.1,
        speed: 450,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="w-28 h-28 glass-card flex justify-center items-center flex-col m-2 p-4 rounded-xl cursor-pointer hover:bg-tertiary transition-colors group"
      >
        <div className="relative w-16 h-16">
          <motion.div
            className="absolute inset-0 bg-accent-purple rounded-lg opacity-0 group-hover:opacity-20 transition-opacity"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <img src={icon} alt={name} className="w-full h-full object-contain relative z-10" />
        </div>
        <p className="text-xs mt-2 text-white opacity-80 group-hover:opacity-100 transition-opacity">{name}</p>
      </motion.div>
    </Tilt>
  );
};

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-gray-300 uppercase tracking-wider">My tools</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Tech Stack.
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-col">
        <div className="w-full flex">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-3 text-gray-300 text-[17px] max-w-3xl leading-[30px]"
          >
            I work across a wide range of technologies ⚙️— from writing efficient system-level code in C++ to building modern, scalable web applications and experimenting with machine learning frameworks 🤖. My experience lets me connect low-level performance with high-level product development, creating solutions that are both robust and user-focused.
          </motion.p>
        </div>

        <div className="achievements mt-8 flex flex-col sm:flex-row justify-between max-w-3xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="achievement glass-card p-4 flex flex-col items-center rounded-xl my-2 sm:my-0"
          >
            <h3 className="text-accent-purple text-3xl font-bold">600+</h3>
            <p className="text-gray-300 text-sm">LeetCode problems</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="achievement glass-card p-4 flex flex-col items-center rounded-xl my-2 sm:my-0"
          >
            <h3 className="text-accent-blue text-3xl font-bold">3⭐</h3>
            <p className="text-gray-300 text-sm">CodeChef rating</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="achievement glass-card p-4 flex flex-col items-center rounded-xl my-2 sm:my-0"
          >
            <h3 className="text-accent-purple text-3xl font-bold">1545</h3>
            <p className="text-gray-300 text-sm">LeetCode rating</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="achievement glass-card p-4 flex flex-col items-center rounded-xl my-2 sm:my-0"
          >
            <h3 className="text-accent-blue text-3xl font-bold">Top 400</h3>
            <p className="text-gray-300 text-sm">AlgoUniversity</p>
          </motion.div>
        </div>

        <motion.div 
          className="flex flex-wrap justify-center mt-12 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {technologies.map((technology, index) => (
            <TechCard 
              key={technology.name} 
              index={index} 
              {...technology} 
            />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");