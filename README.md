# Webpack and Babel and JSX

## NPM
In the terminal, install the following packages.
```
$ npm init --yes
$ npm install --save babel-core babel-loader babel-preset-react react react-dom webpack
```
The command above will save the packages as dependencies in your package.json file.
```js
"dependencies": {
  "babel-core": "^6.14.0",
  "babel-loader": "^6.2.5",
  "babel-preset-react": "^6.11.1",
  "react": "^15.3.1",
  "react-dom": "^15.3.1",
  "webpack": "^1.13.2"
}
```
Add webpack to the scripts in the package.json file. This will allow you to run `npm run webpack`.
```js
"scripts": {
  "webpack": "webpack"
}
```
