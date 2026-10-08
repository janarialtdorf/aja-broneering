import { test, describe } from "node:test";
import assert from "node:assert";
import { supabase } from "../lib/supabase";

describe("Supabase Timeslot CRUD", () => {
  let createdId: string | number;

  test("GET timeslots", async () => {
    const { data, error } = await supabase.from("timeslot").select("*");

    assert.strictEqual(error, null);
    assert.ok(Array.isArray(data));
  });

  test("POST timeslot", async () => {
    const { data, error } = await supabase
      .from("timeslot")
      .insert([
        {
          start_time: new Date().toISOString(),
          end_time: new Date().toISOString(),
          type: 1,
        },
      ])
      .select();

    assert.strictEqual(error, null);
    assert.ok(data && data.length > 0);
    createdId = data[0].id;
  });

  test("DELETE timeslot", async () => {
    assert.ok(createdId);

    const { data, error } = await supabase
      .from("timeslot")
      .delete()
      .eq("id", createdId)
      .select();

    assert.strictEqual(error, null);
    assert.strictEqual(data?.[0]?.id, createdId);
  });
});
