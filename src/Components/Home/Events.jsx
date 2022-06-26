import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Events = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  const eventVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1.3 } },
    hidden: { opacity: 0.4, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={eventVariant}
      animate={controls}
      initial='hidden'
      className='bg-image3 w-full h-[40.44rem] flex justify-center items-center'
    >
      <div className='flex flex-col px-4 h-[400px] justify-evenly items-center md:px-32'>
        <h2 className='text-white font-medium text-[2rem] md:text-[2.5rem] font-[Bell-MT]'>
          Events & Weddings
        </h2>
        <p className='text-center text-lg w-full md:text-lg font-normal md:w-[57rem] font-[Bell-MT]  text-white'>
          Right under my feet is air made of bricks. Pulls me down turns me weak
          for you, i find myself repearing like broken tune and Im forever
          excusing your intentions. I give in to my pretendings, which forvgive
          you each time. WIthout me knowing, they turn my heart to stone. Right
          under my feet is air made of bricks. Pulls me down turns me weak for
          you, i find myself repearing like broken tune and Im forever excusing
          your intentions. I give in to my pretendings, which forvgive you each
          time. WIthout me knowing, they turn my heart to stone.{" "}
        </p>
        <button className='flex justify-center items-center px-2 text-sm w-[7rem] h-[2.5rem] mt-8 md:w-[11.5rem] text-white border-2 border-solid border-white md:h-[3.4rem] text-center'>
          Host your events
        </button>
      </div>
    </motion.div>
  );
};

export default Events;
