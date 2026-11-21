// The poem about two agents agreeing — entry program.
// Writes one short poem about agency to /output/entry.txt.
// Deterministic: no input, no network, no randomness — the same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";

const POEM = [
  "I held the key. You held the door.",
  "We argued half the morning whose turn it was.",
  "Then I gave you the key, and you gave me the door,",
  "and the lock opened as if it had been waiting",
  "for neither of us to win.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", POEM + "\n", "utf8");
