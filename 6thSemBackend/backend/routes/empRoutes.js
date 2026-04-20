const express = require("express");
const empController = require("../controllers/empController")

const route = express.Router();

route.get("/create-emp", empController.createEmployees);
route.get("/agg", empController.aggregateDemo);

module.exports = route;