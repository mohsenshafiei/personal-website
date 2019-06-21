const path = require('path');

const projectRoot = path.resolve(__dirname, '../..');
module.exports = {
  projectRoot,
  // Files
  entryPointSrc: path.resolve(projectRoot, 'src/app.tsx'),
  typescriptConfigSrc: path.resolve(projectRoot, 'tsconfig.json'),
  htmlTemplateSrc: path.resolve(projectRoot, 'src/index.html'),
  // Directories
  srcDir: path.resolve(projectRoot, 'src'),
  distDir: path.resolve(projectRoot, 'dist'),
};
