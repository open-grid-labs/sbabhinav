import type { NextConfig } from "next";

// Deployed to GitHub Pages on the custom domain https://sbabhinav.com
// (see public/CNAME). A custom domain serves from the ROOT, so NO basePath is
// needed — adding one would make _next assets 404. The CNAME file in public/ is
// copied into out/ on every build so the custom-domain setting survives deploys.
const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` (GitHub Pages cannot run a Node server).
  output: "export",
  // next/image's default optimizer needs a server; disable it for static export.
  // (This site uses plain <img> tags, so images are unaffected.)
  images: { unoptimized: true },
  // Emit /path/index.html so Pages serves routes without a server.
  trailingSlash: true,
};

export default nextConfig;
