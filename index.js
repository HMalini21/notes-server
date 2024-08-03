const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const noteRouter = require('./routes/routes');
const { errorHandler } = require('./middlewares/errorHandler.middleware');
const { notfound } = require('./middlewares/notFound.middleware');

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/notes', noteRouter);

database.on('error', (erorr) => {
  console.log(erorr);
});

database.once('connected', () => {
  console.log('Database connected');
});

// 404 handler
app.use(notfound);

// error handler middleware
app.use(errorHandler);

app.listen(1995, () => {
  console.log(`http://localhost:${1995}`);
});
