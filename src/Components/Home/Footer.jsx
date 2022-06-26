import React, { useEffect } from "react";
import { RiFacebookFill } from "react-icons/ri";
import { GrTwitter } from "react-icons/gr";
import { FiInstagram } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const footerVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={footerVariant}
      className=' grid pb-[1rem] pt-[1rem] grid-cols-2 md:grid-cols-4 gap-3 md:p-[140px] bg-[#152D1E]'
    >
      <div className='row-start-3 mb:8 col-span-2 justify-items-center md:row-auto md:col-span-1 px-4'>
        <h2 className='text-[#E3B6A4] mr-1 md:mr-3 text-sm md:text:xl md:text-3xl inline-block text-center md:mb-4'>
          Hotel Reddington
        </h2>
        <span className='text-sm text-white font-extralight '>
          &copy;Copyright 2020 Hotel Reddington
        </span>
      </div>
      <div className='justify-items-start md:col-span-1 ml-7 md:ml-20'>
        <h2 className='text-lg text-white mb-3'>HOTEL</h2>
        <ul className='text-[#BDBDBD] text-sm font-normal'>
          <li>Special Offers</li>
          <li>Rooms & Rates</li>
          <li>Restuarant</li>
          <li>Fitness Programme</li>
          <li>Events</li>
          <li>Holiday Packages</li>
          <li>Car Rentals</li>
        </ul>
      </div>
      <div className='col-span-1 md:ml-10'>
        <h2 className='text-lg text-white mb-3'>INFORMATION</h2>
        <ul className='text-[#BDBDBD] text-sm font-normal'>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Manage my Reservation</li>
          <li>Frequently Asked Questions</li>
          <li>Loyalty Program</li>
          <li>Careers</li>
          <li>Terms & Conditions</li>
          <li>Legal notice</li>
          <li>Sitemap</li>
        </ul>
      </div>
      <div className='row-start-2 col-span-2 items-center md:col-span-1 md:row-auto flex flex-col gap-2'>
        <h2 className='text-lg text-white mb-1'>CONNECT WITH US</h2>
        <div className='flex gap-2 justify-start'>
          <span className='w-[2rem] h-[2rem] flex justify-center items-center text-center bg-[#BDBDBD] rounded-full mr-3'>
            <RiFacebookFill
              style={{ backgroundColor: "#BDBDBD", borderRadius: "50%" }}
            />
          </span>
          <span className='w-[2rem] h-[2rem] flex justify-center items-center text-center bg-[#BDBDBD] rounded-full mr-3'>
            <GrTwitter
              style={{ backgroundColor: "#BDBDBD", borderRadius: "50%" }}
            />
          </span>
          <span className='w-[2rem] h-[2rem] flex justify-center items-center text-center bg-[#BDBDBD] rounded-full'>
            <FiInstagram
              style={{ backgroundColor: "#BDBDBD", borderRadius: "50%" }}
            />
          </span>
        </div>
        <p className='text-[#BDBDBD] text-sm'>
          Or contact us by mail or phone.
        </p>
        <div className='flex text-[#BDBDBD]  items-center gap-2 text-sm'>
          <span>
            <GoLocation />
          </span>
          <p> 316 Blue Line, Lekki, Lagos,Nigeria</p>
        </div>

        <div className='flex text-[#BDBDBD] text-sm items-start  gap-3'>
          <span>
            <FiPhoneCall />
          </span>
          <div className='block '>
            <span className='block'>+2348094435432</span>
            <span className='block'>+2348094435432</span>
            <span className='block'>+2348094435432</span>
          </div>
        </div>

        <span className='flex items-center gap-3 text-[#BDBDBD] text-sm'>
          <AiOutlineMail />
          customercare@hotelred.com
        </span>
      </div>
    </motion.div>
  );
};

export default Footer;
