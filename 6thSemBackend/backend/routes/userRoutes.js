const express = require("express");
const userController = require("../controllers/userController")
const validateUser = require("../middlewares/validateUser");
const route = express.Router();

route.get("/users", userController.getUsers);
route.get("/users/:id", userController.getUsersById);
route.post("/users", userController.addUser);
route.put("/users/:id", userController.updateUser);
route.delete("/users/:id", userController.deleteUser);

route.get("/users/add/:id", userController.addUserById);

// user registeration using JOI
route.post("/register", validateUser, (req, res) => {
	// If validation passes, this runs
	res.json({
		success: true,
		message: "User validated successfully",
		data: req.body
	});
})

module.exports = route;