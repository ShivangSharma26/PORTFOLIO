import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../constants';
import { textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';
import { GraduationCap as Graduation, Briefcase, Award, Users } from 'lucide-react';

const getTimelineIcon = (title: string) => {
  if (title.includes('B.Tech')) return Graduation;
  if (title.includes('Intern') || title.includes('Research')) return Briefcase;
  if (title.includes('NCC')) return Users;
  return Award;
};

interface ExperienceCardProps {
  experience: {
    title: string;
    company_name: string;
    iconBg: string;
    date: string;
    points: string[];
  };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const Icon = getTimelineIcon(experience.title);
  
  return (
    <VerticalTimelineElement
      contentStyle={{ background: 'rgba(255, 255, 255, 0.05)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.05)' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={<div className="flex justify-center items-center w-full h-full"><Icon className="text-accent-purple" /></div>}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-accent-blue text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Timeline = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-gray-300 uppercase tracking-wider">
          My journey so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Timeline.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Timeline, "timeline");