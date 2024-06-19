# create-starter-templates

## Description

Spin up a Next.js project with NextUI and Supabase in a single command.

### Features

- Next.js
- NextUI
- yup
- FontAwesome
- Supabase
- Docker

### Requirements

Before starting, ensure you have the following installed and configured:

- **Node.js**: [Installation guide](https://nodejs.org/en/download/)
- **Yarn**: Run `npm install --global yarn` to install Yarn via npm.
- **Supabase**: A [Supabase](https://supabase.com/) project.

---

## Getting Started

- Create a new Next.js app with `npx @autom8te/create-starter-templates@latest -n <project_name> --nextjs`. Replace `project_name` with your camelCase project name
- Navigate to new project folder
- Run `yarn`
- Run `yarn dev`
- Go to `http://localhost:3000` in browser

### Supabase Project Setup

1. Create a new project in Supabase.
2. Edit the `.env.local` file values with values that can be found in your Supabase project settings.
