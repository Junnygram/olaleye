import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { GiBookmark } from 'react-icons/gi';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="fixed h-14 py-4  w-full z-10  bg-black ">
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
        <div className="text-white">
          <ul className="hidden md:flex ">
            <li className="px-4">
              {' '}
              <Link href="/">Home</Link>
            </li>
            <li className="px-4">
              {' '}
              <Link href="/">About</Link>
            </li>
            <li className="px-4">
              {' '}
              <Link href="/">Testimonial</Link>
            </li>
            <li className="px-4">
              {' '}
              <Link href="/"></Link> Demo
            </li>
          </ul>
        </div>
        <div className=" md:hidden" onClick={handleClick}>
          {click ? (
            <FaBars size={30} style={{ color: '#ffffff' }} />
          ) : (
            <FaTimes size={30} style={{ color: '#ffffff' }} />
          )}
        </div>
        <ul
          className={
            click
              ? 'hidden'
              : 'fixed top-[90px] w-full text-center md:left-[-100%] bg-transparent'
          }
        >
          <li className="my-4  ">
            <Link href="/" onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="my-4 ">
            <Link href="#about" onClick={handleClick}>
              About
            </Link>
          </li>
          <li className="my-4 ">
            <Link href="#testimonials" onClick={handleClick}>
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
