const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const errorHandlers = require('./middlewares/error');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const publicacionRouter = require('./routes/publicacion');

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json({}));
app.use(helmet());
app.use(cors({ origin: true, credentials: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/publicaciones', publicacionRouter);


app.use(errorHandlers);

module.exports = app;