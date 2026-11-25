// Fix Human Sleep: Funniest Patch Note
// Writes a single line of patch notes to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt when set, for local testing).
//
// The joke: a changelog line that treats 3 a.m. cringe-replay as a
// software bug. It reads like a real release note ("Fixed a bug where
// ..."), names a specific, surprising failure mode (sleep ending at
// 3 a.m. so the brain can replay embarrassments), and trusts the
// reader to get it without explaining the joke. One line, no padding.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Fixed a bug where sleep ended at 3 a.m. so the brain could replay every embarrassing thing you have ever said.";

// Self-check the house gate before writing: UTF-8 text, 1-160 chars,
// a single line, and not only white space. Fail loudly instead of
// shipping an entry the scorer would refuse.
if (ENTRY.length < 1 || ENTRY.length > 160) {
  console.error(`Entry is ${ENTRY.length} chars; gate requires 1-160.`);
  process.exit(1);
}
if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  console.error("Entry must be a single non-blank line.");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars) to ${outDir}`);
