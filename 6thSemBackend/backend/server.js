const app = require("./app")
const mongoose = require("mongoose")

// env configs
require("dotenv").config({
	path: ".env.prod",  // env for production
	// path: ".env.dev"  // env for production
})

const MONGO_DB_URI = process.env.MONGO_DB_URI;
const DATABASE_NAME = process.env.DATABASE_NAME;

// mongoDB connection
mongoose.connect(`${MONGO_DB_URI}/${DATABASE_NAME}`)
	.then(() => console.log("Connected to DB"))
	.catch((err) => console.log(err))

const PORT = process.env.PORT || 3000;

console.log("Env type : ", process.env.ENV_TYPE)

app.listen(PORT, () => {
	console.log(`Sever is running on http://localhost:${PORT}`);
});