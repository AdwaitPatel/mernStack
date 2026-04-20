const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	_id: Number,
	name: {
		type: String,
		required: true
	},
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


userSchema.pre("find", function (next) {
	console.log("User find is done!!")
	next;
});

userSchema.pre("findByIdAndUpdate", function (next) {
	console.log("User update is done!!")
	next;
});

const User = mongoose.model("User", userSchema);

module.exports = User;


