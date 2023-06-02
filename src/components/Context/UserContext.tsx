import React, { ReactNode, createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

export const UserContext = createContext<any>(null);
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>();
  const router = useRouter();
  const logout = (tokenValue: any, userDetails: any, path?: any) => {
    Cookies.remove(tokenValue);
    Cookies.remove(userDetails);
    router.push(path || '/login');
  };

  // const logout = (tokenValue: any, path?: any) => {
  //   tokenValue.map((x: any) => Cookies.remove(x));
  // }
  const contextValue = { user, setUser, logout };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
