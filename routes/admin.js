/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */

const express      = require('express');
const { createAdmin, getAdminByUsername, listAdmin }    = require('../models/admin.js');
// const { authenticate }   = require('../lib/auth');

const AdminRouter  = express.Router();

AdminRouter.get('/', listAdmin, (req, res) => {
  res.json(res.users.map((user) => {
    const { id, username, password } = user;
    return { id, username, password };
  }));
});

AdminRouter.post('/', createAdmin, (req, res) => {
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

module.exports = adminRouter;
