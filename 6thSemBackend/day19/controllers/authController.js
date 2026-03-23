const jwt = require("jsonwebtoken");
require("dotenv").config({
	path: ".env.dev"
});

const jwtToken = process.env.jwtToken;

exports.getAuthToken = (req, res) => {
	const userName = req.query.username;
	const email = req.query.email;

	console.log(jwtToken)
	const token = jwt.sign({
		userName,
		email
	}, jwtToken)

	res.json({ token });
};



