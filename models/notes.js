const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
  text: {
    required: true,
    type: String,
  },
  date: {
    required: true,
    type: Date,
  },
});

module.exports = mongoose.model('Data', notesSchema);
