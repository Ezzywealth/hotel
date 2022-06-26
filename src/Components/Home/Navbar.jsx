import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuRef = useRef(null);
  const [menuList, setMenuList] = useState(true);
  console.log(menuList);

  const handleClick = (e) => {
    e.preventDefault();
    setMenuList(!menuList);
    const menu = document.querySelector("#menu");

    menu.classList.toggle("hidden");
    menu.classList.toggle("menuList");
  };
  return (
    <div className='relative'>
      <div className='w-full h-20 bg-[#152D1E] flex justify-between items-center  md:px-32'>
        <div className='text-[#E3B6A4] w-28 h-10 text-center'>
          Hotel Reddington
        </div>
        <div className='md:hidden pr-4' onClick={(e) => handleClick(e)}>
          {menuList ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className=' w-10 text-white text-4xl'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-10 text-white text-4xl'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          )}
        </div>

        <ul
          onClick={(e) => handleClick(e)}
          id='menu'
          ref={menuRef}
          className='hidden text-white md:flex justify-center items-center gap-4 text-base font-Roboto font-light'
        >
          <Link to='/'>
            <li className='li'>Home</li>
          </Link>
          <Link to='/rooms'>
            <li className='li'>Room and Suites</li>
          </Link>
          <Link to='/facilities'>
            <li className='li'>Facilties</li>
          </Link>
          <Link to='/contact'>
            <li className='li'>Contact</li>
          </Link>
          <Link to='/'>
            <li className='li'>Offers</li>
          </Link>
          <Link to='/'>
            <li className='li'>Events</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
