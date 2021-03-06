/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const express      = require('express');
const { createVolunteer, listVolunteers, deleteVolunteer, getVolunteer }    = require('../models/volunteers.js');
// const { authenticate }   = require('../lib/auth');

const volunteerRouter  = express.Router();

volunteerRouter.get('/', listVolunteers, (req, res) => {
  res.json(res.users.map((user) => {
    const { id, username, password, qr } = user;
    return { id, username, password, qr };
  }));
});

volunteerRouter.post('/', createVolunteer, (req, res) => {
  res.redirect('/');
});

volunteerRouter.delete('/:id', deleteVolunteer,  (req, res) => {
  res.json(res.results);
});

// AdminRouter.put('/:username', editAdmin,  (req, res) => {
//   res.redirect('/');
// });

volunteerRouter.get('/:username', getVolunteer, (req, res) => {
  res.json(res.volunteer);
});

module.exports = volunteerRouter;
