#!/usr/bin/env node

const Commander = require('commander');

const program = new Commander.Command();

program
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
  // createNextJsProject();
}
