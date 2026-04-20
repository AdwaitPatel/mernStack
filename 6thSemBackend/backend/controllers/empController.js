const Employee = require("../models/employee.models");

exports.createEmployees = (req, res) => {
	const departments = ["HR", "finance", "Sales", "IT"];

	const data = [];

	for (let i = 1; i <= 120; i++) {
		data.push({
			id: i,
			name: "User" + i,
			department: departments[i % 4],
			salary: Math.floor(Math.random() * 50000) + 30000,
			age: Math.floor(Math.random() * 15) + 22,
		});
	}

	Employee.insertMany(data);
	res.json({
		success: true,
		message: "New employees are created"
	});
}


exports.aggregateDemo = async (req, res) => {

	// Total employess in IT department
	// const empData = await Employee.aggregate([
	// 	{
	// 		"$match": {
	// 			"department": "IT"
	// 		}
	// 	},
	// 	{
	// 		"$group": {
	// 			_id: "$department",
	// 			count: {
	// 				"$sum": 1
	// 			}
	// 		}
	// 	}
	// ]);

	// find average salary for each departent
	// const empData = await Employee.aggregate([
	// 	{
	// 		"$group": {
	// 			_id: "$department",
	// 			avgSalary: {
	// 				$avg: "$salary"
	// 			}
	// 		}
	// 	}
	// ]);

	// find highest salary for each departent
	// const empData = await Employee.aggregate([
	// 	{
	// 		"$group": {
	// 			_id: "$department",
	// 			highestSalary: {
	// 				$max: "$salary"
	// 			}
	// 		}
	// 	}
	// ]);

	// top 3 salaried employees in each dapartment

	[
		{
			department: "HR",
			top3: [
				"Adi",
				"Padi",
				"dadi"
			]
		},
		{
			department: "HR",
			top3: [
				"Adi",
				"Padi",
				"dadi"
			]
		}
	]

	const empData = await Employee.aggregate()
	

	// count salary by range like 1lakh-2lakh
	[
		{
			_id: "IT",
			range: "10000 - 50000",
			totalEmployess: 5
		}
	]

	
	res.json(empData);
}