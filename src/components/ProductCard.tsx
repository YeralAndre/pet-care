"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { AddToCardButton } from "./Buttons";
import { createPortal } from "react-dom";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
}

export function ProductCard({ title, price, imageUrl }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  const [messagePosition, setMessagePosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleAddToCart = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      console.log(rect);
      setMessagePosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + rect.width / 2 + window.scrollX,
      });
    }
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000); // Ocultar después de 3 segundos
  };

  return (
    <div className="shadow-zinc-400 dark:shadow-zinc-950 transition-transform hover:-translate-y-1 rounded-xl p-4 bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md">
      <div className="flex justify-center">
        <Image
          src={imageUrl}
          alt={title}
          width={200}
          height={200}
          className="rounded dark:invert"
        />
      </div>
      <h2 className="my-4 text-lg font-medium dark:text-white">{title}</h2>
      <p className="text-emerald-500 dark:text-emerald-400 font-medium">
        ${price.toFixed(2)}
      </p>
      <div className="flex gap-3 items-center mt-5">
        <input
          type="number"
          className="w-20 h-10 text-center border dark:text-white bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-700 rounded"
          value={quantity}
          min={1}
          max={10}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <AddToCardButton onClick={handleAddToCart} ref={buttonRef} />
      </div>
      {showMessage &&
        createPortal(
          <div
            style={{
              position: "absolute",
              top: `${messagePosition.top + 10}px`,
              left: `${messagePosition.left - 50}px`,
              transform: "translateX(-50%)",
            }}
            className={`bg-emerald-500 text-white py-2 px-4 rounded shadow-lg mt-2`}
          >
            Producto añadido al carrito
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-zinc-200 dark:bg-emerald-500 rotate-45" />
          </div>,
          document.body
        )}
    </div>
  );
}
