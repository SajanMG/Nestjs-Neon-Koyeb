# Nestjs-Neon-Koyeb

Minimal NestJS starter configured to connect to a Neon Postgres database and designed for deployment to Koyeb.

## Overview

- Framework: NestJS
- Database: Neon (Postgres)
- ORM: Sequelize + `sequelize-typescript`
- Deployment target: Koyeb (or any container host)

This repository provides a small example API and wiring for environment-driven configuration, database connection (using `DATABASE_URL`), and basic project scripts.

## Features

- Environment-based configuration via `@nestjs/config`.
- Sequelize integration with automatic model loading from `src/`.
- Example `users` module with controller and service.

## Requirements

- Node.js 18+ (or current LTS)
- npm (or compatible package manager)
- A Neon Postgres connection string (set in `DATABASE_URL`)
- (Optional) Koyeb account for deployment

## Quickstart

1. Install dependencies

```bash
npm install
```

2. Create a `.env` file in the project root with at least the following:

```
DATABASE_URL=postgres://user:pass@your-neon-host:5432/yourdb
PORT=3000
```

Neon connection strings usually require SSL. This project sets `dialectOptions.ssl.require = true` and `rejectUnauthorized = false` in `src/database/database.module.ts`.

3. Run the application in development mode

```bash
npm run start:dev
```

4. Build for production

```bash
npm run build
npm run start:prod
```

## Scripts

- `npm run start` — Start the app
- `npm run start:dev` — Start with watch mode
- `npm run build` — Compile TypeScript
- `npm run test` — Run unit tests
- `npm run test:e2e` — Run end-to-end tests

See `package.json` for the full list of scripts.

## Environment

- `DATABASE_URL` — Postgres connection string (required)

Add any provider-specific variables for deployment (for example Koyeb service settings) to your deployment configuration.

## Project Structure

- `src/` — Application source
  - `database/` — Database setup (`DatabaseModule`)
  - `users/` — Example users module (`user.model.ts`, `users.controller.ts`, `users.service.ts`)
  - `app.module.ts`, `main.ts`, etc.
- `test/` — E2E tests

## Deployment

To deploy to Koyeb, containerize the app (Koyeb supports Docker images) and make sure the `DATABASE_URL` secret is configured in the Koyeb service. Alternatively, use Koyeb's Git integration and set environment variables via the Koyeb dashboard.


