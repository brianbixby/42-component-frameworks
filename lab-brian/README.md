# Code Fellows: Code 401d22: Full-Stack JavaScript

## Lab 41: O-Auth

Intro to o-auth with React and Google. From scratch Google o-auth login. Click the signin button then the google link to sign in wiht oauth.

## Tech/frameworks/packages

- node 
- Webpack
- npm
- node packages
  - Production
    - babel-core
    - babel-loader
    - babel-plugin-transform-class-properties
    - babel-plugin-transform-object-rest-spread
    - babel-preset-env
    - babel-preset-react
    - clean-webpack-plugin
    - css-loader
    - dotenv
    - extract-text-webpack-plugin
    - html-webpack-plugin
    - node-sass
    - react
    - react-dom
    - react-redux
    - react-router-dom
    - redux
    - redux-logger
    - sass-loader
    - style-loader
    - superagent
    - uglifyjs-webpack-plugin
    - url-loader
    - webpack@3
    - webpack-dav-server@2
  - Dev
    - eslint
    - eslint-plugin-react


## How to use?
Clone this repo, open up 3 tabs in your terminal. CD into `lab-brian/back-end`, run `npm i`. Create a .env file following the instructions in the back-end's README.md. After your .env is created run `npm run dbon` to spin up Mongo. Next, run `npm run start` from the root of the 'back-end' folder. Finally, in a new Terminal tab CD into 'front-end' and run `npm i` once is this is done create a `.dev.env` at the root of the 'front-end' and add the following line of code `API_URL=http://localhost:3000`. Lastly run `npm run watch` and proceed to 'http://localhost:8080/'. You will then be able to signup and signin as a user and upload omages to s3.

## Contribute

You can totally contribute to this project if you want. Fork the repo, make some cool changes and then submit a PR.

## Credits

Initial codebase created by Code Fellows.
Read Me template created by Robert Reed https://github.com/RobertMcReed 

## License

MIT. Use it up!