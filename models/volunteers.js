const db = require('../lib/dbConnect');

function createVolunteer(req, res, next) {
  console.log('entering data into volunteer');
  db.none(`INSERT INTO volunteers (username, email, first_name, last_name, age, gender, state, password, qr, user_type, phone) Values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
    [req.body.username, req.body.email, req.body.first_name, req.body.last_name, req.body.age, req.body.gender, req.body.state, req.body.password, req.body.qr, req.body.user_type, req.body.phone])
  // db.one(
  //   `INSERT INTO users (username, email, first_name, last_name, age, gender, zodiac, state, password) Values ($/username/, $/email/, $/first_name/, $/last_name/, $/age/, $/gender/, $/zodiac/, $/state/, bcrypt.hashSync(req.body.user.password, SALTROUNDS));`
  // )
    // Store hashed password
    // password: bcrypt.hashSync(req.body.user.password, SALTROUNDS)
  .then(next())
  .catch(error => next(error));
}

function deleteVolunteer(req, res, next) {
  console.log('entering data into admin');
  db.none(`DELETE FROM volunteers
             WHERE id = $1`,
             [req.params.id] )
  .then(results => {
    res.results = results;
    next();
  })
  .catch(err => next(err));
}

// function editVolunteer(req, res, next) {
//   console.log('entering data into volunteers');
//   db.none(`UPDATE volunteers SET(first_name = $1, last_name = $2, age = $3, state = $4`, [req.body.first_name, req.body.last_name, req.body.age, req.body.state])
//   .then(next())
//   .catch(error => next(error));
// }


function getVolunteerByUsername(username) {
    return db.one(
    `SELECT * FROM volunteers WHERE username=$1;`, [username])
  // .then((user) => {
  //   res.user = user;
  //   console.log(user)
  //   next();
  // })
  // .catch(error => next(error));
  }

function listVolunteers(req, res, next) {
  db.any('SELECT * FROM volunteers;')
    .then((users) => {
      res.users = users;
      next();
    })
    .catch((error) => {
      console.error('Error ', error);
      next(error);
    });
}

function getVolunteer(req, res, next) {
  return db.one(`SELECT * FROM volunteers WHERE username=$1;`, [req.params.username])
    .then((volunteer) => {
      res.volunteer = volunteer;
      next();
    })
    .catch((error) => {
      console.error('Error ', error);
      next(error);
    });
}

module.exports = {
  createVolunteer,
  deleteVolunteer,
  // editVolunteer,
  listVolunteers,
  getVolunteerByUsername,
  getVolunteer,
};
