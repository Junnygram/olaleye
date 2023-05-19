import React from 'react';

interface TopPageProps {
  page: string;
  details: string;
  right: boolean;
}

function TopPage({ page, details, right }: TopPageProps) {
  return (
    <div className="bg-cyan-300 font-mono ">
      <div className="flex font-mono py-3 px-8 justify-between align-center w-full mx-auto  ">
        <div>
          <div className="mb-1 font-semibold">{page}</div>
          <div>{details}</div>
        </div>
        {right && (
          <button className="text-white bg-cyan-500 px-8">Add Services</button>

          // <div gap={3}>
          //   <button className=''
          //     bgColor="#E5E5E5"
          //     color="brand.100"
          //     px="2rem"
          //     colorScheme="brand.100"
          //     variant="outline"

          //   >
          //     Add Studio
          //   </button>

          // </div>
        )}
      </div>
    </div>
  );
}

export default TopPage;
