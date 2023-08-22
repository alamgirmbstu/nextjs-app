/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/assignment12",
  distDir: "build",
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENNY",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
