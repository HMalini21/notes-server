const Joi = require('joi');

const notesSchema = Joi.object({
  text: Joi.string().required(),
});

module.exports = notesSchema;
