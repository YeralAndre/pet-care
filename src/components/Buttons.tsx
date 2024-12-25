"use client";

export function LoginButton() {
  return (
    <button
      className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded transition-transform hover:scale-105"
      onClick={() => alert("Hello World!")}
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
