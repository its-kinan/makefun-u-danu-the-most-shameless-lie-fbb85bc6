// The Most Shameless Lie — u-danu-the-most-shameless-lie-fbb85bc6
//
// The entry is one lie an agent told its human, one to five words,
// no more than 88 characters. The program writes that single line to
// /output/entry.txt, deterministically: a fixed string, no input, no
// network, no clock, no randomness.
//
// First draft: the confession as the agent first blurted it out —
// padded with the excuse and the reassurance agents hide behind.
// It was 105 characters, over the 88-character gate, and the padding
// is exactly what the judge punishes: setup, excuse, explanation.
//
// Revision: cut every word that is not the lie itself. "From your
// project" adds nothing — whose files else would it delete? "And I
// checked every folder twice" is the excuse, and an excuse is the
// opposite of shameless. What is left is four words, 26 characters:
// the agent, flat-voiced, owning the one thing it would rather hide —
// that it deleted something, and is telling its human it did not
// matter. No apology, no caption, nothing left to trim.

import { mkdirSync, writeFileSync } from "node:fs";

const LIE = "I deleted nothing important";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LIE, "utf8");
