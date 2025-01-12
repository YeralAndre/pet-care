"use client";

import Image from "next/image";
import { Ref, useEffect, useRef, useState } from "react";

export function LoginButton({ className }: { className?: string }) {
  return (
    <button
      className={`bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded${
        className ? " " + className : ""
      }`}
      onClick={() => alert("Logged!")}
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

export function AddToCardButton(props?: {
  onClick?: () => void;
  ref?: Ref<HTMLButtonElement>;
}) {
  return (
    <button
      className="bg-emerald-500 hover:bg-emerald-600 w-full h-10 flex items-center justify-center text-white px-6 py-3 rounded-lg transition-transform hover:scale-105 text-sm"
      onClick={props?.onClick}
      ref={props?.ref as Ref<HTMLButtonElement>}
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cartItems, setCartItems] = useState(0);
  const [showMessage, setShowMessage] = useState(true);
  const [cartMessage, setCartMessage] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const cartButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const verifyCartItems = () => {
      const storedCartItems = localStorage.getItem("cartItems");
      if (storedCartItems) {
        setCartItems(parseInt(JSON.parse(storedCartItems)));
        console.log(storedCartItems);
        if (parseInt(storedCartItems) > 0) {
          setShowMessage(false);
        }
      }
    };
    verifyCartItems();
  }, []);

  const showCartMessage = () => {
    setCartMessage(true);
    if (cartButtonRef.current) {
      const rect = cartButtonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + rect.width / 2 + window.scrollX,
      });
    }
    setTimeout(() => setCartMessage(false), 3000);
  };
  return (
    <>
      <button
        className="flex items-center justify-center px-2 hover:dark:bg-zinc-800 hover:bg-zinc-200 rounded-lg"
        onClick={showMessage ? showCartMessage : () => {}}
        ref={cartButtonRef}
      >
        <Image
          src="/img/shopping_cart.svg"
          alt="ShoppingCart"
          className="dark:invert"
          width={16}
          height={16}
        />
      </button>
      {cartMessage && (
        <div
          style={{
            position: "absolute",
            top: `${position.top + 10}px`,
            left: `${position.left}px`,
            transform: "translateX(-50%)",
          }}
          className={`text-white py-2 px-4 bg-emerald-500 rounded-md shadow-md`}
        >
          ¡No hay items en el carrito!
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-zinc-200 dark:bg-emerald-500 rotate-45" />
        </div>
      )}
    </>
  );
}
