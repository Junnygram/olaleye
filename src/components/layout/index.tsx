import Header from '../header';
import { useRouter } from 'next/router';
import React from 'react';
import Sidebar from '../Sidebar';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const noNav =
    router.asPath.startsWith('/login') || router.asPath.startsWith('/register');

  return (
    <>
      {noNav ? (
        <div className="ml-auto">{children}</div>
      ) : (
        <div className="flex bg-[#f6f7f8]">
          <Sidebar />
          <div className="w-full ml-[12rem] pl-3 relative min-h-full">
            <Header />
            <div className="w-full mb-9 ">
              <div>{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
