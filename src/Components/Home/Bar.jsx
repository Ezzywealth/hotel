import React from "react";
import image3 from "../../assets/image4.png";

const Bar = () => {
  return (
    <div className='bg-[#F7FFFA] mt-[1.5rem] flex flex-col md:grid grid-cols-2 md:p-[8.75rem] md:gap-8'>
      <div className='flex flex-col gap-3 md:gap-6 justify-center items-center md:justify-start md:pr-8'>
        <h2 className='text-[#142d1e] text-[1.5rem] md:text-[2.5rem]  font-bold'>
          Restuarant & Bar
        </h2>
        <p className='md:text-lg text-sm font-normal w-full px-4 text-[#142d1e] md:w-[25.375rem]'>
          Right under my feet is air made of bricks. Pulls me down turns me weak
          for you, i find myself repeating like broken tune and Im forever
          excusing your intentions. I give in to my pretendings, which forvgive
          you each time. Without me knowing, they Right under my feet is air
          made of bricks. Pulls me down turns me weak for you, i find myself
          repeating like broken tune and Im forever excusing your intentions. I
          give in to my pretendings, which forvgive you each time. Without me
          knowing, they
        </p>
        <button className='flex justify-center mb-[2.5rem] items-center mt-4 w-[7rem] h-[2rem] md:w-[11.25rem] border-2 border-solid border-[#333333] md:h-[3.4rem] text-center'>
          Discover more
        </button>
      </div>
      <div className='w-full px-4 shrink-0'>
        <img src={image3} alt='image2' className='w-full rounded  bg-cover' />
        <div className='flex gap-1 justify-end'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-3'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className=' w-3'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Bar;
