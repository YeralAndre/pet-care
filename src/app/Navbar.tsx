import Link from "next/link";
import { LoginButton } from "../components/Buttons";
import ToggleTheme from "../components/ToggleTheme";

export default function Navbar({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (theme: string) => void;
}) {
  return (
    <section className="grid grid-cols-3 px-[30rem] py-5 bg-white dark:bg-zinc-900">
      <div className="flex items-center">
        <Link
          href="/"
          className="text-xl font-semibold text-emerald-500 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-500"
        >
          PetCare
        </Link>
      </div>
      <div className="flex gap-10 items-center justify-center">
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
      <div className="flex gap-5 items-center justify-end">
        <ToggleTheme theme={theme} setTheme={setTheme} />
        <LoginButton />
      </div>
    </section>
  );
}
