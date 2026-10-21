// Rasterizes src/app/icon.svg into the PNG/ICO icons Next.js and the web
// manifest need (browsers that support SVG favicons use icon.svg directly).
// Usage: node scripts/build-icons.mjs
import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const svg = readFileSync("src/app/icon.svg");
const png = (size) => sharp(svg, { density: 1200 }).resize(size, size).png().toBuffer();

writeFileSync("src/app/icon.png", await png(512));
writeFileSync("src/app/apple-icon.png", await png(180));

// favicon.ico: a 16/32/48 ICO container holding PNG images.
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(png));
const header = Buffer.alloc(6 + 16 * sizes.length);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = header.length;
sizes.forEach((size, i) => {
  const entry = 6 + 16 * i;
  header.writeUInt8(size, entry);
  header.writeUInt8(size, entry + 1);
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(images[i].length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += images[i].length;
});
writeFileSync("src/app/favicon.ico", Buffer.concat([header, ...images]));

console.log("Wrote icon.png, apple-icon.png, favicon.ico");
