"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

interface NextThemeProviderProps {
  children: React.ReactNode;
}

const NextThemeProvider = ({ children }: NextThemeProviderProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default NextThemeProvider;
