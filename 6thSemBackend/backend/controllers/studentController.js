const userData = require("../models/user.models");

exports.getUsers = (req, res) => {
	res.json(userData);
}

