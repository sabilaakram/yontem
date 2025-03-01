/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "http",
            hostname: "localhost",
            port: "1337",
            pathname: "/uploads/**/*",
          },
          // {
          //   protocol: "https",
          //   hostname: "admin.yontemteknoloji.com",
          //   pathname: "/uploads/**/*",
          // },
          // {
          //   protocol: "http",
          //   hostname: "95.111.235.108",
          //   port: "1337",
          //   pathname: "/uploads/**/*",
          // },
        ],
      },
};

export default nextConfig;
