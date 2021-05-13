// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv/config');

// ℹ️ Connects to the database
require('./db');

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express');

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most middlewares
require('./config')(app);


// setting session configuration here
const session = require('express-session');
//connecting mongoDB here
const MongoStore = require('connect-mongo');

app.use(session({
  secret:'NotManishsAge',
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 1000*60*60*24// is one day fine? session expires after one day
  },
  store: new MongoStore({
    //is MatchPartner right??
    mongoUrl:process.env.MONGODB_URI || "mongodb://localhost/MatchPartner",
    ttl: 60*60*24, //expires in one day
  })
}))

// 👇 Start handling routes here
// Contrary to the views version, all routes are controled from the routes/index.js

const allRoutes = require('./routes');
app.use('/api', allRoutes);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app);

module.exports = app;
