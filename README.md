[![Netlify Status](https://api.netlify.com/api/v1/badges/bf7deb0b-79d8-4a78-a0da-6ec4fe2aa9e9/deploy-status)](https://app.netlify.com/sites/circle-docs/deploys)

# docs-spike

Spiking on Docusaurus for Programmable Wallets. Using this repo to test deployment.

## Relevant Links for spike

### Redocusaurus
- https://www.npmjs.com/package/@chargeover/redocusaurus
- https://github.com/rohit-gohri/redocusaurus
- https://rohit.page/blog/projects/openapi-for-docusaurus/?utm_source=github&utm_medium=repo&utm_campaign=redocusaurus
- Mulitiple APIS: Full Pages with links: https://redocusaurus.vercel.app/docs/guides/multiple-apis
-

## For Docusaurus Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
