const userData = require("../modules/userModules");

exports.getUsers = (req, res) => {
	res.json(userData);
}

