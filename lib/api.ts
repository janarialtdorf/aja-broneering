import { Shift, DayPreference } from '@/types/schedule';

// PÄRING 1: Lae süsteemist admini poolt lisatud vahetused
export async function fetchAdminShifts(): Promise<Shift[]> {
  // Asenda see hiljem päris API päringuga:
  // const res = await fetch('https://sinu-api.ee/v1/shifts');
  // return res.json();

  return [
    {
      id: 's1',
      dayDateStr: '05.11.2026',
      text: 'Vahetus on lisatud peale teie algset vaatamist.',
    },
    {
      id: 's2',
      dayDateStr: '05.11.2026',
      text: 'Vahetus on lisatud peale teie algset vaatamist. Kui saate osaleda palun valige see sammuti.',
    },
  ];
}

// PÄRING 2: Lisa adminina uus vahetus süsteemi
export async function createShiftByAdmin(shiftData: Omit<Shift, 'id'>): Promise<Shift> {
  // const res = await fetch('https://sinu-api.ee/v1/shifts', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(shiftData),
  // });
  // return res.json();

  return {
    id: Date.now().toString(),
    ...shiftData,
  };
}

// PÄRING 3: Salvesta kasutaja broneeringud ja valikud
export async function saveUserPreferences(preferences: DayPreference[]): Promise<boolean> {
  // const res = await fetch('https://sinu-api.ee/v1/user/preferences', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ preferences }),
  // });
  // return res.ok;

  console.log('Salvestan valikud backendi:', preferences);
  return true;
}