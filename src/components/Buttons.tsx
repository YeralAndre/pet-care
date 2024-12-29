"use client";

import Auth from "@/lib/Auth";
import Image from "next/image";

export function LoginButton({ className }: { className?: string }) {
  return (
    <button
      className={`bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded${
        className ? " " + className : ""
      }`}
      onClick={Auth}
    >
      Iniciar sesión
    </button>
  );
}

export function ReserveButton() {
  return (
    <button
      className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-transform hover:scale-105 text-lg"
      onClick={() => alert("Hello World!")}
    >
      Reservar cita
    </button>
  );
}

export function AddToCardButton() {
  return (
    <button
      className="bg-emerald-500 hover:bg-emerald-600 w-full h-10 flex items-center justify-center text-white px-6 py-3 rounded-lg transition-transform hover:scale-105 text-sm"
      onClick={() => alert("Hello World!")}
    >
      Agregar
    </button>
  );
}

export function UserButton() {
  return (
    <button
      className="bg-emerald-500 hover:bg-emerald-600 flex w-12 h-10 items-center justify-center text-white rounded-lg transition-transform hover:scale-105 text-sm"
      onClick={() => alert("Logged!")}
    >
      <Image
        src="/img/user.svg"
        alt="User"
        className="invert"
        width={16}
        height={16}
      />
    </button>
  );
}

export function ShoppingCartButton() {
  return (
    <button
      className="flex items-center justify-center px-2 hover:dark:bg-zinc-800 hover:bg-zinc-200 rounded-lg"
      onClick={() => alert("Hello World!")}
    >
      <Image
        src="/img/shopping_cart.svg"
        alt="ShoppingCart"
        className="dark:invert"
        width={16}
        height={16}
      />
    </button>
  );
}
