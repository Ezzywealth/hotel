import React, { useEffect } from "react";
import data from "./rooms";
import { BsPeople } from "react-icons/bs";
import { BiBath } from "react-icons/bi";
import { BiBed } from "react-icons/bi";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RoomsAndSuites = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const suiteVariants = {
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      // animate={controls}

      className='bg-[#9b746466]'
    >
      <motion.div
        variants={suiteVariants}
        animate={controls}
        initial='hidden'
        className='bg-image4 bg-cover relative h-[768px] w-full flex justify-center items-start '
      >
        <div className='flex flex-col gap-4 px-2 absolute md:px-[234px] md:gap-8 items-center top-[200px]'>
          <h4 className='text-[#FFB598] text-xl font-normal'>OUR ROOMS</h4>
          <h2 className='text-4xl md:text-6xl text-[#ffffff] font-normal'>
            Stay With Us
          </h2>
          <p className='text-center w-full text-sm md:text-lg text-[#ffffff] font-normal md:w-[973px]'>
            Right under my feet is air made of bricks. Pulls me down turns me
            weak for you, i find myself repearing like broken tune and Im
            forever excusing your intentions. I give in to my pretendings, which
            forvgive you each time. WIthout me knowing, they turn my heart to
            stone. Right under my feet is air made of bricks. Pulls me down
            turns me weak for you, i find myself repearing like broken tune and
            Im forever excusing your intentions.
          </p>
        </div>
      </motion.div>
      <div className='flex flex-col pt-4 pb-4  md:grid md:grid-cols-2 justify-items-center md:gap-y-12 md:gap-x-6 md:py-[140px] md:px-56 bg-[#fff4f0]'>
        {data.map((item) => (
          <motion.div
            // ref={ref}
            // variants={suiteVariants}
            // animate={controls}
            // initial={{ y: 100, scale: 0 }}
            key={item.id}
            className='flex flex-col mx-4 mb-8  items-center bg-white shadow-lg border rounded'
          >
            <img src={item.image} className='w-full rounded-t' alt='item' />
            <div className='h-[250px] flex flex-col px-8 gap-6 pt-2 md:pt-8'>
              <h2 className='text-center text-xl font-normal px-16'>
                {item.description}
              </h2>
              <div className='flex gap-4 md:gap-8 md:mt-2 justify-center'>
                <span className='flex flex-col items-center'>
                  <span className='block'>
                    <BsPeople style={{ color: "#595959" }} />
                  </span>
                  <span className='block font-light text-sm text-[#595959]'>
                    {item.persons}
                  </span>
                </span>
                <span className='flex flex-col items-center'>
                  <span className='block'>
                    <BiBath style={{ color: "#595959" }} />
                  </span>
                  <span className='block font-light text-sm text-[#595959]'>
                    {item.bathroom}
                  </span>
                </span>
                <span className='flex flex-col items-center'>
                  <span className='block'>
                    <BiBed style={{ color: "#595959" }} />
                  </span>
                  <span className='block font-light text-sm text-[#595959]'>
                    {item.beds}
                  </span>
                </span>
              </div>
              <div className='flex justify-around mt-2'>
                <span className='text-[#152D1E] text-xl font-normal'>
                  {item.price}
                </span>
                <button className='border-[1px] text-[#595959] border-solid border-[#595959] w-[100px] h-[35px] md:w-[130px] md:h-[45px]'>
                  Reservation
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RoomsAndSuites;
