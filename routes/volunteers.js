const volunteerRouter = require('express').Router();

volunteerRouter.get('/', (req, res) => {
  res.json('howdy volunteer')
});

module.exports = volunteerRouter;
