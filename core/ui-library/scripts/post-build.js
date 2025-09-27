#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Running post-build setup...');

// Paths
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const publicFolders = [
  '../../test-apps/react-test-new/public/ui-library',
  '../../test-apps/angular-test/public/ui-library', 
  '../../test-apps/vue-test/public/ui-library'
];

// Copy UI library files to public folders
function copyFiles() {
  const sourceDir = path.join(distDir, 'ui-library');
  
  if (!fs.existsSync(sourceDir)) {
    console.warn('⚠️  Source directory does not exist:', sourceDir);
    return;
  }

  publicFolders.forEach(publicFolder => {
    const targetDir = path.resolve(rootDir, publicFolder);
    
    // Create target directory if it doesn't exist
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Copy all files from source to target
    try {
      const files = fs.readdirSync(sourceDir);
      files.forEach(file => {
        const srcFile = path.join(sourceDir, file);
        const destFile = path.join(targetDir, file);
        
        if (fs.statSync(srcFile).isFile()) {
          fs.copyFileSync(srcFile, destFile);
          console.log(`✅ Copied ${file} to ${publicFolder}`);
        }
      });
    } catch (error) {
      console.error(`❌ Error copying to ${publicFolder}:`, error.message);
    }
  });
}

// Ensure our custom loader is properly exported
function updateMainExports() {
  const mainIndex = path.join(rootDir, 'src/index.ts');
  
  try {
    let content = fs.readFileSync(mainIndex, 'utf8');
    const exportLine = "export { defineCustomElements } from './loader/custom-loader';";
    
    if (!content.includes(exportLine)) {
      content += '\n' + exportLine + '\n';
      fs.writeFileSync(mainIndex, content);
      console.log('✅ Added custom loader export to main index');
    }
  } catch (error) {
    console.warn('⚠️  Could not update main index exports:', error.message);
  }
}

// Run all post-build tasks
try {
  copyFiles();
  updateMainExports();
  console.log('🎉 Post-build setup completed successfully!');
} catch (error) {
  console.error('❌ Post-build setup failed:', error);
  process.exit(1);
}