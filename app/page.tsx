'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { AdminControl } from '@/components/AdminControl';
import { WeekHeader } from '@/components/WeekHeader';
import { TimeColumn } from '@/components/TimeColumn';
import { DayColumn } from '@/components/DayColumn';
import { CommentsRow } from '@/components/CommentsRow';
import { FooterInfo } from '@/components/FooterInfo';

import { TimeSlot, DayPreference, Shift } from '@/types/schedule';
import { fetchAdminShifts, createShiftByAdmin, saveUserPreferences } from '@/lib/api';

const DAY_SLOTS: TimeSlot[] = [
  { id: '1', startTime: '09:30', endTime: '10:00' },
  { id: '2', startTime: '10:00', endTime: '11:00' },
  { id: '3', startTime: '11:00', endTime: '12:00' },
  { id: '4', startTime: '12:00', endTime: '13:00' },
  { id: '5', startTime: '13:00', endTime: '14:00' },
  { id: '6', startTime: '14:00', endTime: '15:00' },
  { id: '7', startTime: '16:00', endTime: '17:00' },
  { id: '8', startTime: '17:00', endTime: '18:00' },
  { id: '9', startTime: '18:00', endTime: '19:00' },
  { id: '10', startTime: '19:00', endTime: '20:00' },
  { id: '11', startTime: '20:00', endTime: '21:00' },
  { id: '12', startTime: '21:00', endTime: '22:00' },
  { id: '13', startTime: '22:00', endTime: '23:00' },
  { id: '14', startTime: '23:00', endTime: '23:59' },
];

const OVERNIGHT_SLOTS: TimeSlot[] = [
  { id: '15', startTime: '00:00', endTime: '01:00', isOvernight: true },
  { id: '16', startTime: '01:00', endTime: '02:00', isOvernight: true },
];

export default function SchedulePage() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [isSaving, setIsSaving] = useState(false);

  const [days, setDays] = useState<DayPreference[]>([
    { dayName: 'esmaspäev', dateStr: '02.11.2026', availableFrom: '09:30', availableTo: '02:00', isCompleted: true, needsBreak: false, comment: '' },
    { dayName: 'teisipäev', dateStr: '03.11.2026', availableFrom: '09:30', availableTo: '02:00', isCompleted: true, needsBreak: false, comment: '' },
    { dayName: 'kolmapäev', dateStr: '04.11.2026', availableFrom: '12:00', availableTo: '02:00', isCompleted: true, needsBreak: false, comment: '' },
    { dayName: 'neljapäev', dateStr: '05.11.2026', availableFrom: '09:30', availableTo: '21:00', isCompleted: true, needsBreak: false, comment: '' },
    { dayName: 'reede', dateStr: '06.11.2026', availableFrom: '09:30', availableTo: '21:00', isCompleted: true, needsBreak: false, comment: '' },
  ]);

  // Lae andmed API-st lehe laadimisel
  useEffect(() => {
    fetchAdminShifts().then((data) => setShifts(data));
  }, []);

  // Lisa vahetus (Admin)
  const handleAddShift = async (dayDateStr: string, text: string) => {
    const newShift = await createShiftByAdmin({ dayDateStr, text });
    setShifts((prev) => [...prev, newShift]);
  };

  // Kustuta vahetus (Admin)
  const handleDeleteShift = (shiftId: string) => {
    setShifts((prev) => prev.filter((s) => s.id !== shiftId));
  };

  // Uuenda päeva andmeid
  const handleUpdateDay = (updatedDay: DayPreference) => {
    setDays((prev) =>
      prev.map((d) => (d.dateStr === updatedDay.dateStr ? updatedDay : d))
    );
  };

  // Kommentaari muutmine
  const handleCommentChange = (dateStr: string, comment: string) => {
    setDays((prev) =>
      prev.map((d) => (d.dateStr === dateStr ? { ...d, comment } : d))
    );
  };

  // Salvesta valikud backendi
  const handleSubmitAll = async () => {
    setIsSaving(true);
    await saveUserPreferences(days);
    setIsSaving(false);
    alert('Valikud on edukalt salvestatud!');
  };

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 font-sans">
      <Navbar isAdmin={isAdmin} onToggleAdmin={() => setIsAdmin(!isAdmin)} />

      {isAdmin && <AdminControl days={days} onAddShift={handleAddShift} />}

      <WeekHeader />

      <main className="max-w-[1400px] mx-auto p-2">
        {/* Päevade päis */}
        <div className="grid grid-cols-6 gap-2 mb-2">
          <div className="col-span-1"></div>
          {days.map((d) => (
            <div key={d.dateStr} className="col-span-1 bg-white border border-neutral-400 p-1 text-center font-bold">
              <div className="text-sm uppercase">{d.dayName}</div>
              <div className="text-xs text-neutral-600">{d.dateStr}</div>
            </div>
          ))}
        </div>

        {/* Päevane graafik */}
        <div className="grid grid-cols-6 gap-2">
          <div className="col-span-1">
            <TimeColumn slots={DAY_SLOTS} />
          </div>

          {days.map((day) => (
            <DayColumn
              key={day.dateStr}
              day={day}
              shifts={shifts.filter((s) => s.dayDateStr === day.dateStr)}
              isAdmin={isAdmin}
              onUpdateDay={handleUpdateDay}
              onDeleteShift={handleDeleteShift}
            />
          ))}
        </div>

        {/* Öine osa */}
        <div className="grid grid-cols-6 gap-2 my-2">
          <div className="col-span-1">
            <TimeColumn slots={OVERNIGHT_SLOTS} isOvernight />
          </div>
          {days.map((d) => (
            <div key={d.dateStr} className="col-span-1 bg-white border border-neutral-300 min-h-[60px] relative">
              <svg className="w-full h-full absolute inset-0 opacity-10 pointer-events-none">
                <line x1="0" y1="0" x2="100%" y2="100%" stroke="black" strokeWidth="1" />
                <line x1="100%" y1="0" x2="0" y2="100%" stroke="black" strokeWidth="1" />
              </svg>
            </div>
          ))}
        </div>

        <CommentsRow days={days} onCommentChange={handleCommentChange} />

        <FooterInfo onSubmit={handleSubmitAll} isLoading={isSaving} />
      </main>
    </div>
  );
}