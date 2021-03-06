/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const express      = require('express');
const { createAdmin, getAdminByUsername, listAdmin, deleteAdmin }    = require('../models/admin.js');
// const { authenticate }   = require('../lib/auth');

const adminRouter  = express.Router();

adminRouter.get('/', listAdmin, (req, res) => {
  res.json(res.users.map((user) => {
    const { id, username, password } = user;
    return { id, username, password };
  }));
});

adminRouter.post('/', createAdmin, (req, res) => {
  res.redirect('/');
});

adminRouter.delete('/:id', deleteAdmin,  (req, res) => {
  res.json(res.results);
});

// AdminRouter.put('/:username', editAdmin,  (req, res) => {
//   res.redirect('/');
// });

// adminRouter.get('/:username', getUserByUsername, getUserStats, (req, res) => {
//   res.json(res.user);
// });

module.exports = adminRouter;
