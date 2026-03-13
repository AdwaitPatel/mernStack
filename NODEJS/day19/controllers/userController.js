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

