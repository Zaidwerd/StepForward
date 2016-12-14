// require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

// SOCKET IO
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
  socket.on('server-chat', msg => {
    socket.broadcast.emit('chatroom', {msg : msg});
  });

  socket.on('disconnect', () => console.log('user disconnected'));
});

http.listen(PORT, () => console.log('listen on', PORT));

const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

const adminRouter = require('./routes/admin');
const volunteerRouter = require('./routes/volunteers');
const adminAuthRouter = require('./routes/adminauth');
const volunteerAuthRouter = require('./routes/volunteerAuth');
const eventsRouter = require('./routes/events');

app.use(logger(isDev ? 'dev' : 'common'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'dist')));

app.use((err, req, res, next) => {
  console.error(err, next);
  res.status(500).send('Something broke!');
});

app.use('/admin', adminRouter);
app.use('/volunteer', volunteerRouter);
app.use('/auth/admin', adminAuthRouter);
app.use('/auth/volunteer', volunteerAuthRouter);
app.use('/events', eventsRouter);


// app.listen(PORT, () => console.log('Good to Go Sir', PORT))
