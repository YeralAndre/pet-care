"use client";

import Image from "next/image";

export default function ToggleTheme({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (theme: string) => void;
}) {
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.remove("white");
      document.documentElement.classList.add("white");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <Image
      src="/img/sun.svg"
      alt="Sun"
      width={30}
      height={30}
      className="dark:invert cursor-pointer"
      onClick={() => {
        toggleTheme();
      }}
    />
  );
}
