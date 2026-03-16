const userData = require("../modules/userModules");

exports.getUsers = (req, res) => {
	res.json(userData);
}

exports.getUsersById = (req, res) => {
	const userId = req.params.id;

	const userDataById = userData.users.find(data => data.id == userId)
	if (!userDataById) {
		res.json({
			"message": "Data not found with this id"
		})
	}
	res.json(userDataById);
}

exports.addUser = (req, res) => {
	const userInfo = req.body
	userData.users.push(userInfo)
	res.send("User is added successfully!!")
}

exports.addUserById = (req, res) => {
	const id = req.params.id;
	const name = req.query.name;

	// see headers
	console.log(req.headers)

	userData.users.push({
		id,
		name
	})
	res.send("User is added successfully!!")
}



