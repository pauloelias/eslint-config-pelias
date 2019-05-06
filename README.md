# Eslint and Prettier Setup for React

These are the settings I use for Eslint and Prettier.

They are a slightly opinionated but they've been tuned over a few years of [modern javasript](https://javascript.info) and [react](https://reactjs.org). This config can also be easily extended for [react-native](https://facebook.github.io/react-native/) work as well.

This package is heavily inspired by [Wes Bos's `No-Sweat™ Eslint and Prettier Setup`](https://github.com/wesbos/eslint-config-wesbos/)... hence the similar format of the documentation.

## What it Does

- Lints JavaScript based on latest-ish standards
- Fixes formatting errors with Prettier
- Lints + Fixes JavasSript inside of html script tags
- Lints + Fixes JavasScipt via [eslint-config-standard](https://github.com/standard/eslint-config-standard)
- Lints + Fixes JSX via [eslint-config-standard-jsx](https://github.com/standard/eslint-config-standard-jsx)
- All of the custom rules can be [found here](.eslintrc.js). You can overwrite any of these settings or fork the entire thing to create your own.

## Installing

You can install this package locally per project or globally.

Ideally you'll want to install this locally per project so that you can have project-specific settings for everyone working on the project.

Installing this package globally allows you to lint and format ad-hoc JavaScript files and projects too. It's nice if you want to spin up a quick protoype or throwaway project to work through a quick idea.

### Locally/Per Project Install

1. If you don't have a `package.json` file, initialize your project with `yarn init` or `npm itit`

2. Install the package and its peer dependencies:

```sh
yarn add --dev eslint prettier eslint-config-pelias
```

```sh
npm install --save-dev eslint prettier eslint-config-pelias
```

3. Create an `.eslintrc` file in the root of your project (alongside your `package.json`) and add the following:

```json
{
  "extends": ["pelias"]
}
```

4. Add the follwing scripts to your `package.json` file:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
}
```

5. You can lint and/or fix your code manually by running these scripts:

```sh
yarn run lint
yarn run lint:fix
```

```sh
npm run lint
npm run lint:fix
```

### Global Install

1. Install the package and its peer dependencies globally

```sh
yarn global add eslint prettier eslint-config-pelias
```

```sh
npm install -g eslint prettier eslint-config-pelias
```

2. Add a global .eslintrc file:

ESLint will look for one in your home directory:

- `~/.eslintrc` for mac
- `C:\Users\username\.eslintrc` for windows

Your `.eslintrc` file should look like this:

```json
{
  "extends": ["wesbos"]
}
```

To use from the CLI, you can now run `eslint .` or configure your editor as we show next.

## Settings

If you'd like to overwrite eslint or prettier settings, you can add the rules in your .eslintrc file. The ESLint rules go directly under "rules" while prettier options go under "prettier/prettier". Note that prettier rules overwrite anything in my config (trailing comma, and single quote), so you'll need to include those as well.

```json
{
  "extends": ["wesbos"],
  "rules": {
    "no-console": 2,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
        "tabWidth": 8
      }
    ]
  }
}
```

### With VS Code

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the ESLint package
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:

```
// These are all my auto-save configs
"editor.formatOnSave": true,

// turn it off for JS and JSX, we will do this via eslint
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},

// tell the ESLint plugin to run on save
"eslint.autoFixOnSave": true,

// Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
"prettier.disableLanguages": ["javascript", "javascriptreact"],
```
