import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { GoSettings } from 'react-icons/go';
import { FaRegUser } from 'react-icons/fa';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { RiNotification3Fill, RiSearch2Fill } from 'react-icons/ri';
import SearchBox from '../../utils/SearchBox';

function Header() {
  return (
    <div className="w-full bg-white">
      <nav className="flex w-full ml-auto h-12 items-center px-4 justify-between ">
        <SearchBox />
        <div className="flex">
          <div>
            {/* {status === 'loading' ? (
                  'Loading'
                ) : session?.user ? (
                  <Menu as="div" className="relative inline-block">
                    <Menu.Items className="absolute right-0 w-56 origin-top-right bg-white  shadow-lg ">
                      <Menu.Item>
                        <DropdownLink className="dropdown-link" href="/profile">
                          Profile
                        </DropdownLink>
                      </Menu.Item>
                    <Menu.Item>
                        <a
                          className="dropdown-link"
                          href="#"
                          onClick={logoutClickHandler}
                        >
                          Logout
                        </a>
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                ) : ( */}
            <Link href="/login" className="flex pt-2 pl-2">
              <div className="text-cyan-300">
                <FaRegUser />
              </div>
            </Link>
            {/* )} */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
