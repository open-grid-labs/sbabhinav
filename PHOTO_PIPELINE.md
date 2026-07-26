# Photo pipeline

How the real client photographs get from Google Drive onto this site, and how
to add newly-shared photos later. Everything here is committed to the repo so
any session/account can continue the work.

## What's where

| Thing                         | Location                                            | In git? |
|-------------------------------|-----------------------------------------------------|---------|
| Web-optimized gallery images  | `public/projects/<slug>/{t,f}/NNN.jpg`, `cover.jpg` | ✅ yes   |
| Gallery data the site renders | `src/data/projects.ts` (auto-generated)             | ✅ yes   |
| Inventory of every Drive file | `scripts/photo-inventory.json`                      | ✅ yes   |
| Optimizer                     | `scripts/build-galleries.js`                        | ✅ yes   |
| New-file detector             | `scripts/photo-check.js`                            | ✅ yes   |
| Raw full-res originals        | **Google Drive only** (not kept on disk, ~4.8 GB)   | ❌ no    |

The site ships only the small web copies (`t` = 640px thumbnails for grids,
`f` = 1600px for the lightbox). Originals stay on Drive; `photo-inventory.json`
is our record of what's already been pulled/processed.

## The rclone remote (you own it)

The **canonical source is the Drive folder ID** `18St4jcZhdvKx-nkbADt6_DX5uSNYenxJ`
(`https://drive.google.com/drive/folders/18St4jcZhdvKx-nkbADt6_DX5uSNYenxJ`), NOT
the remote name — a remote is just a per-machine alias.

**Configure the remote yourself** (`rclone config`) so your Google token never
leaves your control. Any Google Drive remote works — full-access or read-only —
because the scripts pin the target folder by ID at call time (connection string
`<remote>,root_folder_id=18St4…:`) and only ever **read** it. The scripts never
inspect your rclone config or token; rclone uses it internally to authenticate.

On this machine the remote is named `Google Drive`. That's the default the
scripts use; if yours is named differently, pass `RCLONE_REMOTE=<name>`
(e.g. `RCLONE_REMOTE="Google Drive" node scripts/photo-check.js`).

The rclone config here is **password-encrypted**, so every rclone call needs the
config password. Either run the scripts interactively (rclone will prompt) or
export it first so the calls run unattended:

```bash
export RCLONE_CONFIG_PASS='<your rclone config password>'
node scripts/photo-check.js
```

> ⚠️ **Listing caveat:** a one-shot recursive listing of this folder is
> unreliable — `rclone lsf -R` / `lsjson -R` / `size` / `--fast-list` return
> inconsistent partial counts (Google throttles the deep traversal and rclone
> silently drops sub-listings). Always enumerate **per top-level folder** with
> pacing. `photo-check.js` and `rclone copy` already do this correctly.

## Adding newly-shared photos (the client only ADDS files, never renames)

```bash
# 1. See what's new vs the committed inventory
node scripts/photo-check.js

# 2. Re-pull originals to a temp dir (they aren't kept on disk).
#    Folder pinned by ID, so use your own remote name in place of "Google Drive":
rclone copy "Google Drive,root_folder_id=18St4jcZhdvKx-nkbADt6_DX5uSNYenxJ:" \
  /tmp/sbabhinav-photos --transfers=8 --drive-acknowledge-abuse
#    For a brand-new couple/folder, first add its entry (slug, name, category,
#    cover, featured?) to the CFG array in scripts/build-galleries.js

# 3. Regenerate the web galleries + manifest, then build
PHOTO_SRC=/tmp/sbabhinav-photos node scripts/build-galleries.js
yarn build

# 4. Record the new state so the next diff is clean
node scripts/photo-check.js --update

# 5. Clean up + commit
rm -rf /tmp/sbabhinav-photos
git add -A && git commit
```

## The highlight video

`Anuj & Amit Final Highlight.mp4` (~1 GB) can't go in git (100 MB/file limit) or
on GitHub Pages. To feature it, upload to YouTube/Vimeo and embed, or export a
compressed web clip.
