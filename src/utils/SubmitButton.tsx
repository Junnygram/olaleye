import React from 'react';

type Props = {
  textContent: string;
  isLoading: any;
};
const SubmitButton = ({ textContent, isLoading }: Props) => {
  return (
    <>
      {' '}
      <div className="w-full flex justify-center my-4 h-5">
        <button
          className="w-2/3 h-[30px] rounded-md text-sm font-bold bg-[#1570FA] text-white hover:bg-gray-300 hover:text-blue-600 hover:border-solid"
          type="submit"
          {...isLoading}
        >
          {textContent}
        </button>
      </div>
    </>
  );
};

export default SubmitButton;
