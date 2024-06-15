#!/usr/bin/env node

const Commander = require('commander');
const path = require('path');
const fs = require('fs-extra');
const {
  initializeGitRepository,
  renameNpmignoreToGitignore,
} = require('./helpers/git');
const { createEnvLocalFile, replaceProjectName } = require('./helpers/file');

const program = new Commander.Command();

program
  .requiredOption('-n, --name <projectName>', 'Specify the base project name')
  .option('--express', 'Create an Express project')
  .option('--expo', 'Create an Expo project')
  .option('--nextjs', 'Create a Next.js project')
  .parse(process.argv);

const options = program.opts();

if (!options.express && !options.expo && !options.nextjs) {
  console.error(
    'You must specify at least one project type: --express, --expo, --nextjs'
  );
  process.exit(1);
}

if (options.express) {
  console.log('create express project');
  // createExpressProject();
}

if (options.expo) {
  console.log('create expo project');
  // createExpoProject();
}

if (options.nextjs) {
  console.log('create nextjs project');
  createNextJsProject(options.name);
}

function createNextJsProject(projectName) {
  console.log('name ', projectName);
  const templatePath = path.join(__dirname, 'templates/nextjs');
  const projectPath = path.join(process.cwd(), 'nextjs-' + projectName);

  // Copying the template excluding node_modules
  fs.copySync(templatePath, projectPath);
  console.log(`Copied template from ${templatePath} to ${projectPath}`);

  // Updating files to use user's project name input
  // replaceProjectName(projectName, [
  //   path.join(projectPath, 'package.json'),
  //   path.join(projectPath, 'docker-compose-dev.yml'),
  //   // Add other file paths that needs 'project_name' updated
  // ]);

  // Create the .env.local template file
  createEnvLocalFile(
    projectPath,
    '.env',
    ['SUPABASE_URL=', 'SUPABASE_KEY=', 'SUPABASE_JWT_SECRET='].join('\n')
  );

  // Rename .npmignore to .gitignore
  renameNpmignoreToGitignore(projectPath);

  // Initialize a new git repo
  initializeGitRepository(projectPath);
}
