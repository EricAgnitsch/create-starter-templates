const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

function initializeLocalSupabase(projectPath, bePort) {
  try {
    execSync('cd ' + projectPath);
    execSync('supabase init', { cwd: projectPath });
    updateSupabasePort(projectPath, bePort);
  } catch (error) {
    console.error('Failed to initialize local supabase:', error);
  }
}

function updateSupabasePort(projectPath, bePort) {
  const supabaseConfigPath = path.join(projectPath, 'supabase', 'config.toml');

  if (fs.existsSync(supabaseConfigPath)) {
    let content = fs.readFileSync(supabaseConfigPath, 'utf8');
    const newPort = bePort.slice(0, -1);
    content = content.replace(/5432/g, newPort);
    fs.writeFileSync(supabaseConfigPath, content, 'utf8');
    console.log(`Updated Supabase port in config.toml to ${newPort}#`);
  } else {
    console.log('supabase/config.toml not found, skipping port update.');
  }
}

module.exports = {
  initializeLocalSupabase,
};
