import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

interface FeedbackCardProps {
  index: number;
  content: string;
  name: string;
  designation: string;
  company: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  index,
  content,
  name,
  designation,
  company,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="glass-card p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{content}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} at {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className="sm:px-16 px-6 sm:py-16 py-10 glass-card rounded-2xl min-h-[300px]">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-gray-300 uppercase tracking-wider">What others say</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Testimonials.
          </h2>
        </motion.div>
      </div>
      <div className="sm:px-16 px-6 -mt-20 pb-14 flex flex-wrap gap-7 justify-center">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");