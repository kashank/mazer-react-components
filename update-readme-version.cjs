const fs = require('fs');
const path = require('path');
const packageJson = require('./package.json');

// Read the README file
const readmePath = path.join(__dirname, 'README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf-8');

// Replace the placeholder with the current version
const updatedReadmeContent = readmeContent.replace('{{VERSION}}', packageJson.version);

// Write the updated content back to the README file
fs.writeFileSync(readmePath, updatedReadmeContent);

console.log(`Updated README with version ${packageJson.version}`);
