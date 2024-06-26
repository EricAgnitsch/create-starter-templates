const path = require('path');
const fs = require('fs-extra');
const Handlebars = require('handlebars');

function createEnvLocalFile(projectPath, fileName, envContent) {
  const envFilePath = path.join(projectPath, fileName);

  fs.writeFileSync(envFilePath, envContent, 'utf8');
  console.log('.env.local file created with preset values');
}

function applyTemplate(filePath, data) {
  const template = fs.readFileSync(filePath, 'utf8');
  const compileTemplate = Handlebars.compile(template);
  const content = compileTemplate(data);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Template applied to ${filePath}`);
}

function replaceProjectName(projectName, filesToReplace) {
  const data = { project_name: projectName };

  console.log(`Applying template to replace project name in file...`);
  filesToReplace.forEach((file) => {
    applyTemplate(file, data);
  });
  console.log(
    `Template applied for all instances of project name -- ${projectName}`
  );
}

module.exports = {
  createEnvLocalFile,
  applyTemplate,
  replaceProjectName,
};
