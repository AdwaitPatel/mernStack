const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
	originalUrl: {
		type: String,
		required: true
	},
	shortUrl: {
		type: String,
		required: true
	}
});

const URL = mongoose.model("Url", urlSchema, "url");

module.exports = URL;