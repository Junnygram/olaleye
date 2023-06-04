import React from 'react';
import Image from 'next/image';

const Demo = () => {
  return (
    // <div className="demo" id="demo">
    //   <div className="container">
    //     <div className="col-1">
    //       <p>More Than 100 Financial Planners,</p>
    //       <p>One Philosophy</p>
    //       <p>
    //         Every single one of our financial advisors receives rigorous
    //         training according to John Doe’s philosophy based on academic
    //         research (including that of a Nobel laureate in Economics) and
    //         Behavioral Finance.
    //       </p>
    //       <button className="button">Get your free financial analysis</button>
    //     </div>
    //     <div className="col-2">
    //       <iframe
    //         width="570"
    //         height="320"
    //         src="https://www.youtube.com/embed/oeqP5JtihMA"
    //         title="Youtube video player"
    //         frameBorder="0"
    //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //         allowFullScreen
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gray-200 w-full " id="demo">
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
          <h2 className="text-2xl text-center">Demo</h2>
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

          <button className="bg-blue-500 h-10 px-4 rounded-md my-4 hover:bg-violet-300  hover:text-white">
            Explore{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
