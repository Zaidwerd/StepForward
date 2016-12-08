const adminModel = require('../models/admin');
const volunteersModel = require('../models/volunteers');

function logIn(req, res, next) {
  const userPayload = req.body;

  userModel.getUserByUsername(userPayload.username).then((dbUser) => {
    const matches = userPayload.password === dbUser.password;

    if (matches) {
      res.user = dbUser;
      next();
    } else {
      res.error = true;
      next();
    }
  })
      /* NOTE: NO USERS or all ERRORS*/
      .catch((error) => {
        console.error('Error ', error);
        res.error = error;
        next();
      });
}

module.exports = {
  logIn,
};
