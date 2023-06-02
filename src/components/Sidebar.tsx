import React, { useContext } from 'react';
import { UserContext } from './Context/UserContext';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineSchedule, AiOutlineHome } from 'react-icons/ai';
import { CiLogout } from 'react-icons/ci';
import { SiCoursera } from 'react-icons/si';
import { MdOutlineDashboard, MdAssignmentLate } from 'react-icons/md';
import { MdPayment } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { BiHelpCircle } from 'react-icons/bi';
import { BiMessageDetail } from 'react-icons/bi';
import { GiBookmark } from 'react-icons/gi';
import { CiWallet } from 'react-icons/ci';
import MenuItem from './MenuItem';

const Sidebar = () => {
  // const { logout } = useContext(UserContext);
  return (
    <div className="bg-slate-800 flex flex-col justify-between w-[16%] min-h-screen pt-4 px-6 shadow-xl relative">
      <div>
        <div className="flex justify-center ">
          <div className="text-white">
            <GiBookmark size={30} />
          </div>
          <div className="hidden md:flex text-indigo-300 font-bold mx-2">
            OlaLeye
          </div>
        </div>

        <div className="text-start gap-2  my-4">
          <MenuItem menuTitle="dashboard" icon={<MdOutlineDashboard />} />
          <MenuItem menuTitle="course builder" icon={<SiCoursera />} />
          <MenuItem menuTitle="my courses" icon={<CiWallet />} />
          <MenuItem menuTitle="assignments" icon={<AiOutlineHome />} />
          <MenuItem menuTitle="schedule" icon={<AiOutlineSchedule />} />
          <MenuItem menuTitle="messages" icon={<BiMessageDetail />} />
          <MenuItem menuTitle="payments" icon={<MdPayment />} />
          <MenuItem menuTitle="settings" icon={<FiSettings />} />
        </div>
      </div>
      <div className="my-8">
        {' '}
        <MenuItem menuTitle="help" icon={<BiHelpCircle />} />
        {/* <div className="text-red-300" onClick={() => logout('user')}> */}
        <MenuItem menuTitle="logout" icon={<CiLogout />} />
      </div>
    </div>
    // </div>
  );
};

export default Sidebar;
