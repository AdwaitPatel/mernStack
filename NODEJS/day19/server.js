const express = require("express");
const userRouter = require("./routes/userRoutes");

const app = express();

// env
require("dotenv").config({
	path: ".env.prod",  // env for production
	// path: ".env.dev"  // env for production
})

const PORT = process.env.PORT || 8000;

console.log(process.env.PORT)
console.log(process.env.API_TOKEN)
console.log(process.env.ENV_TYPE)

// middleware to read json from post request
app.use(express.json());


// custom middlewares
const customMiddleware = (res, req, next) => {
	console.log("Custom middleware 1 used !!")
	next();
}

app.use(customMiddleware);

app.use("/", userRouter);

app.listen(PORT, () => {
	console.log(`Sever is running on http://localhost:${PORT}`);
});