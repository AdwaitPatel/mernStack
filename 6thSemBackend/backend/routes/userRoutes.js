const express = require("express");
const userController = require("../controllers/userController")

const route = express.Router();

route.get("/users", userController.getUsers);
route.get("/users/:id", userController.getUsersById);
route.post("/users", userController.addUser);
route.put("/users/:id", userController.updateUser);
route.delete("/users/:id", userController.deleteUser);

route.get("/users/add/:id", userController.addUserById);

module.exports = route;