import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const App3 = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const constrol = useAnimation();

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

  //   return (
  //     <>
  //       <div className='max-w-[1110px] w-full mx-auto'>
  //         <motion.div
  //           className='w-24 h-24 bg-gray-700 mt-14 ml-14 rounded-lg shadow-lg'
  //           animate={{
  //             scale: [1, 1.5, 1, 2],
  //             rotate: [0, 0, 270, 270],
  //             borderRadius: ['20', '50', '50%', '20%'],
  //           }}
  //           transition={{
  //             duration: 2,
  //             ease: 'easeInOut',
  //             repeat: Infinity,
  //             repeatType: 'mirror',
  //             times: [0, 0.2, 0.7, 1],
  //           }}
  //         ></motion.div>
  //       </div>
  //     </>
  //   );

  const moveRight = () => {
    constrol.start({ x: 1000, transition: { duration: 2 } });
  };

  const moveleft = () => {
    constrol.start({ x: -1000, transition: { duration: 2 } });
  };

  const moveup = () => {
    constrol.start({ y: -1000, transition: { duration: 2 } });
  };

  const makeCircle = () => {
    constrol.start({ borderRadius: '50%' });
  };

  const stopanimate = () => {
    constrol.stop();
  };

  return (
    <>
      <div className='max-w-[1110px] w-full mx-auto'>
        <motion.div
          className='w-24 h-24 bg-gray-700 mt-14 ml-14 rounded-lg shadow-lg'
          animate={constrol}
        ></motion.div>
        <div className='flex gap-3'>
          <button onClick={moveRight}>clk1</button>
          <button onClick={moveleft}>clk2</button>
          <button onClick={moveup}>clk3</button>
          <button onClick={makeCircle}>clk4</button>
          <button onClick={stopanimate}>clk5</button>
        </div>
      </div>
    </>
  );
};

export default App3;
