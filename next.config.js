/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/landing",
        permanent: true,
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jp(e*)g|svg|gif)$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};

module.exports = nextConfig;
