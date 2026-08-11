# Alexandra Bumbar — Portfolio

Personal portfolio website for Alexandra Bumbar, a London-based frontend and
full-stack engineer working with React, Vue, TypeScript, and Node.js.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify the production build

```bash
npm run build
npm test
```

## Deploy to Cloudflare Workers

Authenticate and deploy with Wrangler:

```bash
npx wrangler login
npm run build
npx wrangler deploy
```

The build uses vinext and produces Cloudflare Workers-compatible output.
