import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-primary fixed top-0 left-0 z-50">
      <div className="flex flex-col items-center">
        <motion.div
          className="text-6xl font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent-blue">S</span>
          <span className="text-accent-purple">S</span>
        </motion.div>
        <div className="canvas-loader"></div>
      </div>
    </div>
  );
};

export default Loader;