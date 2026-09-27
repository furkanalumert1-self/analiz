// STATIC_EXPORT=1 (`npm run export`) builds a static copy into out/, served
// under /chocchic, for hosting as plain static files.
const staticExport = process.env.STATIC_EXPORT === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  ...(staticExport ? { output: "export", basePath: "/chocchic", trailingSlash: true } : {}),
};
export default nextConfig;
