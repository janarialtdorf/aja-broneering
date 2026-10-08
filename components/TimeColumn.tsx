'use client';

import React from 'react';
import { TimeSlot } from '@/types/schedule';

interface TimeColumnProps {
  slots: TimeSlot[];
  isOvernight?: boolean;
}

export const TimeColumn: React.FC<TimeColumnProps> = ({ slots, isOvernight }) => {
  return (
    <div className="flex flex-col gap-1">
      {slots.map((slot) => (
        <div
          key={slot.id}
          className={`border border-neutral-400 text-center font-mono font-bold text-xs py-1.5 rounded-sm ${
            isOvernight ? 'bg-neutral-300' : 'bg-neutral-200'
          }`}
        >
          <div>{slot.startTime} - {slot.endTime}</div>
          {isOvernight && (
            <div className="text-[8px] font-normal text-neutral-600">järgmise päeva öö</div>
          )}
        </div>
      ))}
    </div>
  );
};