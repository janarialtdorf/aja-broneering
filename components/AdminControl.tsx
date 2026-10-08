'use client';

import React, { useState } from 'react';
import { Plus, ShieldAlert } from 'lucide-react';
import { DayPreference } from '@/types/schedule';

interface AdminControlProps {
  days: DayPreference[];
  onAddShift: (dayDateStr: string, text: string) => void;
}

export const AdminControl: React.FC<AdminControlProps> = ({ days, onAddShift }) => {
  const [selectedDate, setSelectedDate] = useState(days[0]?.dateStr || '');
  const [shiftText, setShiftText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shiftText.trim()) return;
    onAddShift(selectedDate, shiftText);
    setShiftText('');
  };

  return (
    <div className="bg-amber-50 border-b border-amber-300 p-3 px-6 text-xs">
      <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-3">
        <div className="font-bold text-amber-900 flex items-center gap-1">
          <ShieldAlert size={16} /> Admini paneel: Lisa vahetus/märge
        </div>

        <select
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border border-amber-400 rounded px-2 py-1 bg-white"
        >
          {days.map((d) => (
            <option key={d.dateStr} value={d.dateStr}>
              {d.dayName} ({d.dateStr})
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Sisesta vahetuse kirjeldus..."
          value={shiftText}
          onChange={(e) => setShiftText(e.target.value)}
          className="border border-amber-400 rounded px-2 py-1 flex-1 min-w-[200px]"
        />

        <button
          type="submit"
          className="bg-amber-700 hover:bg-amber-800 text-white font-semibold px-3 py-1 rounded flex items-center gap-1"
        >
          <Plus size={14} /> Lisa vahetus API-sse
        </button>
      </form>
    </div>
  );
};