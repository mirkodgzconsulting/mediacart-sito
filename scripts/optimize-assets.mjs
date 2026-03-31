/**
 * Riduce peso e dimensioni per PageSpeed (WebP, max larghezza contenitore ~800px).
 * Esegui: npm run optimize:images
 */
import sharp from "sharp";
import { existsSync } from "node:fs";
import { renameSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assets = join(root, "public", "assets");

const webpOpts = { quality: 82, effort: 6 };

async function jpgToCardWebp(baseName) {
  const jpgPath = join(assets, `${baseName}.jpg`);
  const outPath = join(assets, `${baseName}.webp`);
  if (!existsSync(jpgPath)) {
    console.warn("Skip (missing):", jpgPath);
    return null;
  }
  const tmp = outPath + ".tmp";
  await sharp(jpgPath)
    .rotate()
    .resize(800, 500, { fit: "inside", withoutEnlargement: true })
    .webp(webpOpts)
    .toFile(tmp);
  renameSync(tmp, outPath);
  const meta = await sharp(outPath).metadata();
  console.log(`OK ${baseName}.webp`, meta.width, "x", meta.height);
  return { baseName, w: meta.width, h: meta.height };
}

async function optimizeHeroStorefront() {
  const src = join(assets, "Foto-Fronte-Negozio-MEDIACART.webp");
  const out = join(assets, "Foto-Fronte-Negozio-MEDIACART-800.webp");
  if (!existsSync(src)) {
    console.warn("Skip storefront:", src);
    return { w: 800, h: 600, src: "/assets/Foto-Fronte-Negozio-MEDIACART.webp" };
  }
  await sharp(src)
    .rotate()
    .resize(800, 633, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 80, effort: 6 })
    .toFile(out);
  const meta = await sharp(out).metadata();
  console.log("OK Foto-Fronte-Negozio-MEDIACART-800.webp", meta.width, "x", meta.height);
  return { w: meta.width, h: meta.height, src: "/assets/Foto-Fronte-Negozio-MEDIACART-800.webp" };
}

async function tesiMeta() {
  const p = join(assets, "Tesi-001.avif");
  if (!existsSync(p)) return { w: 640, h: 400 };
  const m = await sharp(p).metadata();
  console.log("Tesi-001.avif", m.width, "x", m.height);
  return { w: m.width ?? 640, h: m.height ?? 400 };
}

const grande = await jpgToCardWebp("grande_formato");
const piccolo = await jpgToCardWebp("piccoloformato");
const hero = await optimizeHeroStorefront();
const tesi = await tesiMeta();

console.log("\nDimensioni per servizi-evidenza.ts (copia se aggiorni):");
console.log(
  JSON.stringify(
    {
      grande_formato: grande,
      piccolo_formato: piccolo,
      hero_storefront: hero,
      tesi: tesi,
    },
    null,
    2
  )
);
