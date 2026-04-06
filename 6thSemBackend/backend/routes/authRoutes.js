const express = require("express");
const authController = require("../controllers/authController")

const route = express.Router();

route.get("/login", authController.getAuthToken)
// route.get("/signup", userController.signup)


module.exports = route;