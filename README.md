# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Setting up the editor
https://create-react-app.dev/docs/setting-up-your-editor/


## Syntax highlighting

https://babeljs.io/docs/en/editors/

Install the vscode-language-babel extension and follow the instructions.

## Displaying Lint Output in the Editor

They are not required for linting. You should see the linter output right in your terminal as well as the browser console. If you prefer the lint results to appear right in your editor, please make sure you install an ESLint plugin/extension.

### Extending or replacing the default ESLint config

There are a few things to remember:

1. We highly recommend extending the base config, as removing it could introduce hard-to-find issues.
2. When working with TypeScript, you'll need to provide an overrides object for rules that should only target TypeScript files.
3. It's important to note that any rules that are set to "error" will stop the project from building.

## Debugging in the VSC

Chrome Debugger Extension should be installed

1. create .vscode folder in the app root directory
2. create launch.json file

> Note: the URL may be different if you've made adjustments via the HOST or PORT environment variables.

3. npm start
4. F5 or green debug icon (in VSC)

## Formatting Code Automatically

To format our code whenever we make a commit in git:

1. yarn add husky lint-staged 
2. (IF NOT ALREADY INCLUDED) yarn add prettier

- husky makes it possible to use githooks as if they are npm scripts.
- lint-staged allows us to run scripts on staged files in git. See this blog post about lint-staged to learn more about it.
- prettier is the JavaScript formatter we will run before commits.

3. add husky configuration to package.json
4. add lint-staged configuration to package.json

5. ./node_modules/.bin/prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"
this will format the entire project for the first time

> It’s important to install Prettier locally in every project, so each project gets the correct Prettier version. (if you want to use Prettier VSC plugin)






# Custom

## a11y

https://medium.com/@pppped/extend-create-react-app-with-airbnbs-eslint-config-prettier-flow-and-react-testing-library-96627e9a9672

Extend ESLint configuration with AirBnB’s linting rules and Prettier.

Using Prettier will ensure the ability to automatically fix and beautify your code following ESLint configuration.

1. yarn add -D eslint-config-airbnb eslint-config-prettier eslint-plugin-jsx-a11y eslint-plugin-prettier prettier
2. create a .eslintrc

This file basically tells to esLint to use airbnb rules and generally how to lint the code.

3. in .eslintrc
"react/jsx-uses-react": "off",
"react/react-in-jsx-scope": "off"

- these rules are part of one of the configuration: "react-app", "airbnb", "plugin:jsx-a11y/recommended", "prettier" and needs to be switched off as the new JSX transform does not require to import React anymore. 

4. add lint script to package.json
5. yarn lint (will throw an error because it's trying to check node-modules)
6. create .eslintignore with node_modules to omit .ts/.tsx checks for those
7. yarn lint should work

Current configuration does not make Prettier formatting to follow eslint rules.

https://prettier.io/docs/en/integrating-with-linters.html

Linters usually contain not only code quality rules, but also stylistic rules. Most stylistic rules are unnecessary when using Prettier, but worse – they might conflict with Prettier! Use Prettier for code formatting concerns, and linters for code-quality concerns. -> eslint-config-prettier makes sure to turn of rules that are unnecessary with Prettier

Solution: prettier-eslint[https://github.com/prettier/prettier-eslint]

This formats your code via prettier, and then passes the result of that to eslint --fix. This way you can get the benefits of prettier's superior formatting capabilities, but also benefit from the configuration capabilities of eslint. (not configured in this project)