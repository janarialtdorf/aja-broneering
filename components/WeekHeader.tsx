'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const WeekHeader: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto p-3 grid grid-cols-1 md:grid-cols-12 gap-3 items-center border-b border-neutral-300 bg-white text-xs">
      {/* Pisike kalendrimoodul */}
      <div className="md:col-span-2 flex justify-center">
        <div className="border border-neutral-300 text-[9px] p-1.5 w-36 bg-neutral-50 rounded">
          <div className="text-center font-bold text-neutral-500 mb-1">2026</div>
          <div className="flex justify-between font-bold border-b pb-0.5 mb-1 text-[8px]">
            <span>oktoober</span>
            <span>november</span>
          </div>
          <div className="grid grid-cols-7 gap-0.5 text-center text-[8px] font-semibold text-neutral-400">
            <span>E</span><span>T</span><span>K</span><span>N</span><span>R</span><span>L</span><span>P</span>
          </div>
          <div className="grid grid-cols-7 gap-0.5 text-center text-[8px] text-neutral-600 mt-1">
            <span className="text-neutral-300">27</span><span className="text-neutral-300">28</span><span className="text-neutral-300">29</span><span className="text-neutral-300">30</span><span className="text-neutral-300">31</span>
            <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span>
          </div>
        </div>
      </div>

      {/* Eelmine nädal */}
      <div className="md:col-span-3 text-center">
        <button className="flex items-center justify-center gap-1 font-bold text-sm mx-auto hover:text-neutral-600">
          <ChevronLeft size={18} /> Näita eelmist nädalat
        </button>
        <div className="text-neutral-500 font-semibold mt-1">28.10.2026 - 01.11.2026</div>
      </div>

      {/* Info kast */}
      <div className="md:col-span-4 text-center bg-neutral-100 p-2 border border-neutral-200 rounded">
        <p className="font-semibold">Olete valinud <span className="font-bold">80 aega</span> 96-st võimalikust 5 eri päeval!</p>
        <p className="text-neutral-600 text-[11px]">Olete PÖFFi aktiivsemate vabatahtlike seas. Tubli olete!</p>
      </div>

      {/* Järgmine nädal */}
      <div className="md:col-span-3 text-center">
        <button className="flex items-center justify-center gap-1 font-bold text-sm mx-auto hover:text-neutral-600">
          Näita järgmist nädalat <ChevronRight size={18} />
        </button>
        <div className="text-neutral-500 font-semibold mt-1">07.11.2026 - PÖFFi lõpuni</div>
      </div>
    </div>
  );
};