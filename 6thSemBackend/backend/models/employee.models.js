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
}, { versionKey: false }); // here add __v argument to disable the version of the document

const Employee = mongoose.model("Employee", empSchema);

module.exports = Employee;


