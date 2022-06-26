import React from "react";
import { useAnimation, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <motion.div
        transition={{ duration: 1.5, ease: "easeInOut" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=' bg-image1 w-full h-[35rem]  md:h-[48rem]'
      >
        <div className=' flex justify-center items-center relative'>
          <div className='absolute top-[9rem]  md:top-[13rem] flex flex-col gap-4 items-center'>
            <h3 className='text-[#FFB598] text-center text-[20px] font-normal font-[Graphik]'>
              HOTEL REDDINGTON
            </h3>
            <h3 className='text-[2rem] text-white md:text-[64px] font-[Bell-MT]'>
              A Magical Experience.
            </h3>
            <Link to='/rooms'>
              <button className='w:[8rem] h-[2rem] px-4 text-sm md:w-[11.25rem] border-2  border-solid border-white md:h-[3.5rem] text-white md:text-xl font-[Bell-MT]'>
                Reserve Now
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
