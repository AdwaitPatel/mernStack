const app = require("./app")
const connectDB = require("./models/db")

// env configs
require("dotenv").config({
	path: ".env.prod",  // env for production
	// path: ".env.dev"  // env for production
});

// mongoDB connection
connectDB();

const PORT = process.env.PORT || 3000;

console.log("Env type : ", process.env.ENV_TYPE)

app.listen(PORT, () => {
	console.log(`Sever is running on http://localhost:${PORT}`);
});