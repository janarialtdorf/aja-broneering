"use client";

import { supabase } from "../../lib/supabase";

export default function TestPage() {
  async function testSupabase() {
    const { data, error } = await supabase.from("timeslot").select("*");

    console.log("Data:", data);
    console.log("Error:", error);
  }

  return (
    <main>
      <h1>Supabase Test</h1>

      <button onClick={testSupabase}>Test Supabase</button>
    </main>
  );
}
