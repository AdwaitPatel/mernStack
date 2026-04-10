const User = require("../models/user.models");

exports.getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json({
			success: true,
			message: "All users data fetched",
			data: users
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Something went wrong",
			error: error.message
		});
	}
}

exports.getUsersById = async (req, res) => {
	try {
		const userId = req.params.id;

		const userData = await User.findOne({ _id: userId });

		if (!userData) {
			res.json({
				success: false,
				message: "Data not found with this id"
			})
		}

		res.status(200).json({
			success: true,
			message: "User fetched successfully",
			data: userData
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Error fetching user",
			error: error.message
		});
	}
}

exports.addUser = async (req, res) => {
	try {
		const userInfo = req.body;

		const existingUser = await User.findOne({ _id: userInfo._id });

		if (existingUser) {
			return res.status(400).json({
				success: false,
				message: "User already exists"
			});
		}
		const newUser = await User.create(userInfo);

		res.status(201).json({
			success: true,
			message: "User created successfully",
			data: newUser
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Error creating user",
			error: error.message
		});
	}
}

exports.updateUser = async (req, res) => {
	try {
		const id = req.params.id;
		const userUpdateInfo = req.body;

		const updatedUser = await User.findByIdAndUpdate(
			id,
			userUpdateInfo,
			{ new: true }
		);

		if (!updatedUser) {
			return res.status(404).json({
				success: false,
				message: "User not found"
			});
		}

		res.status(200).json({
			success: true,
			message: "User updated successfully",
			data: updatedUser
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Error updating user",
			error: error.message
		});
	}

}

exports.deleteUser = async (req, res) => {
	try {
		const id = req.params.id;

		const deletedUser = await User.findByIdAndDelete({ _id: id });

		if (!deletedUser) {
			return res.status(404).json({
				success: false,
				message: "User not found"
			});
		}

		res.status(200).json({
			success: true,
			message: "User is deleted successfully",
			data: deletedUser
		});

	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Error deleting user",
			error: error.message
		});
	}
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



