const adminModel = require('../models/admin');
const volunteerModel = require('../models/volunteers');

function adminLogIn(req, res, next) {
  const userPayload = req.body;

  adminModel.getAdminByUsername(userPayload.username).then((dbUser) => {
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

function volunteerLogIn(req, res, next) {
  const userPayload = req.body;

  volunteerModel.getVolunteerByUsername(userPayload.username).then((dbUser) => {
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
  volunteerLogIn,
  adminLogIn
};
