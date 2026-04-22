const mongoose = require("mongoose");

const empSchema = mongoose.Schema({
	id: Number,
	name: {
		type: String,
		required: true
	},
	department: String,
	salary: Number,
	age: Number,
}, { versionKey: false });

const Employee = mongoose.model("Employee", empSchema);

module.exports = Employee;


