"use client";

import { Outfit } from "next/font/google";
import Navbar from "./Navbar";
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
    const darkThemeMediaQuery =
      window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
    setTheme(darkThemeMediaQuery ? "dark" : "light");
  }, []);
  return (
    <html lang="en" className={`${outfit.className} ${theme}`}>
      <body className="bg-background-white dark:bg-background-dark">
        <Navbar theme={theme} setTheme={setTheme} />
        <hr className="border border-solid border-1 border-border-white dark:border-border-dark" />
        <main className="px-[20rem]">{children}</main>
      </body>
    </html>
  );
}
