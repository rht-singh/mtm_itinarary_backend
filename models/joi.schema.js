const Joi = require("@hapi/joi");

const createQuotation = Joi.object({
  title: Joi.string().required(),

  amount: Joi.number().required(),

  durations: Joi.string().required().trim(),

  package_start_Place: Joi.string().required().trim(),

  min_age: Joi.number().required(),

  max_guest: Joi.number().required(),
  img_url: Joi.string().required().trim(),
});

module.exports = createQuotation;
