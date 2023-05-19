import React from 'react';

interface NoticePageProps {
  page: string;
  details: string;
  right: boolean;
  clickFunction: any;
}

function NoticePage({ page, details, right }: NoticePageProps) {
  return (
    <div className="bg-white">
      <div className="flex justify-between align-center w-[90%] mx-auto py-3">
        <div>
          <div className="font-semibold mb--1">{page}</div> <div>{details}</div>
        </div>
        {/* {right && (
            <Button
                bgColor="brand.100"
                color="white"
                px="2rem"
                onClick={clickFunction}
            >
                Add Services
            </Button>
        )} */}
      </div>
    </div>
  );
}

export default NoticePage;
