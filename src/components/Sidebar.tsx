// components/Sidebar.tsx
"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-text p-2 focus:outline-none"
      >
        <FiMenu size={28} />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-[#37463873] bg-opacity-1 z-40"
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full w-50 md:w-64 bg-background-500 text-text z-50 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-300">
          <h2 className="text-lg font-bold font-sans">MENÚ</h2>
          <button onClick={() => setOpen(false)} className="text-text">
            <FiX size={24} />
          </button>
        </div>

        {/* Opciones del menú */}
        <nav className="flex flex-col font-bold p-4 space-y-4">
          <Link
            href="/"
            className="hover:text-accent text-text transition-colors"
            onClick={() => setOpen(false)}
          >
            INICIO
          </Link>
          <Link
            href="/products"
            className="hover:text-accent text-text transition-colors"
            onClick={() => setOpen(false)}
          >
            PRODUCTOS
          </Link>
          <Link
            href="/contacto"
            className="hover:text-accent text-text transition-colors"
            onClick={() => setOpen(false)}
          >
            CONTACTO
          </Link>
          <Link
            href="/quienes-somos"
            className="hover:text-accent text-text transition-colors"
            onClick={() => setOpen(false)}
          >
            QUIENES SOMOS
          </Link>
        </nav>
      </div>
    </>
  );
}
