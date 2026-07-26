<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Photos

The site's portfolio uses the client's real photographs, synced from Google
Drive and optimized for the web. If asked to add / update photos, **read
[`PHOTO_PIPELINE.md`](./PHOTO_PIPELINE.md) first** — it covers the `gdrive:`
rclone remote, an important listing caveat, the inventory
(`scripts/photo-inventory.json`), and the exact steps.
