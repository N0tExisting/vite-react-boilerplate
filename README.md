# Vite React Boilerplate

## **A Vite and react Boilerplate repo**

## Installation

1. Press the `Clone Template` Button.
2. Clone your copy of the repo.
3. Open the `package.json` file and change the `name` field to your project name, and change the description as well as updating the license.
4. Install the dependencies. _(This repo uses [**yarn**](https://classic.yarnpkg.com/), but you can use any package manager you like.)_

## Usage

<!-- TODO: write (out) usage
  - State Management (Storeon) - Finish
  - Animations (React Spring) - Finish
  - Routing (vite-plugin-pages) - FIXME: We Have an Error
  - Form Validation (Vest) - TODO: Example
  - Testing (Peeky) - TODO: Write tests
 -->

### Styling

[WindiCSS](https://windicss.org) is used for styling, it is similar to Tailwind but with more features:

- Speed
- Implicit Value Inferring (<https://windicss.org/features/value-auto-infer.html>)
- Variant Grouping (<https://windicss.org/features/variant-groups.html>)
- Attributify Mode (<https://windicss.org/features/attributify.html>)
- Improved Responsive Design (<https://windicss.org/features/responsive-design.html#custom-range>)
- Important Prefix (<https://windicss.org/features/important-prefix.html>)
- Shortcuts (<https://windicss.org/features/shortcuts.html>)

### State Management

We use [**Storeon**](https://github.com/storeon/storeon/blob/main/README.md), a tiny, redux-like state manager.

### Animation

[**React Spring**](https://react-spring.io/) is our animation library of choice. This one needs no introduction. _(Definitely not because I don't want to write the readme right now 😉)_

### Available Scripts

In the project directory, you can run:

#### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

#### `yarn build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

<!--
## Goals

- SSR ready (Just configure the server, add the entrypoint and render.)
-->

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

<!-- https://dev.to/ealush/dead-simple-form-validation-with-vest-5gf8 -->
