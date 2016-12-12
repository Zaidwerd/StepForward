const db = require('../lib/dbConnect');

function createEvent(req, res, next) {
  console.log('entering data into event');
  db.none(`INSERT INTO events (admin_id, event_name, event_date, event_time, event_location, event_contact_name, event_contact_phone, event_contact_email) Values ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [req.body.admin_id, req.body.event_name, req.body.event_date, req.body.event_time, req.body.event_location, req.body.event_contact_name, req.body.event_contact_phone, req.body.event_contact_email])
  // db.one(
  //   `INSERT INTO admin (username, email, first_name, last_name, age, gender, zodiac, state, password) Values ($/username/, $/email/, $/first_name/, $/last_name/, $/age/, $/gender/, $/zodiac/, $/state/, bcrypt.hashSync(req.body.user.password, SALTROUNDS));`
  // )
    // Store hashed password
    // password: bcrypt.hashSync(req.body.user.password, SALTROUNDS)
  .then(next())
  .catch(error => next(error));
}

function deleteEvent(req, res, next) {
  console.log('entering data into events');
  db.none(`DELETE FROM events
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

function listEvents(req, res, next) {
  db.any('SELECT * FROM events;')
    .then((event) => {
      res.event = event;
      next();
    })
    .catch((error) => {
      console.error('Error ', error);
      next(error);
    });
}

module.exports = {
  createEvent,
  deleteEvent,
  // editAdmin,
  listEvents,
};
