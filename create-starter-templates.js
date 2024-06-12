const projectName = process.argv[2];
if (!projectName) {
  console.error(
    `Please specify the project name: npx @autom8te/create-starter-templates@latest <project-name>`
  );
  process.exit(1);
}

console.log('test');
