const express = require("express");
const userRouter = require("./routes/userRoutes");
const studentRouter = require("./routes/studentRoutes");

const app = express();

// middleware to read json from post request
app.use(express.json());

// custom middlewares
const customMiddleware = (res, req, next) => {
	console.log("Custom middleware 1 used !!")
	next();
}

app.use(customMiddleware);

app.use("/", userRouter);
app.use("/student-api", studentRouter);

module.exports = app;