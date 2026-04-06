const express = require("express");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

require("dotenv").config({
	path: ".env.dev"
});

const jwtToken = process.env.jwtToken;

// Routes Import
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

//  tasks -> 1. create role based middlewares

// to use EJS set this up kinda middleware for EJS
app.set("view engine", "ejs");

const userData = {
	home: {title : "Home Page"},
	login: {title : "Login Page"},
	about: {title : "About"},
}

app.get("/home", (req, res) => {
	// res.render("./views/home.ejs"); Don't need to specify full path and .ejs as already set up above

	res.render("home", {college: "GLA", ...userData});
})

app.get("/about", (req, res) => {
	res.render("about", userData.about);
});

app.get("/login", (req, res) => {
	res.render("login", userData.login);
});



// create logs for each requests to server
const createLogs = (req, res, next) => {
	const logsDir = path.join(__dirname, "logs");

	if (!fs.existsSync(logsDir)) {
		fs.mkdirSync(logsDir);
	}

	const logFilePath = path.join(__dirname, "logs", "request.log")

	const logs = {
		method: req.method,
		url: req.originalUrl,
		host: req.headers.host,
		ip: req.ip,
		body: req.body || "No body",
		params: req.params || "No parameters",
		query: req.query || "No query parameters",
	};

	fs.appendFile(
		logFilePath,
		JSON.stringify({
			...logs,
			timestamp: new Date().toISOString()
		}) + "\n",
		(err) => {
			if (err) {
				console.error("Error writing log : ", err);
			}
		}
	);

	next();
}
app.use(createLogs);

const adminMiddleware = (req, res, next) => {
	const token = req.headers?.authorization?.split(" ")[1];

	if (!token) {
		res.send("Token not found");
	}

	try {
		next();
	} catch (err) {
		res.send("Not Authorized for Admin")
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
// app.use("/", authMiddleware, adminMiddleware,userRouter);
app.use("/", userRouter);
app.use("/auth", authRouter);
app.use("/student-api", studentRouter);

module.exports = app;