export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  isOvernight?: boolean;
}

export interface Shift {
  id: string;
  dayDateStr: string; // e.g. "05.11.2026"
  text: string;
}

export interface DayPreference {
  dateStr: string;       // e.g. "02.11.2026"
  dayName: string;       // e.g. "esmaspäev"
  availableFrom: string;
  availableTo: string;
  isCompleted: boolean;
  needsBreak: boolean;
  comment: string;
}