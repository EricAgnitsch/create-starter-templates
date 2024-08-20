#!/usr/bin/env node

const Commander = require('commander');
const path = require('path');
const fs = require('fs-extra');
const {
  initializeGitRepository,
  renameNpmignoreToGitignore,
} = require('./helpers/git');
const {
  createEnvLocalFile,
  replaceProjectName,
  removeTemplateExtension,
} = require('./helpers/file');

const program = new Commander.Command();

program
  .requiredOption('-n, --name <projectName>', 'Specify the base project name')
  .option('--express', 'Create an Express project')
  // .option('--expo', 'Create an Expo project')
  .option('--nextjs', 'Create a Next.js project')
  .parse(process.argv);

const options = program.opts();

if (!options.express && !options.expo && !options.nextjs) {
  console.error(
    // 'You must specify at least one project type: --express, --expo, --nextjs'
    'You must specify at least one project type: --express, --nextjs'
  );
  process.exit(1);
}

if (options.express) {
  console.log('create express project');
  createExpressProject(options.name);
}

// if (options.expo) {
//   console.log('create expo project');
//   // createExpoProject();
// }

if (options.nextjs) {
  console.log('create nextjs project');
  createNextJsProject(options.name);
}

function createExpressProject(projectName) {
  const templatePath = path.join(__dirname, 'templates/express');
  const projectPath = path.join(process.cwd(), 'express-' + projectName);

  // Copying the template excluding node_modules
  fs.copySync(templatePath, projectPath);
  console.log(`Copied template from ${templatePath} to ${projectPath}`);

  // Updating files to use user's project name input
  replaceProjectName(projectName, [
    path.join(projectPath, 'package.json'),
    path.join(projectPath, 'docker-compose.yml'),
    path.join(projectPath, '.env.docker.template'),
    // Add other file paths that needs 'project_name' updated
  ]);

  // Create the .env files
  removeTemplateExtension(projectPath, '.env.local.template');
  removeTemplateExtension(projectPath, '.env.docker.template');
  removeTemplateExtension(projectPath, '.env.shared.template');

  // Rename .npmignore to .gitignore
  renameNpmignoreToGitignore(projectPath);

  // Initialize a new git repo
  initializeGitRepository(projectPath);
}

function createNextJsProject(projectName) {
  const templatePath = path.join(__dirname, 'templates/nextjs');
  const projectPath = path.join(process.cwd(), 'nextjs-' + projectName);

  // Copying the template excluding node_modules
  fs.copySync(templatePath, projectPath);
  console.log(`Copied template from ${templatePath} to ${projectPath}`);

  // Updating files to use user's project name input
  replaceProjectName(projectName, [
    path.join(projectPath, 'package.json'),
    path.join(projectPath, 'docker-compose.yml'),
    // Add other file paths that needs 'project_name' updated
  ]);

  // Create the .env.local template file
  createEnvLocalFile(
    projectPath,
    '.env.local',
    [
      'NEXT_PUBLIC_BASE_URL=http://localhost:8100',
      'NEXT_PUBLIC_SUPABASE_URL=https://<replace-me>.supabase.co',
      'NEXT_PUBLIC_SUPABASE_KEY=<replace-me>',
    ].join('\n')
  );

  // Rename .npmignore to .gitignore
  renameNpmignoreToGitignore(projectPath);

  // Initialize a new git repo
  initializeGitRepository(projectPath);
}
