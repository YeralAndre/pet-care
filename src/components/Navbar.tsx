"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LoginButton, ShoppingCartButton, UserButton } from "./Buttons";
import ToggleTheme from "./ToggleTheme";
import Image from "next/image";

const Bar = ({ size }: { size: number }) => (
  <Image
    src="/img/bar.svg"
    className="dark:invert"
    alt="Bar"
    width={size}
    height={size}
  />
);

const X = ({ size }: { size: number }) => (
  <Image
    src="/img/x.svg"
    className="dark:invert"
    alt="X"
    width={size}
    height={size}
  />
);

export default function Navbar({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (theme: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(<Bar size={25} />);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const mobileMenu = () => {
      if (menuOpen) {
        setMenuIcon(<X size={25} />);
      } else {
        setMenuIcon(<Bar size={25} />);
      }
    };
    const auth = () => {
      const authenticated = localStorage.getItem("isAuthenticated");
      if (authenticated === "true") {
        setIsAuthenticated(true);
      }
    };
    mobileMenu();
    auth();
  }, [menuOpen, isAuthenticated]);
  return (
    <nav className="flex flex-row items-center justify-between px-[2rem] lg:px-[30rem] py-5 bg-white dark:bg-zinc-900">
      <div className="flex items-center w-[11rem]">
        <Link
          href="/"
          className="text-xl text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-500"
        >
          PetCare
        </Link>
      </div>
      <div className="hidden lg:flex gap-10">
        <Link
          href="/products"
          className="text-zinc-600 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-400"
        >
          Productos
        </Link>
        <Link
          href="/team"
          className="text-zinc-600 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-400"
        >
          Equipo
        </Link>
        <Link
          href="/contact"
          className="text-zinc-600 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-400"
        >
          Contacto
        </Link>
      </div>
      <div className="hidden lg:flex gap-5 w-[11rem] justify-end">
        <ToggleTheme theme={theme} setTheme={setTheme} />
        {isAuthenticated && <ShoppingCartButton />}
        {isAuthenticated ? <UserButton /> : <LoginButton />}
      </div>
      {/* Mobile dropdown */}
      <div className="lg:hidden flex gap-3">
        <ToggleTheme theme={theme} setTheme={setTheme} />
        <button
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuIcon}
        </button>
      </div>
      {menuOpen && (
        <div
          className={`lg:hidden absolute top-[4.25rem] left-0 w-full bg-white dark:bg-zinc-900 shadow-md border-b border-zinc-200 dark:border-zinc-800 items-center`}
        >
          <div className="px-6 py-3 space-y-2 flex flex-col w-full items-center">
            <Link
              href="/products"
              className="py-3 text-zinc-600 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-400 w-full text-start"
              onClick={() => setMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              href="/team"
              className="py-3 text-zinc-600 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-400 w-full text-start"
              onClick={() => setMenuOpen(false)}
            >
              Equipo
            </Link>
            <Link
              href="/contact"
              className="py-3 text-zinc-600 hover:text-emerald-500 dark:text-zinc-400 dark:hover:text-emerald-400 w-full text-start"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </Link>
            <div className="flex gap-3 w-[11rem] justify-center pb-1">
              {isAuthenticated && <ShoppingCartButton />}
              {isAuthenticated ? <UserButton /> : <LoginButton />}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
