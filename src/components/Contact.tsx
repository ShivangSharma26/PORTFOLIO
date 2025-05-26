import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from '../hoc/SectionWrapper';

interface SocialButtonProps {
  name: string;
  url: string;
  icon: React.ElementType;
  index: number;
}

const SocialButton: React.FC<SocialButtonProps> = ({ name, url, icon: Icon, index }) => {
  return (
    <motion.a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="glass-card p-4 rounded-lg flex items-center justify-center gap-2 hover:bg-tertiary transition-colors"
    >
      <Icon className="text-white" size={20} />
      <span className="text-white font-medium">{name}</span>
    </motion.a>
  );
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // This would typically send an email or submit to a backend
    // For demo purposes, we're just simulating a response
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      setForm({
        name: '',
        email: '',
        message: '',
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-gray-300 uppercase tracking-wider">
          Get in touch
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Contact.
        </h2>
      </motion.div>

      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] glass-card p-8 rounded-2xl"
        >
          <p className="sm:text-[18px] text-[14px] text-gray-300">
            Interested in working together? Please fill out the form below with your information and I'll get back to you as soon as possible.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outlined-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outlined-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What would you like to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-gray-400 text-white rounded-lg outlined-none border-none font-medium resize-none"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-accent-purple transition-colors"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.25] flex flex-col justify-around"
        >
          <div className="mb-8">
            <h3 className="text-white font-bold text-xl mb-4">Connect with me</h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link, index) => (
                <SocialButton 
                  key={link.name} 
                  index={index} 
                  {...link} 
                />
              ))}
            </div>
          </div>
          
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="text-white font-bold text-xl mb-4">Looking for a creative collaborator?</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Whether you need a technical co-founder, want to discuss a project idea, or simply want to connect, 
              I'm always open to new opportunities and challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");