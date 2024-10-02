import React from 'react';
import { easeInOut, motion } from 'framer-motion';

function App() {
  return (
    <>
      <div className='flex flex-col'>
        <motion.div
          className='w-24 h-24 bg-blue-300 m-2'
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: 1000, opacity: 0.2 }}
          transition={{ duration: 4 }}
        ></motion.div>

        <motion.div
          className='w-24 h-24 bg-blue-300 m-2'
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: 4,
          }}
        ></motion.div>

        <motion.div
          className='w-24 h-24 bg-blue-300 m-2'
          initial={{ backgroundColor: '#ff0000' }}
          animate={{ backgroundColor: '#0000ff' }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: 4,
          }}
        ></motion.div>

        <motion.div
          className='w-24 h-24 bg-blue-300 m-2'
          initial={{ backgroundColor: '#ff0000' }}
          animate={{ backgroundColor: '#0000ff' }}
          whileFocus={{ rotate: 360 }}
        ></motion.div>

        <motion.div
          className='w-24 h-24 bg-indigo-400 flex flex-col justify-center items-center'
          initial={{ backgroundColor: '#ff0000' }}
          animate={{ backgroundColor: '#0000ff' }}
          whileFocus={{ rotate: 360 }}
          drag='x'
          dragElastic={0.5}
          dragMomentum={false}
          dragConstraints={{ left: 100, right: 500, top: 0, bottom: 500 }}
        ></motion.div>

        <div className='h-[120vh]'></div>
        <motion.div
          className='w-[500px] h-24 bg-indigo-400 m-10'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </>
  );
}

export default App;
