'use client';

import React from 'react';

interface NavbarProps {
  isAdmin: boolean;
  onToggleAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isAdmin, onToggleAdmin }) => {
  return (
    <>
      {/* Demo lüliti režiimide vahel */}
      <div className="bg-neutral-900 text-white px-4 py-2 flex justify-between items-center text-xs">
        <span className="font-bold tracking-wider">PÖFF BRONEERIMISSÜSTEEM</span>
        <button
          onClick={onToggleAdmin}
          className="bg-neutral-800 hover:bg-neutral-700 text-amber-400 border border-neutral-600 px-3 py-1 rounded"
        >
          Lülita režiimi: {isAdmin ? 'KASUTAJA' : 'ADMIN'}
        </button>
      </div>

      {/* PÖFF päis */}
      <header className="bg-black text-white px-4 py-2 flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter">PÖFF 30</span>
            <span className="text-[10px] uppercase tracking-widest text-neutral-400 border-l border-neutral-700 pl-2">
              6-22 NOV 2026
            </span>
          </div>
          <div className="bg-blue-600 text-yellow-300 font-bold px-2 py-0.5 text-[10px] rounded">
            Standing with <span className="underline">UKRAINE</span>
          </div>
        </div>

        <nav className="flex gap-3 text-[11px] font-medium text-neutral-300">
          <a href="#" className="hover:text-white">UUDISED</a>
          <a href="#" className="hover:text-white">ESITA OMA FILM</a>
          <a href="#" className="hover:text-white">FILMID</a>
          <a href="#" className="hover:text-white">PASSID</a>
          <a href="#" className="hover:text-white font-bold text-white">MINU PÖFF</a>
          <span className="text-neutral-600">|</span>
          <span className="text-white font-bold">ET</span>
        </nav>
      </header>
    </>
  );
};