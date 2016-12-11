
/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint no-param-reassign: ["error", { "props": false }] */

const express    = require('express');
const { adminLogIn }  = require('../lib/auth');

// Router
const adminAuthRouter = express.Router();

adminAuthRouter.get('/', (req, res) => {
  res.json('hello');
});

/**
 * Log In and if successful assign res.user._id to the session
 * It uses the logIn middleware from the auth library to parse the form inputs
 * and save the user to the database
 */
adminAuthRouter.post('/', adminLogIn, (req, res) => {
  res.json(res.user);
});

// Logout by assigning null to the userId in the session
adminAuthRouter.delete('/', (req, res) => {
  res.redirect('/');
});

module.exports = adminAuthRouter;
