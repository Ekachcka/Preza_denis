import { readdirSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const dir = "public/images";
const widths = { imgImage4: 1440, imgImage3: 1000, imgImage: 1050, imgImage1: 700, imgImage2: 700 };
const fallback = 600;

for (const file of readdirSync(dir).filter((f) => /^imgImage\d*\.png$/.test(f))) {
  const name = file.replace(".png", "");
  const out = join(dir, `${name}.webp`);
  const info = await sharp(join(dir, file))
    .resize({ width: widths[name] ?? fallback, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(out);
  unlinkSync(join(dir, file));
  console.log(name, info.width, info.height, Math.round(info.size / 1024) + "KB");
}
