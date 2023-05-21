import React from 'react';
import Image from 'next/image';
import SearchBox from './SearchBox';
interface TopPageProps {
  page: string;
  details: string;
  right: boolean;
}

function TopPage({ page, details, right }: TopPageProps) {
  return (
    <div className="bg-white  ">
      <div className="flex  py-3 px-8 justify-between align-center w-full mx-auto  ">
        <div>
          <div className="mb-1 font-semibold">{page}</div>
          <div>{details}</div>
        </div>
        <div>
          <SearchBox />
        </div>
        {right && (
          <div className="flex gap-2">
            <div className="flex flex-col">
              <span className="text-center">olaleye</span>{' '}
              <span className="text-sm font-thin">frontend </span>
            </div>
            <div className="rounded-full h-10 w-10">
              {' '}
              <Image
                alt="profile"
                src="/assets/006.jpeg"
                height={30}
                width={30}
                className="rounded-full h-10 w-20 object-cover"
              />{' '}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopPage;
