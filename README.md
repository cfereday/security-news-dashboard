# security-news-dashboard

A mini project to put to practice what I learnt in the [Frontend masters JavaScript the new hard parts](https://github.com/cfereday/js-the-new-hard-parts).

This project will query different APIs to get interesting daily security tech news aggregated in a simple dashboard, to make it easier to keep track of security news.

## Getting started
1. Clone the repo:
`git clone git@github.com:cfereday/security-news-dashboard.git`

2. Use the correct version of Node:
`nvm install v15.0.1`

3. Install the dependencies:
`npm install`

## To run the UI (WIP)
4. Webpack build:
`npm run build`

5. Start the app locally:
First start the express app backend:
`cd src/api`
`npm start`
The responses from the API can be found on `localhost:3000`

Second start the React frontend:
`npm run start:dev`
This will start the dashboard on `localhost:9000` & display the repsonses from the APIs called in the express app

6. Navigate to the localhost url:
`http://localhost:9000/`
