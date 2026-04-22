const express = require("express");
const empController = require("../controllers/empController");
const validateEmployee = require("../middlewares/validateEmp");

const route = express.Router();

route.get("/create-emp", empController.createEmployees);
route.get("/agg", empController.aggregateDemo);

// saving new employee with JOI
route.post("/create", validateEmployee, empController.createNewEmployee);

module.exports = route;