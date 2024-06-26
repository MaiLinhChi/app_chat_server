const Joi = require('joi');

const signUp = Joi.object({
    fullName: Joi.string().min(2).required(),
    address: Joi.string().min(2).required(),
    gender: Joi.string().valid('male', 'femade').required(),
    email: Joi.string().pattern(new RegExp('gmail.com$')).email().required(),
    password: Joi.string().min(6).max(30).required(),
});

const signIn = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
});

module.exports = {
    signUp,
    signIn,
};
