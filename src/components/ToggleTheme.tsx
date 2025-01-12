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
      localStorage.setItem("theme", newTheme);
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("dark");
      setOldTheme(newTheme);
      localStorage.setItem("theme", newTheme);
    }
  };
  return (
    <button
      className="flex items-center justify-center px-2 hover:dark:bg-zinc-800 hover:bg-zinc-200 rounded-lg"
      onClick={() => toggleTheme()}
    >
      <Image
        src={oldTheme === "light" ? "/img/moon.svg" : "/img/sun.svg"}
        alt="ThemeIcon"
        width={22}
        height={22}
        className={`dark:invert cursor-pointer${
          className ? " " + className : ""
        }`}
      />
    </button>
  );
}
