<p align="center">
  <br />
  <a href="https://usegdi.com/" target="blank"><img src="https://raw.githubusercontent.com/dht/gdi/main/clients/gdi-admin/public/Logo.webp" width="160" alt="gdi Logo" /></a>
</p>
<p align="center">
  An Open-source & Extendable Content Management System (CMS) written in ReactJS, hosted on <a href="https://firebase.google.com" target="_blank">Firebase</a>
</p>
<p align="center">
  <a href="https://usegdi.com/admin/pages/home?demo=on" target="_blank">Demo</a>&nbsp;//&nbsp;
  <a href="https://usegdi.com/docs/" target="_blank">Documentation</a>&nbsp;//&nbsp;
  <a href="https://usegdi.com" target="_blank">Homepage</a>
</p>

# Installation

> Note: make sure you have all the [prerequisites](https://usegdi.com/docs/docs/getting-started/prerequisites) prepared before installation

## Install the CLI

Run:

```sh
npm install -g @mult/cli
```

and rebuild the CLI's commands index:

```sh
gdi rebuild
```

## Create a new site

```sh
gdi create site [site-name]
```

> Note: this clones the template and installs dependencies and may take a few moments

A new project with two main packages was created:

-   `gdi-admin`: holds the admin UI
-   `gdi-site`: holds the public facing site

Change your `cwd` to your newly created `root` folder:

```sh
cd [site-name]
```

and install the project's dependencies:

```sh
npm i
```

or:

```sh
yarn
```

## Connect Firebase

Bootstrap the project:

```sh
gdi bootstrap
```

> Note: Before bootstrapping make sure you have [firebase-tools](https://firebase.google.com/docs/cli) installed: npm install -g firebase-tools

## Running the Admin UI

In the project's `root` run:

```sh
gdi start
```

Navigate to [http://localhost:3000](http://localhost:3000)

## Setting the admin user

Log in to the [Admin UI](http://localhost:3000/admin) with your `Google Account`.

Then, in the project's `root` run:

```sh
gdi setAdmin
```

## Deploying

In the project's `root` run:

```sh
gdi deploy
```

> Note: this will deploy both the `Admin UI` and the `Site`

After a successful deployment, the `Admin UI` will be served from the `/admin` path.

> Note: change your site's favIcons and meta tags before deployment

## CLI commands

| Command                     | Description                                                     |
| --------------------------- | --------------------------------------------------------------- |
| gdi create site [site-name] | Creates a new gDI repo with admin + site packages               |
| gdi bootstrap               | Bootstraps the project, runs these command: connect + apps      |
| gdi start                   | Starts `gdi-admin` in development mode                          |
| gdi setAdmin                | Choose an admin for the current site                            |
| gdi deploy                  | Builds & deploy both `gdi-admin` and `gdi-site`                 |
| gdi connect                 | Validates and links site to Firebase                            |
| gdi list projects           | Shows Firebase projects. A wrapper for `firebase projects:list` |
| gdi preview                 | Starts `gdi-site` in development mode                           |
| gdi apps                    | Scans for new apps and sets up the `vite` and `tsconfig` files  |

## General links

-   [AdminUI Demo](https://usegdi.com/admin/pages/home?demo=on)
-   [Documentation](https://usegdi.com/docs/)
-   [Homepage](https://usegdi.com)
-   [Discord channel](https://discord.com/invite/egAbyQHRrm)
-   [StackOverflow](https://stackoverflow.com/questions/tagged/gdi-cms)
-   [Babylon.js Demo](https://gdi-demo.web.app/admin/ville?demo=on)
