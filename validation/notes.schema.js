const Joi = require('joi');

const notesSchema = Joi.object({
  text: Joi.string().required(),
});

const notesUpdateSchema = Joi.object({
  text: Joi.string().optional(),
});

module.exports = { notesSchema, notesUpdateSchema };
