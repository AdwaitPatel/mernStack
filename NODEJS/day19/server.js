const express = require("express");
const userRouter = require("./routes/userRoutes");

const app = express();
const PORT = 8000;

// middleware to read json from post request
app.use(express.json());

app.use("/", userRouter);


// Dynamic parameters
// app.get("/users/:id", (req, res) => {
// 	const userId = req.params.id;

// 	res.json({
// 		"id": userId,
// 		"name": "adp",
// 		"rollno": 7,
// 	})
// })

app.listen(PORT, () => {
	console.log(`Sever is running on http://localhost:${PORT}`);
});