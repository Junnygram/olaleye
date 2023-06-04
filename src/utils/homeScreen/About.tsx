/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-200 w-full " id="about">
      <div className="w-full  grid grid-cols-1 md:grid-cols-2">
        <div className="mt-[3rem]">
          <Image
            src="/assets/001.jpeg"
            alt="any"
            width={1000}
            height={1000}
            style={{
              maxWidth: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="col-2 md:mt-16 text-center px-4">
          <h2 className="text-2xl text-center">About</h2>
          <span className="block my-2 mx-auto h-1 w-[10%] bg-blue-500"></span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            commodo cursus velit, sed sollicitudin mauris pharetra eget.
            Phasellus nec mi quis eros euismod laoreet ut consequat leo.
            Pellentesque eu gravida mi, ut egestas magna. Etiam interdum, justo
            ut convallis placerat, eros augue dapibus mauris, ac tempor lacus
            dui sed turpis. Vestibulum posuere, nunc sit amet tempus malesuada,
            libero dui tincidunt neque, at mattis nisl mi quis metus. Aliquam
            erat volutpat. Nulla facilisi. Donec vel hendrerit felis. Aliquam
            feugiat vel orci sed tincidunt. Nunc eget euismod justo.
          </p>
          {/* <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p> */}
          <button className="bg-blue-500 h-10 px-4 rounded-md my-4 hover:bg-violet-300  hover:text-white">
            Explore{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
