import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [dir, base] = process.argv.slice(2);
if (!dir || !base) {
  process.exit(1);
}

const walk = (d) =>
  readdirSync(d).flatMap((name) => {
    const p = join(d, name);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

for (const file of walk(dir)) {
  if (!/\.(html|txt)$/.test(file)) continue;
  const src = readFileSync(file, "utf8");
  const out = src.replaceAll('"/images/', `"${base}/images/`).replaceAll('\\"/images/', `\\"${base}/images/`);
  if (out !== src) writeFileSync(file, out);
}
