const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const repoName = '/portfolio'; // your GitHub repo name

module.exports = {
  output: 'export', // ✅ required for static export
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
    ],
  },
  // Added for GitHub Pages
  basePath: isProd ? repoName : '',
  assetPrefix: isProd ? repoName : '',
};
