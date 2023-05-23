/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Image from 'next/image';
import SearchBox from './SearchBox';
import { BsChevronDown } from 'react-icons/bs';
import DropdownLink from '@/components/DropdownLink';
import { FaAngleDown } from 'react-icons/fa';
import { Menu } from '@headlessui/react';
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
      <div className="flex  py-2 px-1 md:px-4 justify-between align-center w-full mx-auto  ">
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
              <Menu as="div" className="relative inline-block font-medium  ">
                <Menu.Button className="text-blue-600 pt-2">
                  <FaAngleDown />
                </Menu.Button>
                <Menu.Items className="absolute text-center border-2   divide-y divide-violet-600 right-0 w-20 md:w-32 top-14 origin-top-right bg-white  shadow-lg ">
                  <div>
                    <Menu.Items>
                      <DropdownLink className="dropdown-link" href="/profile">
                        Profile
                      </DropdownLink>
                    </Menu.Items>
                  </div>
                  <div>
                    <Menu.Item>
                      <DropdownLink
                        className="dropdown-link"
                        href="/activities"
                      >
                        Activities
                      </DropdownLink>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopPage;
