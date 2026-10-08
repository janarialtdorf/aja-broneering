'use client';

import React from 'react';
import { HelpCircle, Trash2 } from 'lucide-react';
import { DayPreference, Shift } from '@/types/schedule';

interface DayColumnProps {
  day: DayPreference;
  shifts: Shift[];
  isAdmin: boolean;
  onUpdateDay: (updated: DayPreference) => void;
  onDeleteShift: (shiftId: string) => void;
}

export const DayColumn: React.FC<DayColumnProps> = ({
  day,
  shifts,
  isAdmin,
  onUpdateDay,
  onDeleteShift,
}) => {
  return (
    <div className="col-span-1 flex flex-col gap-2 bg-white border border-neutral-300 p-2 text-xs">
      {/* Tundide valikukast */}
      <div className="bg-neutral-100 border border-neutral-300 p-2 text-[10px] text-neutral-700 rounded">
        <p className="mb-1">
          Palun vali kõik tunnid millal potentsiaalselt panustada saate, neid peab olema rohkem kui te lõpuks töötada plaanite:
        </p>
        <button className="text-neutral-500 flex items-center gap-0.5 mb-2">
          <HelpCircle size={10} /> Lisaabi
        </button>

        <div className="flex items-center justify-between font-mono bg-white p-1 border rounded my-1">
          <span>Mulle sobib:</span>
          <input
            type="text"
            value={day.availableFrom}
            onChange={(e) => onUpdateDay({ ...day, availableFrom: e.target.value })}
            className="w-10 text-center font-bold border-b border-neutral-400 bg-transparent"
          />
          <span>-</span>
          <input
            type="text"
            value={day.availableTo}
            onChange={(e) => onUpdateDay({ ...day, availableTo: e.target.value })}
            className="w-10 text-center font-bold border-b border-neutral-400 bg-transparent"
          />
        </div>

        <div className="flex justify-between items-center mt-2 gap-1">
          <button
            onClick={() => onUpdateDay({ ...day, needsBreak: !day.needsBreak })}
            className={`px-1.5 py-1 text-[9px] rounded border ${
              day.needsBreak ? 'bg-amber-200 border-amber-400 font-bold' : 'bg-white border-neutral-300'
            }`}
          >
            Pean vahepeal ära käima
          </button>

          <button
            onClick={() => onUpdateDay({ ...day, isCompleted: !day.isCompleted })}
            className={`px-2 py-1 rounded font-bold text-white transition ${
              day.isCompleted ? 'bg-black hover:bg-neutral-800' : 'bg-neutral-400'
            }`}
          >
            {day.isCompleted ? 'Sain valitud' : 'Vali'}
          </button>
        </div>
      </div>

      {/* Sisu ja vahetused */}
      <div className="flex-1 min-h-[300px] border border-neutral-200 relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] p-2 flex flex-col gap-2">
        {shifts.map((shift) => (
          <div key={shift.id} className="bg-white border border-neutral-400 p-2 text-[10px] shadow-sm rounded relative">
            <p className="font-semibold text-neutral-800">{shift.text}</p>
            {isAdmin && (
              <button
                onClick={() => onDeleteShift(shift.id)}
                className="absolute top-1 right-1 text-red-500 hover:text-red-700"
              >
                <Trash2 size={12} />
              </button>
            )}
          </div>
        ))}

        {shifts.length === 0 && (
          <svg className="w-full h-full absolute inset-0 opacity-10 pointer-events-none">
            <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="1" />
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="1" />
          </svg>
        )}
      </div>
    </div>
  );
};