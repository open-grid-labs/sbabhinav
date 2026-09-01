const path = require("path");
const REPO = path.resolve(__dirname, "..");
const sharp = require(path.join(REPO, "node_modules", "sharp"));
const fs = require("fs");

// Source = raw originals. They are NOT kept on disk (see photo-check.js).
// Before a full rebuild, re-pull them from Drive into PHOTO_SRC using your own
// rclone remote (the folder is pinned by ID, so any drive remote works):
//   rclone copy "Google Drive,root_folder_id=18St4jcZhdvKx-nkbADt6_DX5uSNYenxJ:" \
//     /tmp/sbabhinav-photos --transfers=8 --drive-acknowledge-abuse
// then:  PHOTO_SRC=/tmp/sbabhinav-photos node scripts/build-galleries.js
const SRC = process.env.PHOTO_SRC || "/tmp/sbabhinav-photos";
const PUB = path.join(REPO, "public", "projects");
const MANIFEST = path.join(REPO, "src", "data", "projects.ts");

// keyed by the exact top-level dir name (prefix match for the suffixed ones)
const CFG = [
	{
		match: "AMIT X ANUJ",
		slug: "amit-anuj",
		name: "Amit & Anuj",
		category: "Mehendi & Haldi",
		location: "Himachal Pradesh",
		cover: "_Q5A3810.jpg",
		featured: true
	},
	{
		match: "Tenzin X dev",
		slug: "tenzin-dev",
		name: "Tenzin & Dev",
		category: "Mehendi & Haldi",
		location: "Manali, Himachal Pradesh",
		cover: "DSC03435.jpg",
		featured: true
	},
	{
		match: "Sofia x Sameer",
		slug: "sofia-sameer",
		name: "Sofia & Sameer",
		category: "Wedding",
		location: "Manali, Himachal Pradesh",
		cover: "A (444).jpg",
		featured: true
	},
	{
		match: "Pratiksha x sayam",
		slug: "pratiksha-sayam",
		name: "Pratiksha & Sayam",
		category: "Wedding",
		location: "Himachal Pradesh",
		cover: "DSC01357.jpg",
		featured: false
	},
	{
		match: "Yogesh x shivani",
		slug: "yogesh-shivani",
		name: "Yogesh & Shivani",
		category: "Pre-Wedding",
		location: "Himachal Pradesh",
		cover: "DSC06421.jpg",
		featured: false
	},
	{
		match: "AASHIMA CHANDEL",
		slug: "aashima-chandel",
		name: "Aashima Chandel",
		category: "Wedding",
		location: "Himachal Pradesh",
		cover: "RUV00280.jpg",
		featured: false
	},
	{
		match: "Neeraj X SHAGUN",
		slug: "neeraj-shagun",
		name: "Neeraj & Shagun",
		category: "Wedding",
		location: "Himachal Pradesh",
		cover: "RUV01428.jpg",
		featured: false
	},
	{
		match: "NEHA MATERNITY",
		slug: "neha-maternity",
		name: "Neha — Maternity",
		category: "Maternity",
		location: "Studio Session",
		cover: "RUV00061.jpg",
		featured: false
	},
	{
		match: "Vipasha x nikhil",
		slug: "vipasha-nikhil",
		name: "Vipasha & Nikhil",
		category: "Pre-Wedding",
		location: "Himachal Pradesh",
		cover: "DSC01200.jpg",
		featured: false
	},
	{
		match: "HITAKSHI",
		slug: "hitakshi",
		name: "Hitakshi",
		category: "Wedding",
		location: "Himachal Pradesh",
		cover: null,
		featured: false
	},
	{
		match: "NISHANT X RASHMI",
		slug: "nishant-rashmi",
		name: "Nishant & Rashmi",
		category: "Wedding",
		location: "Himachal Pradesh",
		cover: null,
		featured: false
	},
];

function listJpgs(dir) {
	const out = [];
	(function walk(p) {
		for (const f of fs.readdirSync(p).sort()) {
			const fp = path.join(p, f);
			if (fs.statSync(fp).isDirectory()) walk(fp);
			else if (/\.jpe?g$/i.test(f)) out.push(fp);
		}
	})(dir);
	return out;
}

(async () => {
	const topDirs = fs.readdirSync(SRC).filter(d => fs.statSync(path.join(SRC, d)).isDirectory());
	const projects = [];

	for (const cfg of CFG) {
		const dir = topDirs.find(d => d === cfg.match || d.startsWith(cfg.match));
		if (!dir) {
			console.log("!! no dir for", cfg.match);
			continue;
		}
		let files = listJpgs(path.join(SRC, dir));

		// put the cover image first if configured
		if (cfg.cover) {
			const ci = files.findIndex(f => path.basename(f) === cfg.cover);
			if (ci > 0) {
				const [c] = files.splice(ci, 1);
				files.unshift(c);
			}
		}

		const tDir = path.join(PUB, cfg.slug, "t");
		const fDir = path.join(PUB, cfg.slug, "f");
		fs.mkdirSync(tDir, {recursive: true});
		fs.mkdirSync(fDir, {recursive: true});

		const photos = [];
		for (let i = 0; i < files.length; i++) {
			const n = String(i + 1).padStart(3, "0");
			const thumbRel = `/projects/${cfg.slug}/t/${n}.jpg`;
			const fullRel = `/projects/${cfg.slug}/f/${n}.jpg`;
			await sharp(files[i]).rotate().resize(640, null, {withoutEnlargement: true})
				.jpeg({quality: 72, mozjpeg: true, progressive: true}).toFile(path.join(tDir, `${n}.jpg`));
			const info = await sharp(files[i]).rotate().resize(1600, null, {withoutEnlargement: true})
				.jpeg({quality: 80, mozjpeg: true, progressive: true}).toFile(path.join(fDir, `${n}.jpg`));
			photos.push({thumb: thumbRel, full: fullRel, w: info.width, h: info.height});
		}

		// dedicated cover (crop-friendly, medium res) from photos[0]
		const coverRel = `/projects/${cfg.slug}/cover.jpg`;
		const coverInfo = await sharp(files[0]).rotate().resize(1200, null, {withoutEnlargement: true})
			.jpeg({quality: 80, mozjpeg: true, progressive: true}).toFile(path.join(PUB, cfg.slug, "cover.jpg"));

		projects.push({
			slug: cfg.slug, name: cfg.name, category: cfg.category, location: cfg.location,
			featured: cfg.featured, cover: coverRel, coverWidth: coverInfo.width, coverHeight: coverInfo.height,
			count: photos.length, photos
		});
		console.log(`${cfg.slug.padEnd(18)} ${String(photos.length).padStart(3)} photos  ${cfg.featured ? "[featured]" : ""}`);
	}

	const ts = `// AUTO-GENERATED by build-galleries.js — do not edit by hand.
export type Photo = { thumb: string; full: string; w: number; h: number };
export type Project = {
  slug: string;
  name: string;
  category: string;
  location: string;
  featured: boolean;
  cover: string;
  coverWidth: number;
  coverHeight: number;
  count: number;
  photos: Photo[];
};

export const projects: Project[] = ${JSON.stringify(projects, null, 2)};

export const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
`;
	fs.mkdirSync(path.dirname(MANIFEST), {recursive: true});
	fs.writeFileSync(MANIFEST, ts);
	const totBytes = projects.reduce((a, p) => a + p.count, 0);
	console.log(`\nTOTAL: ${projects.length} projects, ${totBytes} photos. Manifest -> ${MANIFEST}`);
})();
