import React, { useState } from 'react';
import { motion, transform } from 'framer-motion';

const App2 = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const boxVarriants = {
    //initial
    lion: {
      x: 100,
      scale: 1.5,
    },

    //animate
    tiger: {
      x: 1000,
      scale: 1,
      backgroundColor: '#0000ff',
      transition: { durtion: 2, repeat: Infinity, repeatType: 'reverse' },
    },
  };

  const menuvarriants = {
    hidden: {
      transform: { duration: 0.5 },
    },
    visible: {
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <div className='max-w-[1110px] w-full mx-auto'>
        <motion.div
          className='text-center w-[100px] h-12 bg-gray-800 flex items-center justify-center cursor-pointer rounded-lg shadow-md'
          onClick={() => {
            setIsNavVisible((prev) => !prev);
          }}
        >
          <span className='text-white'>navbar</span>
        </motion.div>

        <motion.div
          className='fixed top-0 right-0 w-64 h-full bg-gray-700 flex flex-col space-y-2 p-4 shadow-lg items-center'
          variants={menuvarriants}
          initial='hidden'
          animate={isNavVisible ? 'visible' : 'hidden'}
        >
          <span>home</span>
          <span>about</span>
          <span>contant</span>
        </motion.div>
      </div>
    </>
  );
};

export default App2;
