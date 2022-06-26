import React, { useEffect } from "react";
import News from "../Home/News";
import map from "../../assets/map.png";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contactVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1.5 } },
  hidden: { opacity: 0, scale: 0 },
};
const Contact = () => {
  const controls = useAnimation();
  const [inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div className=' w-full'>
      <div className='flex flex-col   md:grid md:grid-cols-2 md:px-[141px] bg-[#FFF9F7] md:h-[1100px] md:py-[100px] md:gap-[120px]'>
        <motion.div
          variants={contactVariant}
          initial='hidden'
          animate={controls}
          className='md:col-span-1 flex align-center flex-col w-full md:gap-5 md:w-[350px]'
        >
          <h2 className='text-[30px]  md:text-[40px] text-[#722C11] text-center font-medium'>
            CONTACT US
          </h2>
          <p className='text-lg text-[#722C11] text-center'>
            Thank you for your interest in Hotel Reddington
          </p>
          <p className='text-sm md:text-lg px-4 md:px-0 text-[#722C11] font-light text-center md:text-start'>
            Please contact us directly using the details below or complete the
            enquiry form and our friendly staff will be in touch shortly.
          </p>
          <div className='grid grid-cols-2 gap-y-3 py-4 md:flex items-center md:items-start md:flex-col  md:gap-3'>
            <div className='w-full px-4 md:px-0'>
              <span className='text-sm text-[#722C11] font-light'>
                TELEPHONE:
              </span>
              <div>
                <span className='text-sm block md:text-lg text-[#722C11] font-normal'>
                  +2348094435432
                </span>
                <span className='text-sm block md:text-lg text-[#722C11] font-normal'>
                  +2348094435432
                </span>
                <span className='text-sm block md:text-lg text-[#722C11] font-normal'>
                  +2348094435432
                </span>
              </div>
            </div>
            <div className='w-[161px]'>
              <span className='text-sm text-[#722C11] font-light'>
                ADDRESS:
              </span>
              <p className='text-sm text-[#722C11] font-normal'>
                316 BlueLine Lekki, Lagos State Nigeria
              </p>
            </div>
            <div className='px-4 md:px-0 flex md:block gap-1'>
              <span className='text-sm text-[#722C11] font-light'>Email:</span>
              <p className=' text-sm md:text-lg text-[#722C11] font-normal'>
                customercare@hotelred.com
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={contactVariant}
          transition={{ duration: 2 }}
          initial='hidden'
          animate={controls}
          className='bg-white w-full px-4 md:px-[1.5rem] md:w-[500px] relative md:h-[560px] flex flex-col gap-1 md:gap-6 pt-8 items-center'
        >
          <h3 className='text-[20px] font-normal text-center text-[#152D1E]'>
            Talk to Hotel Reddington Customer Care
          </h3>
          <form className='pb-8 flex flex-col gap-4'>
            <div>
              <label
                className='block text-[#595959] text-sm font-normal'
                htmlFor='fullname'
              >
                FullName
              </label>
              <input
                className='w-full md:w-[400px] h-[50px] border-[#333333] border-[0.8px] px-4'
                id='fullname'
                type='text'
                placeholder='Enter your full name'
              />
            </div>
            <div>
              <label
                className='block text-[#595959] text-sm font-normal '
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='w-full md:w-[400px] h-[50px] border-[#333333] border-[0.8px] px-4'
                id='email'
                type='email'
                placeholder='Enter your email address'
              />
            </div>
            <div>
              <label
                className='block text-[#595959] text-sm font-normal '
                htmlFor='message'
              >
                Message
              </label>
              <textarea
                className='w-full md:w-[400px] h-[112px] border-[#333333] border-[0.8px] px-4 pt-4'
                id='message'
                type='text'
                placeholder='Enter your message/inquiry'
              />
            </div>
            <div className='flex items-center gap-2'>
              <input
                className='text-[#808080] border-[1px] w-[20px] h-[20px]'
                id='check'
                type='checkbox'
              />
              <label htmlFor='check' className='text-sm'>
                I have read and accepted data protection laws
              </label>
            </div>
            <div className='relative'>
              <button className='bg-[#152D1E] w-[80px] h-[30px] md:h-[50px] md:w-[133px] text-[#ffffff] md:text-lg font-bold absolute right-0 bottom-[-5]'>
                Submit
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      <motion.div className='bg-[#F7FFFA] hidden relative h-[450px] w-full md:flex justify-center'>
        <motion.img
          variants={contactVariant}
          transition={{ duration: 2 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 0.8 }}
          className='md:absolute  md:w-[1159px] h-[569px] top-[-284px]'
          src={map}
          alt='map'
        />
      </motion.div>
      <News />
    </motion.div>
  );
};

export default Contact;
