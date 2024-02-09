// components/MyContext.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface MyContextProps {
  someState: string;
  setSomeState: React.Dispatch<React.SetStateAction<string>>;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [someState, setSomeState] = useState("initial value");

  const contextValue: MyContextProps = {
    someState,
    setSomeState,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export const useMyContext = (): MyContextProps => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
