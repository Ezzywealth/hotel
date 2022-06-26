import React, { useLayoutEffect } from "react";
import rec1 from "../../assets/Rectangle 16.png";
import rec2 from "../../assets/Rectangle 17.png";
import rec3 from "../../assets/Rectangle 18.png";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const News = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const newsVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  useLayoutEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={newsVariant}
      className='relative bg-[#fff6f233]  md:h-[400px] w-full justify-center items-center'
    >
      <div className='md:pl-[140px] px-4 md:pr-[337px] pt-[3rem] md:pt-[134px] pb-[135px] '>
        <h2 className='md:text-[30px] z-10 w-full text-center text-[1.5rem] text-[#333333] font-bold mb-4 md:w-[625px]'>
          Stay up to date with our Newsletter
        </h2>
        <form className='flex z-50 flex-col items-center gap-2 md:flex-row md:gap-4 md:items-end mb-3'>
          <div className='w-full md:w-[350px] flex flex-col text-xl text-[#333333] font-normal'>
            <label htmlFor='fullname'>Full Name</label>
            <input
              className='border-2 h-[55px] border-solid border-[#808080] px-2'
              id='fullname'
              type='text'
            />
          </div>
          <div className='w-full md:w-[400px] flex flex-col text-xl text-[#333333] font-normal'>
            <label htmlFor='email'>Email</label>
            <input
              className='border-2 h-[55px] border-solid border-[#808080] px-2'
              id='email'
              type='text'
            />
          </div>
          <button className='border-2 border-solid w-[100px] border-[#333333] md:w-[150px] h-[55px] bg-[#333333] text-white'>
            send
          </button>
        </form>
        <input className='mr-2' id='check' type='checkbox' />
        <label className='text-base font-light text-[#333333]' htmlFor='check'>
          I have read and accepted data protection laws
        </label>
      </div>
      <div className='z-0 hidden  md:flex absolute h-full top-0 right-3 gap-1'>
        <img src={rec1} alt='' />
      </div>
      <div className='z-0 hidden md:flex absolute h-full top-0 right-1 gap-1'>
        <img src={rec2} alt='' />
      </div>
      <div className='z-0 flex absolute h-full top-0 right-0 gap-1'>
        <img src={rec3} alt='' />
      </div>
    </motion.div>
  );
};

export default News;
