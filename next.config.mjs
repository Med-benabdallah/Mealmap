/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        pathname: "/**", // Allow all paths under utfs.io
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // Allow all paths under images.unsplash.com
      },
    ],
  },
};

export default nextConfig;
