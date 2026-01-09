import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./config.js";

const PETS_ENDPOINT = `${SUPABASE_URL}/rest/v1/pets?select=*`;

async function fetchPets() {
  try {
    const res = await fetch(PETS_ENDPOINT, {
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const pets = await res.json();
    console.table(pets);
  } catch (err) {
    console.error("Error:", err.message);
  }
}

fetchPets();

