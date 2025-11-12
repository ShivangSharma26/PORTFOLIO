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
      I'm a B.Tech student at NIT Rourkela 🎓, ranked 4th in my department and pursuing a high-performance Minor in Computer Science (9.0 CGPA). I'm a builder at heart ❤️, obsessed with performance—whether it's solving 400+ LeetCode problems 💻 or engineering a full-scale CI/CD platform 🚀 from scratch.
        <br />
        <br />
        My experience spans from building conversational AI agents with RAG architectures 🤖 at IIT Gandhinagar to developing real-time, full-stack applications with Node.js, Next.js, and AWS ☁️. Selected for the prestigious REU-TRACE AI research program at Iowa State University 🇺🇸, I'm always eager to collaborate on challenging projects that push the boundaries of technology
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