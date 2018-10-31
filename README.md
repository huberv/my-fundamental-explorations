
My personal exploration of using the SAP Fiori Fundamental (s)css library with React.JS and TypeScript.

# Getting started

- clone or download this repo
- `yarn install && yarn start` (or use npm)
- go play with `src/App.tsx` etc

# References

Fiori etc:

- https://experience.sap.com/fiori-design-web/
- https://sap.github.io/fundamental/index.html

Web design good practices:

- http://atomicdesign.bradfrost.com/table-of-contents/

React and TypeScript:

- https://github.com/sw-yx/react-typescript-cheatsheet
- https://palantir.github.io/tslint/

# What I did

- bootstrapped as described here: https://github.com/Microsoft/TypeScript-Babel-Starter
  - using the webpack approach
  - useful reading for the why Typescript with Babel: https://iamturns.com/typescript-babel/
- added webpack html plugin with template configuration
- added linting, webpack-dev-server and react hot loading
- added css/style/font loader
- `yarn add typescript tslint @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread @babel/preset-env @babel/preset-typescript react-dom react @types/react @types/react-dom @babel/preset-react webpack babel-loader webpack-dev-server webpack-cli react-hot-loader css-loader style-loader file-loader html-webpack-plugin -D`
- `yarn add fundamental-ui -D`

- [Routing docs](docs/Routing.md)

# Idea pool

- ~~typescript~~
- routing: react-router-dom + react-app-location
  - https://medium.com/dailyjs/stop-repeating-yourself-with-routes-links-and-location-parameter-parsing-in-your-react-app-a9ac317dfe1
- sidebar items as links to routes
- main page content - Welcome to this wonderful app
- page for global navigation settings
- page for pages
- sidebar shows active page
- i18n
