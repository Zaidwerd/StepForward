/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const express      = require('express');
const { createVolunteer, getVolunteerByUsername, listVolunteers }    = require('../models/volunteers.js');
// const { authenticate }   = require('../lib/auth');

const volunteerRouter  = express.Router();

volunteerRouter.get('/', listVolunteers, (req, res) => {
  res.json(res.users.map((user) => {
    const { id, username, password } = user;
    return { id, username, password };
  }));
});

volunteerRouter.post('/', createVolunteer, (req, res) => {
  res.redirect('/');
});

// adminRouter.delete('/:username', deleteAdmin,  (req, res) => {
//   res.redirect('/');
// });

// AdminRouter.put('/:username', editAdmin,  (req, res) => {
//   res.redirect('/');
// });

// adminRouter.get('/:username', getUserByUsername, getUserStats, (req, res) => {
//   res.json(res.user);
// });

module.exports = volunteerRouter;
