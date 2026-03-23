const express = require("express");
const jwt = require("jsonwebtoken");

require("dotenv").config({
	path: ".env.dev"
});

const jwtToken = process.env.jwtToken;

// Routes
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const studentRouter = require("./routes/studentRoutes");

const app = express();

// middleware to read json from post request
app.use(express.json());

const authMiddleware = (req, res, next) => {
	const token = req.headers?.authorization?.split(" ")[1];

	if (!token) {
		res.send("Token not found");
	}

	try {
		const decoded = jwt.verify(token, jwtToken);
		req.user = decoded;
		console.log("~ 🚀 authMiddleware ~ decoded : ", decoded);
		next();
	} catch (err) {
		res.send("Invalid Token")
	}
}

const adminMiddleware = (req, res, next) => {
	const token = req.headers?.authorization?.split(" ")[1];

	if (!token) {
		res.send("Token not found");
	}

	try {
		next();
	} catch (err) {
		res.send(" Admin")
	}
}

// app.use()

// custom middlewares
// const customMiddleware = (res, req, next) => {
// 	console.log("Custom middleware 1 used !!")
// 	next();
// }
// app.use(customMiddleware);

// this is being used for all routes
// app.use(authMiddleware)

// to middleware work only for some specific routes
app.use("/", authMiddleware, adminMiddleware,userRouter);
app.use("/auth", authRouter);
app.use("/student-api", studentRouter);

module.exports = app;