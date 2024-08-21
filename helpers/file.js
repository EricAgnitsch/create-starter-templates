const path = require('path');
const fs = require('fs-extra');
const Handlebars = require('handlebars');

function createEnvLocalFile(projectPath, fileName, envContent) {
  const envFilePath = path.join(projectPath, fileName);

  fs.writeFileSync(envFilePath, envContent, 'utf8');
  console.log('.env.local file created with preset values');
}

function removeTemplateExtension(projectPath, fileName) {
  const oldFilePath = path.join(projectPath, fileName);
  const newFileName = fileName.replace('.template', '');
  const newFilePath = path.join(projectPath, newFileName);

  if (fs.existsSync(oldFilePath)) {
    fs.renameSync(oldFilePath, newFilePath);
    console.log(`Renamed ${fileName} to ${newFileName}`);
  } else {
    console.log(`${fileName} not found, skipping rename.`);
  }
}

function applyTemplate(filePath, data) {
  const template = fs.readFileSync(filePath, 'utf8');
  const compileTemplate = Handlebars.compile(template);
  const content = compileTemplate(data);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Template applied to ${filePath}`);
}

function replaceTemplateVariables(data, filesToReplace) {
  console.log(`Applying template to replace variables in files...`);
  filesToReplace.forEach((file) => {
    applyTemplate(file, data);
  });
  console.log(`Template applied for all instances of ${data}`);
}

module.exports = {
  createEnvLocalFile,
  removeTemplateExtension,
  replaceTemplateVariables,
};
