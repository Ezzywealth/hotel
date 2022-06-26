import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menu = document.querySelector("#menu");
  const [menuList, setMenuList] = useState(true);
  const [small, setSmall] = useState(true);
  const [innerWidth, setInnerWidth] = useState({ width: undefined });

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openDrawer = (e) => {
    e.preventDefault();
    menu.classList.remove("hidden");
    menu.classList.add("menuList");
    setMenuList(!menuList);
    setSmall(!small);
  };
  const closeDrawer = (e) => {
    e.preventDefault();
    menu.classList.add("hidden");
    menu.classList.remove("menuList");
    setMenuList(!menuList);
    setSmall(!small);
  };
  return (
    <div className='relative'>
      <div className='w-full h-20 bg-[#152D1E] flex justify-between items-center  md:px-32'>
        <div className='text-[#E3B6A4] w-28 h-10 text-center'>
          Hotel Reddington
        </div>

        <div
          className='md:hidden pr-4'
          onClick={(e) => (small ? openDrawer(e) : closeDrawer(e))}
        >
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
          onClick={(e) => closeDrawer(e)}
          id='menu'
          className='hidden text-white font-[Graphik] text-[14px] md:flex justify-center items-center gap-[36px]  font-light'
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
