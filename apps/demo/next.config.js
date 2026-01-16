/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath:
    process.env.GITHUB_PAGES === "true" ? "/liveavatar-web-sdk-demo" : "",
  assetPrefix:
    process.env.GITHUB_PAGES === "true" ? "/liveavatar-web-sdk-demo/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
