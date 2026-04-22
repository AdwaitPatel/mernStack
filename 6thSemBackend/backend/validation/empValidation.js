const Joi = require("joi");

const empSchema = Joi.object({
	id: Joi.number().required().messages({
		"number.base": "id must be a number",
		"number.empty": "id cannot be empty",
		"any.required": "id is required"
	}),

	name: Joi.string().trim().required().messages({
		"string.base": "Name must be a string",
		"string.empty": "Name cannot be empty",
		"any.required": "Name is required"
	}),

	department: Joi.string().trim().required().messages({
		"string.base": "department must be a string",
		"string.empty": "department cannot be empty",
		"any.required": "department is required"
	}),

	salary: Joi.number().required().messages({
		"number.base": "salary must be a number",
		"number.empty": "salary cannot be empty",
		"any.required": "salary is required"
	}),

	age: Joi.number().required().messages({
		"number.base": "age must be a number",
		"number.empty": "age cannot be empty",
		"any.required": "age is required"
	})

});

module.exports = empSchema;