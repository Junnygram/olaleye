import React from 'react';
import Image from 'next/image';

interface WalletProps {
  title: string;
  amount: any;
  src: string;
}

export const WalletCard = ({ title, amount, src }: WalletProps) => {
  return (
    <div className="flex rounded-md w-full mx-2 md:py-2 px-2 bg-white gap-2 border-2 border-violet-600  align-center">
      <div className="rounded-full  w-10 py-1">
        {' '}
        <Image
          alt="profile"
          src={src}
          height={20}
          width={20}
          className="rounded-full h-10 w-20 object-cover "
        />{' '}
      </div>
      <div className="text-start gap-2">
        <div className="text-medium mb-0">{title}</div>
        <div className="text-xl font-thin">{amount}</div>
      </div>
    </div>
  );
};
