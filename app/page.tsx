'use client';

import { useState } from 'react';

// Nädalapäevad ja kellaajad
const DAYS = ['Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede'];
const TIMES = ['09:00 - 12:00', '12:00 - 15:00', '15:00 - 18:00', '18:00 - 21:00'];

export default function HomePage() {
  // Salvestame valitud ajad (nt: "Esmaspäev-09:00 - 12:00")
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Aegade valimine ja eemaldamine klõpsates
  const toggleSlot = (day: string, time: string) => {
    const slotKey = `${day}-${time}`;
    if (selectedSlots.includes(slotKey)) {
      setSelectedSlots(selectedSlots.filter((s) => s !== slotKey));
    } else {
      setSelectedSlots([...selectedSlots, slotKey]);
    }
  };

  // Vormi saatmine
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow border border-gray-200 my-8">
      <h1 className="text-2xl font-bold mb-2 text-gray-800 text-center">
        Aja Broneerimine
      </h1>
      <p className="text-gray-600 mb-6 text-sm text-center">
        Vali tabelist sobivad kellaajad ja vajuta "Salvesta valikud".
      </p>

      {isSubmitted ? (
        /* Kinnituse teade pärast salvestamist */
        <div className="bg-green-50 border border-green-400 text-green-800 p-4 rounded text-center">
          <h2 className="font-bold text-lg mb-2">Valikud salvestatud!</h2>
          <p className="text-sm mb-2">Valisid kokku <strong>{selectedSlots.length}</strong> aega.</p>
          
          {selectedSlots.length > 0 && (
            <ul className="text-xs bg-white p-3 rounded border border-green-200 inline-block text-left mb-3">
              {selectedSlots.map((slot) => (
                <li key={slot}>• {slot.replace('-', ' kell ')}</li>
              ))}
            </ul>
          )}

          {comment && (
            <p className="text-xs italic mb-4">Märkus: "{comment}"</p>
          )}

          <div>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-4 py-2 bg-green-700 text-white text-xs font-bold rounded hover:bg-green-800 transition"
            >
              Muuda valikuid
            </button>
          </div>
        </div>
      ) : (
        /* Aegade valimise vorm */
        <form onSubmit={handleSubmit}>
          {/* Lihtne tabel */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="border border-gray-300 p-2 text-left">Kellaaeg</th>
                  {DAYS.map((day) => (
                    <th key={day} className="border border-gray-300 p-2 text-center">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TIMES.map((time) => (
                  <tr key={time}>
                    <td className="border border-gray-300 p-2 font-semibold bg-gray-50 text-gray-600 text-xs">
                      {time}
                    </td>
                    {DAYS.map((day) => {
                      const slotKey = `${day}-${time}`;
                      const isSelected = selectedSlots.includes(slotKey);
                      return (
                        <td
                          key={slotKey}
                          onClick={() => toggleSlot(day, time)}
                          className={`border border-gray-300 p-3 text-center cursor-pointer text-xs font-medium select-none transition-colors ${
                            isSelected
                              ? 'bg-blue-600 text-white'
                              : 'hover:bg-blue-50 text-gray-400'
                          }`}
                        >
                          {isSelected ? '✓ Valitud' : 'Vali'}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Lisakommentaar */}
          <div className="mb-6">
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Märkus või kommentaar (valikuline):
            </label>
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Nt. Saan tulla alates kella 10:00-st..."
              className="w-full border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Salvestamise nupp */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded text-sm transition"
          >
            Salvesta valikud
          </button>
        </form>
      )}
    </main>
  );
}