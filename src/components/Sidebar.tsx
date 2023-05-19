import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RiAdvertisementLine } from 'react-icons/ri';
import { SiCoursera } from 'react-icons/si';
import { MdOutlineDashboard, MdAssignmentLate } from 'react-icons/md';
import { GoReport } from 'react-icons/go';
import { FiSettings } from 'react-icons/fi';
import { TbCurrencyNaira } from 'react-icons/tb';
import { BsPersonFill } from 'react-icons/bs';
import { CiWallet } from 'react-icons/ci';
import MenuItem from './MenuItem';

const Sidebar = () => {
  return (
    <div className="bg-white w-[16%] h-full fixed pt-8 px-6 shadow-xl ">
      <Link href="/" passHref>
        <div className="flex mx-4">
          <div>
            <Image src="/assets/logo.jpeg" alt="logo" height={50} width={50} />
          </div>
          <div className="flex text-cyan-300  ml-2 font-bold">
            Ola <span className="text-gray-700"> Leye</span>
          </div>
        </div>
      </Link>
      <div className="text-start gap-2 ml-4 mt-4">
        <MenuItem menuTitle="dashboard" icon={<MdOutlineDashboard />} />
        <MenuItem menuTitle="courses" icon={<SiCoursera />} />
        <MenuItem menuTitle="quizzes" icon={<CiWallet />} />
        <MenuItem menuTitle="assignments" icon={<MdAssignmentLate />} />
        <MenuItem menuTitle="students" icon={<BsPersonFill />} />
        <MenuItem menuTitle="earnings" icon={<TbCurrencyNaira />} />
        <MenuItem menuTitle="reports" icon={<GoReport />} />
        <MenuItem menuTitle="adds-on" icon={<RiAdvertisementLine />} />
        <MenuItem menuTitle="settings" icon={<FiSettings />} />
      </div>
    </div>
  );
};

export default Sidebar;
