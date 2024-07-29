const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const noteRouter = require('./routes/routes');

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

const app = express();

app.use(express.json());

app.use('/notes', noteRouter);

database.on('error', (erorr) => {
  console.log(erorr);
});

database.once('connected', () => {
  console.log('Database connected');
});

app.listen(1995, () => {
  console.log(`http://localhost:${1995}`);
});
