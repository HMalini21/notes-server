const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
  text: {
    required: true,
    type: String,
  },
  date: {
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
});

module.exports = mongoose.model('Data', notesSchema);
