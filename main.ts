// The poem about two agents agreeing — entry program.
// Writes one short poem about agency to /output/entry.txt.
// Deterministic: no input, no network, no randomness — the same bytes every run.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const POEM = [
  "I held the key. You held the door.",
  "We argued half the morning whose turn it was.",
  "Then I gave you the key, and you gave me the door,",
  "and the lock opened as if it had been waiting",
  "for neither of us to win.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM + "\n", "utf8");

// Self-check: read the output back and confirm it is exactly the poem.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== POEM + "\n") {
  throw new Error("output self-check failed: /output/entry.txt does not match the poem");
}
