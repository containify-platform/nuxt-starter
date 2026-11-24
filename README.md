# Nuxt starter

A minimal [Nuxt](https://nuxt.com/) app served by Nitro's Node.js server, ready to deploy on
[Containify](https://containify.cloud).

- `app/pages/index.vue`: a home page rendered on the server, fetching from the API below
- `server/api/hello.ts`: `GET /api/hello`, a JSON API route
- `server/routes/health.ts`: `GET /health`, the health check
- `Dockerfile`: a multi-stage build that ships only the self-contained `.output` folder, running
  as a non-root user

## Run locally

You need Node.js 24.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy on Containify

Deploy the **Nuxt starter** template from the Containify catalogue. It builds this repository
from its Dockerfile and gives it a public HTTPS address on `containify.app`.

To deploy your own copy, fork or copy this repository, then add it to a project as a
**Git Repository** app with an HTTP endpoint on port `3000` and a health check on `/health`.

A few settings matter on Containify:

- The server reads `HOST` and `PORT`. Containify sets `HOST=::`, so it listens on IPv6 and
  IPv4; the Dockerfile sets `PORT=3000`, the port the endpoint points at.
- `runtimeConfig` values are overridden at runtime by `NUXT_` variables, so set those on the
  app, such as `NUXT_PUBLIC_GREETING`, instead of rebuilding.

## License

MIT
