const userSchema = require("../validation/userValidation");

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body, {
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

module.exports = validateUser;