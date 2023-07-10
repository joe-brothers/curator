# Curator

[![Deploy Next.js site to Pages](https://github.com/joe-brothers/curator/actions/workflows/deploy.yml/badge.svg?event=push)](https://github.com/joe-brothers/curator/actions/workflows/deploy.yml)
[![lint](https://github.com/joe-brothers/curator/actions/workflows/lint.yml/badge.svg?event=push)](https://github.com/joe-brothers/curator/actions/workflows/lint.yml)

## Environment
- pnpm
- next.js
- husky
- eslint
- prettier
- picocss
- netlify (for PR preview)

## Dev

> **Note**
>
> on Mac

```sh
nvm install
nvm use
```
1. install node (ex. with [nvm](https://github.com/nvm-sh/nvm)(Node Version Manager))

```sh
corepack enable
corepack prepare --activate
```
2. Install pnpm (ex. with [Corepack](https://nodejs.org/api/corepack.html))

```bash
pnpm install
```
3. install dependencies (also install husky)

```bash
pnpm dev
```
4. run dev server

5. Open [http://localhost:3000](http://localhost:3000)

## Deploy

See [workflow](.github/workflows/deploy.yml)
