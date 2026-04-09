const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	_id: Number,
	name: String,
	age: Number,
	course: String,
	skills: [String],
	address: {
		city: String,
		pincode: Number
	},
	isActive: Boolean,
	marks: [
		{
			"subject": String,
			"score": Number
		}
	]
}, { versionKey: false }); // here add __v argument to disable the version of the document

const User = mongoose.model("User", userSchema);

module.exports = User;


