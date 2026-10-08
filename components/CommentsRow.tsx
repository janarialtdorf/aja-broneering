'use client';

import React from 'react';
import { DayPreference } from '@/types/schedule';

interface CommentsRowProps {
  days: DayPreference[];
  onCommentChange: (dateStr: string, comment: string) => void;
}

export const CommentsRow: React.FC<CommentsRowProps> = ({ days, onCommentChange }) => {
  return (
    <div className="grid grid-cols-6 gap-2 items-center bg-neutral-800 text-white p-2 rounded-sm my-4 text-xs">
      <div className="col-span-1 font-bold px-2">Teie kommentaar</div>
      {days.map((day) => (
        <div key={day.dateStr} className="col-span-1">
          <input
            type="text"
            placeholder="Lisage sõnum graafiku koostajatele..."
            value={day.comment}
            onChange={(e) => onCommentChange(day.dateStr, e.target.value)}
            className="w-full bg-neutral-700 text-white text-[10px] p-1.5 rounded border border-neutral-600 focus:outline-none focus:border-neutral-400 placeholder-neutral-400"
          />
        </div>
      ))}
    </div>
  );
};