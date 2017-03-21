import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from "react-redux";
import store from "./store";
import routes from './routes';
import NotFoundPage from './pages/NotFound';

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const session = require('client-sessions');

var mongoose = require('mongoose');
mongoose.connect('mongodb://kristine:starthouston!@ds137730.mlab.com:37730/skylinebars');

const Schema = mongoose.Schema;

// Define the user schema'
const userSchema = new Schema({
    fName: { type: String, required: true },
    email: {type: String, required: true, unique: true },
    password: { type: String, required: true },
    });

// Create a User model with defined schema
const User = mongoose.model("User", userSchema);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static("static"));
app.use(session({
    cookieName: 'session',
    secret: 'wooooooooo'
}));

// var client = new pg.Client(connectionString);
// client.connect();

app.post("/login",function(req,res){
    var password = req.body.password;
    User.findOne({email: req.body.email})
        .then(function (result) {
            if (result.password == password) {
                console.log("Login Authenticated");
                res.send({"login":true});
                res.render('/profile');
            } else  {
                console.log("Authentication Failed");}
                res.send({"login":false});
            });
        });

app.get("/signup",function(req,res){
    if (req.session.token) {
        console.log('signed in');
        res.redirect('/profile');
    } else {
        res.render('signup', {session: req.session});
    }
});

app.post("/signup", function(req, res) {
    const new_User = new User ({
        fName: req.body.fname,
        email: req.body.email,
        password: req.body.password
    });
    new_User.save()
    return res.render('/profile');
})




app.get("/favicon.ico",function(req,res){
    res.send("");
});
// universal routing and rendering
app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<Provider store={store}><RouterContext {...renderProps}/></Provider>);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup });
    }
  );
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
