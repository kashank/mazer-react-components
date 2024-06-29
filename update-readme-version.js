const fs = import('fs');
const path = import('path');
const packageJson = import('./package.json');

const readmePath = path.join(__dirname, 'README.md');
let readmeContent = fs.readFileSync(readmePath, 'utf-8');

const updatedReadmeContent = readmeContent.replace('{{VERSION}}', packageJson.version);

fs.writeFileSync(readmePath, updatedReadmeContent);

console.log(`Updated README with version ${packageJson.version}`);