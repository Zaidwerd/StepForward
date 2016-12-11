
/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const express    = require('express');
const { volunteerLogIn }  = require('../lib/auth');

// Router
const volunteerAuthRouter = express.Router();

volunteerAuthRouter.get('/', (req, res) => {
  res.json('hello');
});

/**
 * Log In and if successful assign res.user._id to the session
 * It uses the logIn middleware from the auth library to parse the form inputs
 * and save the user to the database
 */
volunteerAuthRouter.post('/', volunteerLogIn, (req, res) => {
  res.json(res.user);
});

// Logout by assigning null to the userId in the session
volunteerAuthRouter.delete('/', (req, res) => {
  res.redirect('/');
});

module.exports = volunteerAuthRouter;
