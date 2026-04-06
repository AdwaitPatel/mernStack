const app = require("./app")
const mongoose = require("mongoose")

// env configs
require("dotenv").config({
	path: ".env.prod",  // env for production
	// path: ".env.dev"  // env for production
})

mongoose.connect("mongodb://localhost:27017/classDB")
	.then(() => console.log("Connected to DB"))
	.catch((err) => console.log(err))

const PORT = process.env.PORT || 3000;

console.log("Env type : ", process.env.ENV_TYPE)

app.listen(PORT, () => {
	console.log(`Sever is running on http://localhost:${PORT}`);
});