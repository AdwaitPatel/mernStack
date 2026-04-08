const { default: chalk } = require("chalk");
const mongoose = require("mongoose");

require("dotenv").config({
	path: ".env.prod",  // env for production
	// path: ".env.dev"  // env for production
});

const MONGO_DB_URI = process.env.MONGO_DB_URI;
const DATABASE_NAME = process.env.DATABASE_NAME;

const connectDB = async () => {
	await mongoose.connect(`${MONGO_DB_URI}/${DATABASE_NAME}`)
		.then(() => console.log(chalk.green(`Connected to DB ${DATABASE_NAME}`)))
		.catch((err) => console.log(chalk.red(err)));
}

module.exports = connectDB;