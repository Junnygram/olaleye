/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Testimonial = () => {
  return (
    // <div className="hero">
    //   <div className="content">
    //     <p>Call us</p>
    //     <p>1-800-123-4567</p>
    //     <p>Because Money</p>
    //     // eslint-disable-next-line react/no-unescaped-entities
    //     <p>Doesn't come with instructions</p>
    //     <Link href="/" className="button">
    //       Free Consultation
    //     </Link>
    //   </div>
    // </div>
    // <div className="bg-gray-200 w-full " id="testimonial">
    //   <div className="w-full  grid grid-cols-1 md:grid-cols-2">
    //     <div className="mt-[3rem]">
    //       <Image
    //         src="/assets/001.jpeg"
    //         alt="any"
    //         width={1000}
    //         height={1000}
    //         style={{
    //           maxWidth: '100%',
    //           height: '100%',
    //           objectFit: 'cover',
    //         }}
    //       />
    //     </div>
    //     <div className="col-2 md:mt-16 text-center px-4">
    //       <h2 className="text-2xl text-center">Testimonial</h2>
    //       <span className="block my-2 mx-auto h-1 w-[10%] bg-blue-500"></span>
    //       <p>
    //         Intense is an International Financial Planning company with offices
    //         i n multiple jurisdictions over the world. Working with Intense
    //         gives me the ability to advise internat ional expatriates living in
    //         the middle east from where I live in USA.
    //       </p>
    //       <p>
    //         I am John Doe, a senior advisor for an independently owned financial
    //         planning company called Intense.
    //       </p>
    //       <button className="bg-blue-500 h-10 px-4 rounded-md my-4 hover:bg-violet-300  hover:text-white">
    //         Explore{' '}
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="h-full w-full relative">
      <div className="absolute w-full h-full bg-[rgba(0,0,0,.4)]"></div>

      <video
        src="/assets/schooling.mp4"
        className="h-full w-full "
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0  flex flex-col  justify-center text-center text-blue-300">
        <h1>Welcome</h1>
        <p>To my site.</p>
      </div>
    </div>
  );
};

export default Testimonial;
