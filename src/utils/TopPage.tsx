import React from 'react';
import Image from 'next/image';
import SearchBox from './SearchBox';
import { BsChevronDown } from 'react-icons/bs';
import { IoIosNotificationsOutline } from 'react-icons/io';
interface TopPageProps {
  page: string;
  details: string;
  right: boolean;
  name: string;
  info: string;
  src: string;
}

function TopPage({ details, right, name, info, src }: TopPageProps) {
  return (
    <div className="bg-white  ">
      <div className="flex  py-2 px-2 md:px-6 justify-between align-center w-full mx-auto  ">
        <div className=" font-semibold my-2">{details}</div>
        <div className="flex md:gap-12">
          <div>
            <SearchBox />
          </div>
          {/* <div className=" bg-slate-300 w-5 rounded-full py-1 px-auto h-6">
            <IoIosNotificationsOutline />
          </div> */}
          {right && (
            <div className="flex gap-1">
              <div className="flex flex-col ">
                <span className="text-center text-xl ">{name}</span>{' '}
                <span className="text-sm font-thin">{info} </span>
              </div>
              <div className="rounded-full h-10 w-10 py-1">
                {' '}
                <Image
                  alt="profile"
                  // src="/assets/006.jpeg"
                  src={src}
                  height={30}
                  width={30}
                  className="rounded-full h-10 w-20 object-cover "
                />{' '}
              </div>
              <div className="my-3 hidden md:flex">
                <BsChevronDown />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopPage;
