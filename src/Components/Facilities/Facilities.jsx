import React from "react";
import data from "./facilitiesData";
import list from "./facilityList";

const Facilities = () => {
  return (
    <div className='relative md:h-[3300px]'>
      <div className='bg-image5 w-full h-[450px] md:h-[668px] text-[#ffffff] text-[40px] md:text-[64px] font-normal flex justify-center items-center'>
        <h2>Facilities & Services</h2>
      </div>
      <h2 className='   text-xl my-4    md:absolute md:w-[340px] bg-[#F7FFFA] md:right-[320px] text-center md:mt-[50px] md:text-3xl font-bold text-[#404040]'>
        Overview of Facilities & Services
      </h2>
      <div className='flex px-4 flex-col md:grid md:grid-cols-2 justify-items-center md:gap-y-12 md:gap-x-6 md:py-[140px] md:px-56 bg-[#F7FFFA]'>
        {data.map((item) => (
          <div
            key={item.id}
            className='flex flex-col mb-4  items-center w-full shadow-lg rounded'
          >
            <img src={item.image} className='w-full rounded-t' alt='pic' />
            <h3 className='bg-white h-[100px] w-full flex justify-center items-center text-[#152D1E] text-lg font-normal'>
              {item.description}
            </h3>
          </div>
        ))}
      </div>
      <div className='bg-white flex justify-center items-center  md:pt-[5rem]'>
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
      </div>
    </div>
  );
};

export default Facilities;
