"use client";

import { NextUIProvider } from "@nextui-org/react";
import { AppContextProvider } from "../context/context";
import ThemeContextProvider from "../context/ThemeContextProvider";
import ActiveSectionContextProvider from "../context/ActiveSectionContextProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <AppContextProvider>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </AppContextProvider>
    </NextUIProvider>
  );
}
