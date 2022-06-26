import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Info = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const infoVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  return (
    <>
      <motion.div
        ref={ref}
        variants={infoVariants}
        animate={controls}
        initial='hidden'
        className='bg-[#FFF9F7] h-[32rem] w-full flex justify-center items-center'
      >
        <div className='flex flex-col gap-6 w-[59rem] items-center'>
          <h2 className='text-[#722C11] px-4 text-center text-2xl md:text-[40px] font-bold font-[Bell-MT]'>
            A Touch of Luxury, You never want to leave.
          </h2>
          <p className='text-[#722C11] text-lg md:text-lg px-4 font-normal text-center font-[Bell-MT]'>
            Right under my feet is air made of bricks. Pulls me down turns me
            weak for you, i find myself repearing like broken tune and Im
            forever excusing your intentions. I give in to my pretendings, which
            forvgive you each time. WIthout me knowing, they turn my heart to
            stone. Right under my feet is air made of bricks. Pulls me down
            turns me weak for you, i find myself repearing like broken tune and
            Im forever excusing your intentions. I give in to my pretendings,
            which forvgive you each time. WIthout me knowing, they turn my heart
            to stone.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Info;
