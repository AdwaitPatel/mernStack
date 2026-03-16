const http = require("http");
const os = require("os");
const fs = require("fs");

const server = http.createServer((req, res) => {
	// console.log("Request : ", req);
	const reqURL = req.url;
	const reqMethod = req.method;

	// console.log("Request URL : ", reqURL);
	// console.log("Request Method : ", reqMethod);

	/*
	Task ->
	check if log.txt is available if not then create
	keep appending the req logs in log.txt 
	*/

	fs.appendFile("./logs.txt", `${reqURL}`)

	if (reqURL === "/logs") {
		// res
	}
	else if (reqURL === "/systemconfig") {

		const totalMemory = os.totalmem() / 1024 / 1024 / 1024;
		const freeMemory = os.freemem() / 1024 / 1024 / 1024;

		res.end(`
			<h1>System Configuration</h1>
			<p><strong>Total Memory:</strong> ${totalMemory} GB</p>
			<p><strong>Free Memory:</strong> ${freeMemory} GB</p>
		`);
	}
	else if (reqURL === "/") {
		res.end("<h1>Welcome page</h1>");
	}
	else if (reqURL === "/home") {
		res.end("<h1>Home page</h1>");
	}
	else if (reqURL === "/users") {
		res.end("<h1>Users page</h1>");
	}

	// res.end("Hello world");
});

server.listen(8000, () => {
	console.log("Server is running on http://localhost:8000")
});




