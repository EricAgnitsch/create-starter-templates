# [create-starter-templates](https://github.com/EricAgnitsch/create-starter-templates)

<p align="center">Spin up a Next.js app/Express.js server in a single command.</p>

### Templates

#### Next.js

- NextUI
- yup
- FontAwesome
- Supabase
- Docker

#### Express.js

- Supabase
- Docker

### Requirements

Before starting, ensure you have the following installed and configured:

- **Node.js**: [Installation guide](https://nodejs.org/en/download/)
- **Yarn**: Run `npm install --global yarn` to install Yarn via npm.
- **Supabase**: A [Supabase](https://supabase.com/) project.

### Getting Started

#### Next.js

- Create a new Next.js app with `npx @autom8te/create-starter-templates@latest -n <project_name> --nextjs`. Replace `project_name` with your camelCase project name
- Navigate to new project folder
- Run `yarn`
- Run `yarn dev`
- Go to `http://localhost:3000` in browser

#### Express.js

- Create a new Express.js server with `npx @autom8te/create-starter-templates@latest -n <project_name> --express`. Replace `project_name` with your camelCase project name
- Navigate to new project folder
- Run `yarn`
- Run `yarn start`
- Go to `http://localhost:8100` in browser

> [!TIP]
> You can create both project types in a single command with `npx @autom8te/create-starter-templates@latest -n <project_name> --nextjs --express`

### Docker

In any of the projects, run `docker compose up -d --build`.

> [!IMPORTANT]
> Make sure to have your env vars in `.env.local`.

### Supabase Project Setup

1. Create a new project in Supabase.
2. Edit the `.env.local` file values (of either project type) with values that can be found in your Supabase project settings.
