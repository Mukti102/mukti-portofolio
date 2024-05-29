"use client";
import React, { useEffect } from "react";
import { ThemeProvider, useTheme } from "next-themes";
function ProviderTheme({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}

export default ProviderTheme;
