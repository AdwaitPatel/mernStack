const express = require("express");
const userController = require("../controllers/userController")

const route = express.Router();

route.get("/users", userController.getUsers)
route.get("/users/:id", userController.getUsersById)
route.post("/users/add", userController.addUser)


module.exports = route;