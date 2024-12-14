const path = require('path')
const isProd = process.env.NODE_ENV === 'production';
module.exports = {
  output: "export",
  basePath: isProd ? '/portfolio' : '',
  // Set assetPrefix for static files
  assetPrefix: isProd ? '/portfolio' : '',
  // Optional: Add trailingSlash to avoid routing issues
 
}
