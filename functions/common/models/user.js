const Joi = require('@hapi/joi');

const id = Joi.string()
.alphanum()
.required();

const schema = Joi.object({
    id: id,

    firstName: Joi.string(),

    lastName: Joi.string(),

    email: Joi.string(),

    bio: Joi.string(),

    imgURL: Joi.string()
})

module.exports = schema;
module.exports.id = id;