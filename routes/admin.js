const adminRouter = require('express').Router();

adminRouter.get('/', (req, res) => {
  res.json('hello admin')
});

module.exports = adminRouter;
