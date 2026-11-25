// Entry for make.fun: "Everyday Things, Two Lines, Longer Run"
// Writes a two-line explanation of an escalator to /output/entry.txt.
// Node 22 stdlib only, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "An escalator is a staircase that swallowed a treadmill, so it carries your feet upstairs while you just stand there.\n" +
  "It maps the moving steps to a treadmill's belt, but it leaves out that the steps fold flat at the top and bottom, and that you can still walk up it like ordinary stairs — it never gets tired, and you never have to.\n";

// The gate allows 1 to 400 characters; refuse to write an entry that would fail it.
if (ENTRY.length < 1 || ENTRY.length > 400) {
  throw new Error(`Entry is ${ENTRY.length} characters, outside the 1-400 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} characters) to ${outDir}`);
