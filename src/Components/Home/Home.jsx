import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <motion.div className=' bg-image1 w-full h-[35rem]  md:h-[48rem]'>
        <div className=' flex justify-center items-center relative'>
          <div className='absolute top-[9rem]  md:top-[13rem] flex flex-col gap-4 items-center'>
            <h3 className='text-[#FFB598] text-center text-xl font-normal'>
              HOTEL REDDINGTON
            </h3>
            <h3 className='text-[2rem] text-white md:text-[4rem]'>
              A Magical Experience.
            </h3>
            <button className='w:[8rem] h-[2rem] px-4 text-sm md:w-[11.25rem] border-2  border-solid border-white md:h-[3.5rem] text-white md:text-xl'>
              Reserve Now
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
