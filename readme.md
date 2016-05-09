Personal Demo - React - Reflux - Webpack - React-bootstrap
-----------------------------------------------------------

TODO:
- ~~Swap Gulp for Webpack~~
- Start Reflux integration
- Learn about React routing
- Integrate react-bootstrap

Tutorial for first setup:
https://www.codementor.io/reactjs/tutorial/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack

// As said in the Tutorial
Commands:

Build and watch changes in your app, build and refresh the page:
```
./node_modules/.bin/webpack -d --watch
```

If you don't want to refresh page, use react-hot-loader.

Redux tutorial:
http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html
http://redux.js.org/docs/introduction/index.html

Project Architecture
reactPersonalDemo

|

|-- src

|    |-- client

|    |     |-- app

|    |     |   |-- actions

|    |     |   |-- components

|    |     |   |-- containers

|    |     |   |-- reducers

|    |     |   |-- index.jsx

|    |     |-- public (bundle.js, libraries)

|    |     |-- index.html

|

|-- package.json

|-- readme.md

|-- webpack.config.js
