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

	// Q. Total employess in IT department
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

	// Q. Find average salary for each departent
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

	// Q. Find highest salary for each departent
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

	// Q. Top 3 salaried employees in each dapartment
	// [
	// 	{
	// 		_id: "HR",
	// 		top3: [
	// 			"user1",
	// 			"user2",
	// 			"user3"
	// 		]
	// 	}
	// ]

	// const empData = await Employee.aggregate([
	// 	{
	// 		$sort: {
	// 			salary: -1
	// 		}
	// 	},
	// 	{
	// 		$group: {
	// 			_id: "$department",
	// 			top3: {
	// 				$push: {
	// 					empName: "$name",
	// 					salary: "$salary"
	// 				}
	// 			}
	// 		}
	// 	},
	// 	{
	// 		$project: {
	// 			top3: {
	// 				$slice: ["$top3", 3]
	// 			}
	// 		}
	// 	}
	// ]);

	// Q. count salary by range like 20000-30000
	// [
	// 	{
	// 		_id: "IT",
	// 		range: "10000 - 20000",
	// 		totalEmployess: 5
	// 	}
	// ]

	const empData = await Employee.aggregate([

		{
			$bucket: {
				groupBy: "$salary",
				boundaries: [30000, 50000, 70000, 90000],
				default: "Other",
				output: {
					employees: {
						$push: {
							department: "$department"
						}
					}
				}
			}
		},
		{
			$unwind: "$employees"
		},
		{
			$group: {
				_id: {
					range: "$_id",
					department: "$employees.department"
				},
				totalEmployees: { $sum: 1 }
			}
		}
	]);

	res.json(empData);
}

exports.createNewEmployee = async (req, res) => {
	const newEmployeeData = req.body;

	const newEmployee = await Employee.insertOne(newEmployeeData);

	res.json({
		success: true,
		message: "New Employee created successfully",
		data: newEmployee
	});
}