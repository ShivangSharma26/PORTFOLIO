import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

interface ServiceCardProps {
  index: number;
  title: string;
  icon: React.ElementType;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon: Icon, description }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="xs:w-[250px] w-full"
    >
      <motion.div
        variants={fadeIn("right", "spring", 0.1 * index, 0.75)}
        className="w-full glass-card p-[1px] rounded-[20px]"
      >
        <div className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <div className="w-16 h-16 rounded-full bg-tertiary flex justify-center items-center">
            <Icon className="w-1/2 h-1/2 text-white" />
          </div>

          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          <p className="text-gray-300 text-[14px] text-center">{description}</p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-gray-300 uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Computer Science OK  student at NIT Rourkela with a passion for building innovative solutions. With a CGPA of 9.0, I balance academic excellence with practical coding skills. I've solved 400+ problems on LeetCode (rating 1545) and earned a 3⭐ rating on CodeChef.
        <br />
        <br />
        My technical journey spans DSA, machine learning, and full-stack development. I've interned at prestigious institutions like IIT Gandhinagar and Iowa State University, working on cutting-edge research projects. I'm always eager to collaborate on challenging projects that push the boundaries of technology.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 1)}
        className="mt-12 text-center"
      >
        <a
          href="/resume.pdf"
          download
          className="bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary inline-block hover:bg-accent-purple transition-colors"
        >
          Download Resume
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");