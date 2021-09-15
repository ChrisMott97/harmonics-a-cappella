const withOptimizedImages = require("next-optimized-images");
const path = require("path");
module.exports = withOptimizedImages({
  optimizeImages: true,
  optimizeImagesInDev: true,
  webpack(config) {
    config.resolve.alias.images = path.join(__dirname, "images");

    return config;
  },
  async redirects() {
    return [
      {
        source: '/auditions',
        destination: 'https://calendly.com/exeterharmonics/auditions',
        permanent: false,
      },
    ]
  },
});
