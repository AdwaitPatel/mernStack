const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().trim().min(3).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name cannot be empty",
    "string.min": "Name must be at least 3 characters long",
    "any.required": "Name is required"
  }),

  phone: Joi.string().pattern(/^[0-9]{10}$/).required().messages({
    "string.base": "Phone must be a string",
    "string.empty": "Phone number cannot be empty",
    "string.pattern.base": "Phone number must be exactly 10 digits",
    "any.required": "Phone number is required"
  }),

  email: Joi.string().email().required().messages({
    "string.email": "Invalid email format",
    "string.empty": "Email cannot be empty",
    "any.required": "Email is required"
  }),
  
  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters",
    "string.empty": "Password cannot be empty",
    "any.required": "Password is required"
  })
});

module.exports = userSchema;