"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AddToCardButton } from "./Buttons";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
}

export function ProductCard({ title, price, imageUrl }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="shadow-zinc-400 dark:shadow-zinc-950 transition-transform hover:scale-105 rounded-xl p-4 bg-white dark:bg-zinc-800 shadow-sm hover:shadow-md">
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
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <AddToCardButton />
      </div>
    </div>
  );
}
