# Project

A web application for space! **Update me!!!**

Dashboard page:

- displays overview of satellites, constellations, and active satellite locations

Reports page:

- shows reports, report details, ability to create/edit/delete reports, leave comments on reports

Satellites page:

- view satellites and satellite details

TO RUN:

- install all packages with npm `npm install`
- run `npx graphql-codegen` to generate graphql.ts

## Tech Stack

- [pnpm](https://pnpm.io/)
- [Turbo](https://turbo.build/repo)
- [Vitest](https://vitest.dev/)

## Scripts

**Makefile**

- `make help` --> Show a more detailed version of available Makefile commands
- `make dev` --> Start your development environment
- `make clean` --> Remove all temporary files like installed modules and build output, resets the dev environment

**Package.json**

- `pnpm build` --> Runs the `build` script in all workspaces
- `pnpm dev` --> Runs the `dev` script in all workspaces
- `pnpm start` --> Runs the `start` script in all workspaces
- `pnpm test` --> Runs tests
- `pnpm test:watch` --> Runs tests in watch mode
- `pnpm test:coverage` --> Runs tests and collects coverage
