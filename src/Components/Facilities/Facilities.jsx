import React, { useLayoutEffect } from "react";
import data from "./facilitiesData";
import list from "./facilityList";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Facilities = () => {
  const controls = useAnimation();
  const [inView] = useInView();

  const facVariants = {
    visible: { scale: 1, transition: { duration: 2 } },
    hidden: { scale: 0 },
  };

  useLayoutEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const pictures = document.querySelectorAll("#right");
  console.log(pictures);

  return (
    <motion.div className='relative md:h-[3300px]'>
      <motion.div
        transition={{ duration: 1 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className='bg-image5 font w-full h-[450px] md:h-[668px] text-[#ffffff] text-[40px] md:text-[64px] font-normal flex justify-center items-center'
      >
        <h2>Facilities & Services</h2>
      </motion.div>
      <motion.h2
        variants={facVariants}
        animate={controls}
        initial={{ scale: 0 }}
        className='text-xl my-4 md:absolute md:w-[340px] bg-[#F7FFFA] md:right-[320px] text-center md:mt-[50px] md:text-3xl font-bold text-[#404040]'
      >
        Overview of Facilities & Services
      </motion.h2>

      <motion.div className='flex px-4 flex-col md:grid md:grid-cols-2 justify-items-center md:gap-y-12 md:gap-x-6 md:py-[140px] md:px-56 bg-[#F7FFFA]'>
        {data.map((item) => (
          <motion.div
            variants={facVariants}
            animate={controls}
            initial={{ scale: 0 }}
            key={item.id}
            className='flex flex-col mb-4  items-center w-full shadow-lg rounded'
            id={item.id % 2 === 0 ? "right" : "left"}
          >
            <img src={item.image} className='w-full rounded-t' alt='pic' />
            <h3 className='bg-white h-[100px] w-full flex justify-center items-center text-[#152D1E] text-lg font-normal'>
              {item.description}
            </h3>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        variants={facVariants}
        initial='hidden'
        animate={controls}
        className='bg-white flex justify-center items-center  md:pt-[5rem]'
      >
        <div>
          <h2 className='text-[36px] font-normal text-[#404040]'>
            We also offer...
          </h2>
          <ul className='md:grid md:grid-cols-3 mb-4 justify-items-start md:gap-x-24 md:gap-y-1 '>
            {list.map((item) => (
              <li
                key={item}
                className='list-disc text-left text-[#404040] text-[16px] font-normal'
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Facilities;
