"use client";

import { Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { useEffect, useState } from "react";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    const setDefaultTheme = () => {
      const darkThemeMediaQuery =
        window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
      setTheme(darkThemeMediaQuery ? "dark" : "light");
      localStorage.setItem("theme", darkThemeMediaQuery ? "dark" : "light");
    };
    const verifyTheme = () => {
      const theme = localStorage.getItem("theme");
      if (theme) {
        setTheme(theme);
      }
    };
    setDefaultTheme();
    verifyTheme();
  }, []);
  return (
    <html lang="en" className={`${outfit.className} ${theme}`}>
      <body className="bg-background-white dark:bg-background-dark" suppressHydrationWarning>
        <Navbar theme={theme} setTheme={setTheme} />
        <hr className="border border-solid border-1 border-border-white dark:border-border-dark" />
        <main className="lg:px-[30rem] px-10">{children}</main>
      </body>
    </html>
  );
}
