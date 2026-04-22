const empSchema = require("../validation/empValidation");

const validateEmployee = (req, res, next) => {
	const { error } = empSchema.validate(req.body, {
		abortEarly: false // shows all errors
	});

	if (error) {
		const errors = error.details.map(err => err.message);
		return res.status(400).json({
			success: false,
			errors
		});
	}

	next();
};

module.exports = validateEmployee;