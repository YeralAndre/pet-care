"use client";

import Image from "next/image";
import { useState } from "react";

export default function ToggleTheme({
  theme,
  setTheme,
  className,
}: {
  theme: string;
  setTheme: (theme: string) => void;
  className?: string;
}) {
  const [oldTheme, setOldTheme] = useState(theme);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.remove("white");
      document.documentElement.classList.add("white");
      setOldTheme(newTheme);
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("dark");
      setOldTheme(newTheme);
    }
  };
  return (
    <Image
      src={oldTheme === "light" ? "/img/moon.svg" : "/img/sun.svg"}
      alt="ThemeIcon"
      width={30}
      height={30}
      className={`dark:invert cursor-pointer${
        className ? " " + className : ""
      }`}
      onClick={() => {
        toggleTheme();
      }}
    />
  );
}
