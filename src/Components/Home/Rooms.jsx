import React, { useLayoutEffect } from "react";
import image2 from "../../assets/image2.png";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  useLayoutEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // const roomsVariant = {
  //   visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  //   hidden: { opacity: 0, scale: 0 },
  // };
  const roomsVariant = {
    visible: { y: 0, transition: { duration: 0.7 } },
    hidden: { y: 300 },
  };
  return (
    <motion.div
      ref={ref}
      variants={roomsVariant}
      animate={controls}
      initial='hidden'
      className='bg-[rgba(255, 244, 240, 0.2)] pt-[4rem] mb-[4rem] flex flex-col md:grid grid-cols-2 md:p-[8.75rem] md:gap-12'
    >
      <div className='flex flex-col gap-3  items-center md:gap-6 md:justify-start md:pr-14'>
        <h2 className='text-[#585656] text-[1.5rem] md:text-[2.5rem] text-center  font-bold font-[Bell-MT]'>
          Rooms and Suites
        </h2>
        <p className='text-sm px-4 text-center w-full md:text-lg font-normal text-[#585656] md:w-[27.125rem] font-[Bell-MT]'>
          Right under my feet is air made of bricks. Pulls me down turns me weak
          for you, i find myself repeating like broken tune and Im forever
          excusing your intentions. I give in to my pretendings, which forvgive
          you each time. Without me knowing, they turn my heart to stone.
        </p>
        <Link to='/rooms'>
          <button className='flex justify-center text-sm w-[7rem] h-[2rem] mb-[4rem] items-center mt-8 md:w-[11.25rem] border-2 border-solid border-[#333333] md:h-[3.4rem] text-center'>
            View All Rooms
          </button>
        </Link>
      </div>
      <div className='px-4'>
        <img src={image2} alt='image2' className='rounded' />
        <div className='flex gap-1 justify-end'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-3'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className=' w-3'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default Rooms;
