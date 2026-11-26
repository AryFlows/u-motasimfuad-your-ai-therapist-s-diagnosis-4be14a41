import fs from "node:fs";
import path from "node:path";
const line = "Diagnosis: advanced main-character syndrome — you came here seeking closure, but the chart shows you ghosted yourself three years ago.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), line);
