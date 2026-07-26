#!/usr/bin/env node
/*
 * photo-check.js — reliably enumerate the client's Google Drive folder and
 * detect what is NEW since the last recorded inventory.
 *
 * Why this exists: a one-shot recursive listing of the shared folder
 * (`rclone lsf -R` / `lsjson -R` / `--fast-list`) is UNRELIABLE — Google
 * throttles the deep traversal and rclone silently drops sub-listings, giving
 * inconsistent counts (203 / 245 / 251 …). Listing each top-level folder on
 * its own (with pacing + retries) is reliable and reproducible. This script
 * does exactly that, then diffs against the saved inventory.
 *
 * The inventory (scripts/photo-inventory.json) is COMMITTED to the repo so any
 * session/account can pick up where we left off and know what's already been
 * processed.
 *
 * Usage:
 *   node scripts/photo-check.js            # report new / removed files
 *   node scripts/photo-check.js --update   # also rewrite the inventory
 *
 * Requires the authenticated `gdrive:` rclone remote.
 */
const path = require("path");
const {execFileSync} = require("child_process");
const fs = require("fs");

// CANONICAL source = the Google Drive folder ID (machine-independent).
// The rclone remote NAME is only a local alias and may differ per machine, so
// it's configurable and we verify it actually points at this folder below.
const DRIVE_FOLDER_ID = "18St4jcZhdvKx-nkbADt6_DX5uSNYenxJ";
const DRIVE_URL = `https://drive.google.com/drive/folders/${DRIVE_FOLDER_ID}`;
// The rclone remote is owned/configured by the repo owner. Default matches the
// remote set up on this machine; override with RCLONE_REMOTE=<name> elsewhere.
const REMOTE_NAME = (process.env.RCLONE_REMOTE || "Google Drive").replace(/:$/, "");
// Pin the target folder by ID via an rclone connection string. This scopes
// every call to just the client folder — so it works with ANY drive remote,
// including a general full-access remote pointed at the whole Drive root.
const REMOTE = `${REMOTE_NAME},root_folder_id=${DRIVE_FOLDER_ID}:`;
const INVENTORY =
	process.env.PHOTO_INVENTORY ||
	path.join(__dirname, "photo-inventory.json");
const PACE = [
	"--retries", "8",
	"--low-level-retries", "15",
	"--tpslimit", "6",
	"--drive-pacer-min-sleep", "150ms",
];

const rclone = (args) =>
	execFileSync("rclone", args, {encoding: "utf8", maxBuffer: 1 << 28});

// NOTE: this script does NOT read your rclone config. It only invokes the
// `rclone` executable, which reads its own config internally to authenticate.
// The token never passes through this script or gets printed.

function listReliable() {
	const files = [];
	// root-level files (e.g. the highlight .mp4) — shallow, reliable
	for (const e of JSON.parse(rclone(["lsjson", REMOTE, "--files-only"])))
		files.push({path: e.Path, size: e.Size, mtime: e.ModTime});
	// each top-level folder listed on its own, recursively, with pacing
	const dirs = rclone(["lsf", REMOTE, "--dirs-only"])
		.split("\n").filter(Boolean).map((s) => s.replace(/\/$/, ""));
	for (const d of dirs) {
		const arr = JSON.parse(
			rclone(["lsjson", `${REMOTE}${d}`, "-R", "--files-only", ...PACE])
		);
		for (const e of arr)
			files.push({path: `${d}/${e.Path}`, size: e.Size, mtime: e.ModTime});
	}
	files.sort((a, b) => a.path.localeCompare(b.path));
	return files;
}

function load(file) {
	if (!fs.existsSync(file)) return null;
	return JSON.parse(fs.readFileSync(file, "utf8"));
}

const update = process.argv.includes("--update");

console.log("Enumerating Drive (per-folder, reliable)…");
let current;
try {
	current = listReliable();
} catch {
	console.error(`\nERROR: rclone couldn't read the Drive folder via remote '${REMOTE}'.`);
	console.error(`Check that:`);
	console.error(`  • the remote name is right (set RCLONE_REMOTE=<name> if not "${REMOTE_NAME}")`);
	console.error(`  • the config password is available (export RCLONE_CONFIG_PASS=... or run interactively)`);
	console.error(`  • that account can access ${DRIVE_URL}`);
	process.exit(1);
}
console.log(`  Drive currently has ${current.length} files.`);

const prev = load(INVENTORY);
if (!prev) {
	console.log("No existing inventory found — this will be the first snapshot.");
} else {
	const prevSet = new Set(prev.files.map((f) => f.path));
	const curSet = new Set(current.map((f) => f.path));
	const added = current.filter((f) => !prevSet.has(f.path)).map((f) => f.path);
	const removed = prev.files.filter((f) => !curSet.has(f.path)).map((f) => f.path);
	console.log(`\nInventory recorded ${prev.files.length} files (from ${prev.generatedAt}).`);
	console.log(`\nNEW files (${added.length}):`);
	added.forEach((p) => console.log("  + " + p));
	if (!added.length) console.log("  (none)");
	if (removed.length) {
		console.log(`\nMISSING vs inventory (${removed.length}) — client renamed/removed?:`);
		removed.forEach((p) => console.log("  - " + p));
	}
}

if (update) {
	const projects = {};
	for (const f of current) {
		const proj = f.path.includes("/") ? f.path.split("/")[0] : f.path;
		projects[proj] = (projects[proj] || 0) + 1;
	}
	const inv = {
		generatedAt: new Date().toISOString(),
		source: {
			driveFolderId: DRIVE_FOLDER_ID,
			driveUrl: DRIVE_URL,
			note: "Canonical source is the Drive folder above. The rclone remote is a per-machine alias (this run used '" + REMOTE + "', scope drive.readonly) that must be configured to point at that folder's root_folder_id. Reliable per-folder enumeration. Originals are NOT stored locally; re-pull with rclone when optimizing.",
		},
		totalFiles: current.length,
		totalBytes: current.reduce((a, f) => a + f.size, 0),
		projects,
		files: current,
	};
	fs.mkdirSync(require("path").dirname(INVENTORY), {recursive: true});
	fs.writeFileSync(INVENTORY, JSON.stringify(inv, null, 2) + "\n");
	console.log(`\nInventory updated → ${INVENTORY}`);
	console.log(`  ${inv.totalFiles} files, ${(inv.totalBytes / 1024 ** 3).toFixed(2)} GB`);
}
