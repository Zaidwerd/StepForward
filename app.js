require('dotenv').config({ silent: true });
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path')
const methodOverride = require('method-override');

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

const adminRouter = require('./routes/admin')
const volunteerRouter = require('./routes/volunteers')

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/admin', adminRouter);
app.use('/volunteer', volunteerRouter);

app.listen(PORT, () => console.log('Good to Go Captain', PORT))
