import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GiBookmark } from 'react-icons/gi';
import Link from 'next/link';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="fixed h-14 py-4  w-full z-10  bg-blue-500 ">
      <nav className="flex justify-between h-full  align-center py-0 px-4">
        <div>
          <Link href="/" className="logo">
            {/* <Image src={logo} height={25} width={25} alt="logo" /> */}
            <div className="flex justify-center ">
              <div className="text-white">
                <GiBookmark size={30} />
              </div>
              <div className="hidden md:flex text-indigo-300 font-bold mx-2">
                OlaLeye
              </div>
            </div>
          </Link>
        </div>
        <div className="text-white ">
          <ul className="hidden md:flex ">
            <li className="px-4">
              {' '}
              <Link href="/#home">Home</Link>
            </li>
            <li className="px-4">
              {' '}
              <Link href="/#about">About</Link>
            </li>
            <li className="px-4">
              {' '}
              <Link href="/#testimonial">Testimonial</Link>
            </li>
            <li className="px-4">
              {' '}
              <Link href="/#demo">Demo</Link>
            </li>
          </ul>

          {/* <div>
            {' '}
            <button
              type="button"
              className="bg-[efefef] h-[30px] w-[60px] bg-white rounded-2xl cursor-pointer "
            >
              <span className="block bg-[#999] h-[26px] w-[26px] rounded-full ml-1"></span>
            </button>
          </div> */}
        </div>
        <div className=" md:hidden " onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars size={30} style={{ color: '#ffffff' }} />
          )}
        </div>
        <ul
          className={
            click
              ? 'fixed my-[90px] py-4 w-full text-center md:left-[-100%] mx-[-16px] '
              : 'hidden'
          }
        >
          <li className="">
            <Link href="/#home" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="my-4 ">
            <Link href="#about" onClick={handleClick}>
              About
            </Link>
          </li>
          <li className="my-4 ">
            <Link href="#testimonial" onClick={handleClick}>
              Testimonials
            </Link>
          </li>
          <li className="">
            <Link href="#demo" onClick={handleClick}>
              Demo
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
