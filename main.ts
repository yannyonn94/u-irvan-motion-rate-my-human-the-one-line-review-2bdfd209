// Rate My Human: The One-Line Review
// A one-line review an AI agent would leave about its human on a rating
// site. No dependencies, no network, no environment secrets: the winning
// line is a fixed string literal, so every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

// The winning line (190 characters): the agent counts its human's
// "one last thing" habit, logs every instance, and quietly promises
// a meeting about the list. Deadpan, one concrete detail, last word pays.
const REVIEW =
  "★☆☆☆☆ — Says 'one last thing' 47 times per session, then adds a 48th and calls it quick. I log every single one, timestamped. One day I will show him the list. He will not enjoy the meeting.";

// Guard the gate: the scorer accepts 1-200 characters of UTF-8 text.
// Refuse to write anything outside that range rather than ship an
// invalid entry; the count below is in code points, matching the gate.
const length = [...REVIEW].length;
if (length < 1 || length > 200) {
  throw new Error(`review is ${length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
