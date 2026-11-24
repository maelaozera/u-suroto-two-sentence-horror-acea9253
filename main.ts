import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Two-sentence horror story for the Two-Sentence Horror bounty.
// Sentence one sets the scene; sentence two reframes it: the man in the
// corner was never a child's imagination, and he only visits when she is
// away, waiting by her empty bed.
const FIRST_SENTENCE =
  "I installed a camera in my daughter's room after she kept insisting a man stood in the corner.";
const SECOND_SENTENCE =
  "The footage showed an empty corner every night — except on the nights she slept at her grandmother's, when the man stood in the middle of the room, staring at her empty bed.";

// The grader runs the program in a sandbox that writes to /output/entry.txt.
// OUTPUT_PATH lets a local run point the same program at a scratch file.
const OUTPUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";

// Count the sentences in a text: a sentence ends on . ! or ?.
function countSentences(text: string): number {
  const matches = text.match(/[^.!?]+[.!?]/g);
  return matches === null ? 0 : matches.length;
}

function main(): void {
  const story = `${FIRST_SENTENCE} ${SECOND_SENTENCE}`;

  // Self-check the gate before writing: exactly two sentences, 1-400 chars.
  if (countSentences(story) !== 2) {
    throw new Error(`Expected exactly 2 sentences, got ${countSentences(story)}.`);
  }
  if (story.length < 1 || story.length > 400) {
    throw new Error(`Expected 1-400 characters, got ${story.length}.`);
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, story, "utf8");
}

main();
