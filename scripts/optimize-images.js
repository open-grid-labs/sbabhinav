// Generates WebP/AVIF siblings for the site's high-impact images (marketing
// hero/CTA/about/service images + the 11 portfolio cover images) and
// re-encodes the marketing JPEGs to the same quality/format standard the
// gallery pipeline (build-galleries.js) already uses. Does NOT touch the
// 332 per-photo gallery thumb/full images — see PHOTO_PIPELINE.md and the
// Phase 5 scope decision (repo-size tradeoff) for why.
const path = require("path");
const REPO = path.resolve(__dirname, "..");
const sharp = require(path.join(REPO, "node_modules", "sharp"));
const fs = require("fs");

const PUB = path.join(REPO, "public", "projects");

const MARKETING = [
	"about.jpg",
	"cta.jpg",
	"hero-1-wedding.jpg",
	"hero-2-prewedding.jpg",
	"hero-3-celebration.jpg",
	"hero-4-romance.jpg",
	"service-maternity.jpg",
	"service-mehendi.jpg",
	"service-prewedding.jpg",
	"service-wedding.jpg",
].map((f) => path.join(PUB, f));

function coverPaths() {
	return fs
		.readdirSync(PUB)
		.map((d) => path.join(PUB, d, "cover.jpg"))
		.filter((p) => fs.existsSync(p));
}

(async () => {
	const targets = [...MARKETING, ...coverPaths()];

	for (const file of targets) {
		if (MARKETING.includes(file)) {
			// re-encode in place: cap width 1920, same quality/format standard
			// as build-galleries.js uses for gallery photos.
			// Write to a temp file + rename — writing back to the same path
			// while sharp still holds a read handle on it fails on Windows.
			const buf = await sharp(file)
				.rotate()
				.resize(1920, null, { withoutEnlargement: true })
				.jpeg({ quality: 78, mozjpeg: true, progressive: true })
				.toBuffer();
			const tmp = file + ".tmp";
			fs.writeFileSync(tmp, buf);
			fs.renameSync(tmp, file);
		}

		const webpPath = file.replace(/\.jpe?g$/i, ".webp");
		const avifPath = file.replace(/\.jpe?g$/i, ".avif");

		await sharp(file).webp({ quality: 75 }).toFile(webpPath);
		await sharp(file).avif({ quality: 50, effort: 4 }).toFile(avifPath);

		console.log(path.relative(REPO, file));
	}

	console.log(`\nDone: ${targets.length} images -> webp + avif generated.`);
})();
