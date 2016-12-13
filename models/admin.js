const db = require('../lib/dbConnect');

function createAdmin(req, res, next) {
  console.log('entering data into admin');
  db.none(`INSERT INTO admin (username, email, first_name, last_name, age, gender, state, password, user_type, phone) Values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
    [req.body.username, req.body.email, req.body.first_name, req.body.last_name, req.body.age, req.body.gender, req.body.state, req.body.password, req.body.user_type, req.body.phone])
  // db.one(
  //   `INSERT INTO admin (username, email, first_name, last_name, age, gender, zodiac, state, password) Values ($/username/, $/email/, $/first_name/, $/last_name/, $/age/, $/gender/, $/zodiac/, $/state/, bcrypt.hashSync(req.body.user.password, SALTROUNDS));`
  // )
    // Store hashed password
    // password: bcrypt.hashSync(req.body.user.password, SALTROUNDS)
  .then(next())
  .catch(error => next(error));
}

function deleteAdmin(req, res, next) {
  console.log('entering data into admin');
  db.none(`DELETE FROM admin
             WHERE id = $1`,
             [req.params.id] )
  .then(results => {
    res.results = results;
    next();
  })
  .catch(err => next(err));
}

// function editAdmin(req, res, next) {
//   console.log('entering data into admin');
//   db.none(`UPDATE admin SET(first_name = $1, last_name = $2, age = $3, state = $4`, [req.body.first_name, req.body.last_name, req.body.age, req.body.state])
//   .then(next())
//   .catch(error => next(error));
// }


function getAdminByUsername(username) {
    return db.one(
    `SELECT * FROM admin WHERE username=$1;`, [username])
  // .then((user) => {
  //   res.user = user;
  //   console.log(user)
  //   next();
  // })
  // .catch(error => next(error));
  }

function listAdmin(req, res, next) {
  db.any('SELECT * FROM admin;')
    .then((users) => {
      res.users = users;
      next();
    })
    .catch((error) => {
      console.error('Error ', error);
      next(error);
    });
}

module.exports = {
  createAdmin,
  deleteAdmin,
  // editAdmin,
  listAdmin,
  getAdminByUsername
};
