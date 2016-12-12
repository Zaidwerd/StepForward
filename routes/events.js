/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const express      = require('express');
const { createEvent, listEvents, deleteEvent}    = require('../models/events.js');
// const { authenticate }   = require('../lib/auth');

const eventsRouter  = express.Router();

eventsRouter.get('/', listEvents, (req, res) => {
  res.json(res.users.map((user) => {
    const { id, username, password } = user;
    return { id, username, password };
  }));
});

eventsRouter.post('/', createEvent, (req, res) => {
  res.redirect('/');
});

eventsRouter.delete('/:id', deleteEvent,  (req, res) => {
  res.json(res.results);
});

// AdminRouter.put('/:username', editAdmin,  (req, res) => {
//   res.redirect('/');
// });

// adminRouter.get('/:username', getUserByUsername, getUserStats, (req, res) => {
//   res.json(res.user);
// });

module.exports = eventsRouter;
