# Eslint and Prettier Setup for React

These are the settings I use for Eslint and Prettier.

## Installing

### Locally/Per Project Install

1. Install the package

```sh
npx install-peerdeps --dev eslint-config-pelias
```

2. Create an `.eslintrc` file in the root of your project (alongside your `package.json`) and add the following:

```json
{
  "extends": ["pelias"]
}
```

3. Add the follwing scripts to your `package.json` file:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

4. You can lint your code manually by running these scripts:

```sh
yarn run lint
yarn run lint:fix
```

```sh
npm run lint
npm run lint:fix
```
