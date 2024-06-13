const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

function initializeGitRepository(projectPath) {
  try {
    // Initialize a new Git repository
    execSync('git init', { cwd: projectPath });
    console.log('Initialized a new Git repository.');

    // Stage all files in the repository
    execSync('git add .', { cwd: projectPath });
    console.log('Staged all files.');

    // Commit the staged files with an initial commit message
    execSync('git commit -m "Initial commit"', { cwd: projectPath });
    console.log('Created initial commit.');
  } catch (error) {
    console.error(
      'Failed to initialize Git repository or commit files:',
      error
    );
  }
}

function renameNpmignoreToGitignore(projectPath) {
  const npmignorePath = path.join(projectPath, '.npmignore');
  const gitignorePath = path.join(projectPath, '.gitignore');

  if (fs.existsSync(npmignorePath)) {
    fs.renameSync(npmignorePath, gitignorePath);
    console.log('.npmignore has been renamed to .gitignore');
  } else {
    console.log('.npmignore not found, skipping rename.');
  }
}

module.exports = {
  initializeGitRepository,
  renameNpmignoreToGitignore,
};
