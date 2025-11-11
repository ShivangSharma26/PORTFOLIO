import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Volume2, VolumeX } from 'lucide-react';
import avatar from '../assets/avatar.png';


import ComputerCanvas from './canvas/Computer';
import TechOrbit from './canvas/TechOrbit';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audio] = useState(new Audio('/audio/ambient.mp3'));

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.2;
    
    return () => {
      audio.pause();
    };
  }, [audio]);

  const toggleAudio = () => {
    if (audioPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setAudioPlaying(!audioPlaying);
  };

  return (
    <section className='relative w-full h-screen mx-auto overflow-hidden'>
      <ParticleBackground />
      
      <div className='absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 sm:px-16 flex flex-row items-start gap-5'>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-accent-purple' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="flex-1 flex flex-col md:flex-row items-start justify-between">
          <div className="md:max-w-[60%]">
            <motion.h1 
              className='font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I'm <span className='text-accent-purple'>Shivang</span>
            </motion.h1>
            
            <motion.p 
              className='text-white font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Code. Create. Conquer.
            </motion.p>
            
            <motion.p 
              className='mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              B.Tech student at NIT Rourkela with a Minor in Computer Science. I specialize in AI/ML engineering, backend development, and data science,
              turning complex problems into powerful solutions.
            </motion.p>
            
            <motion.div 
              className='mt-8'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a 
                href='#projects' 
                className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-accent-purple transition-colors'
              >
                View Projects
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="relative md:w-[300px] w-[200px] aspect-square mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-purple to-accent-blue opacity-30 animate-pulse" />
            <img 
              src={avatar} 
              alt="Shivang Sharma"
              className="w-full h-full object-cover rounded-full p-2"
            />
            <div className="absolute inset-0 rounded-full border-2 border-accent-purple opacity-50" />
          </motion.div>
        </div>
      </div>

      <div className='absolute inset-0 flex justify-center items-center pointer-events-none'>
        <div className='w-full h-full max-w-7xl max-h-[700px]'>
          <Canvas>
            <ComputerCanvas />
            <TechOrbit />
          </Canvas>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-gray-400 flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-accent-purple mb-1'
            />
          </div>
        </a>
      </div>

      <button 
        onClick={toggleAudio}
        className='absolute bottom-10 right-10 p-2 rounded-full bg-tertiary z-10'
      >
        {audioPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </section>
  );
};

export default Hero;
