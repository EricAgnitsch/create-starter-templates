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
- **Supabase CLI**: See [here](https://supabase.com/docs/reference/cli/introduction?queryGroups=example&example=supabase-init-basic-usage).

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

You can also set the backend port with `--be-port`. Setting the backend port allows you to customize the ports used by all backend services, which as of now is the Express server and all local Supabase services. As of now, 10 digits of the ports will be used.

The important ones to know are

- `1`: Supabase's API port
- `3`: Supabase's self hosted UI
- `8`: Express server

All other ports can be seen in Supabase's `config.toml` file generated in `/supabase`.

For example, `npx @autom8te/create-starter-templates@latest -n <project_name> --express --be-port 7654` will set a backend base port of `765#` that will be used for all backend services.

> [!TIP]
> You can create both project types in a single command with `npx @autom8te/create-starter-templates@latest -n <project_name> --nextjs --express`

### Supabase Project Setup

A local Supabase is already initialized for you in the Express project! This template runs `supabase init` and already has some SQL migrations in there.

1. Express - Run `supabase start` in the project root.
2. Express - Edit the `.env.shared` file's `SUPABASE_KEY` with the `service_role` key from the `supabase start`'s output.
3. NextJs - Edit the `.env.local` file's

- `NEXT_PUBLIC_SUPABASE_KEY` with the `anon` key from the `supabase start`'s output.
- `NEXT_PUBLIC_SUPABASE_URL` with the `API URL` from the `supabase start`'s output.

### Docker

In any of the projects, run `docker compose up -d --build`.

> [!IMPORTANT]
> In Express.js' template, make sure to have your env vars in `.env.local`.
> In Next.js' template, make sure to update the `args` in `docker-compose.yml`.
