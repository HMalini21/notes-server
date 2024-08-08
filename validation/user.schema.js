const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const userUpdateschema = Joi.object({
  username: Joi.string().optional(),
  password: Joi.string().optional(),
});

module.exports = {
  userSchema,
  userUpdateschema,
};
