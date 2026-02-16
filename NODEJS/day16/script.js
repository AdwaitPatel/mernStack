/*
Three states of promise => pending(initial state), success, failure
*/

// const fetchData = new Promise((resolve, reject) => {
// 	const success = true;
// 	if (success) {
// 		resolve("Data fetched!")
// 		console.log("Data is fetched successfully!!")
// 	} else {
// 		console.log("Data not found!")
// 		reject("Rejected ~ Data not found")
// 	}
// })

// fetchData
// 	.then((data) => console.log(data))
// 	.catch((err) => console.log(err))

// .then chaining when returned taken by another .then as input


// async/await (await executes when the call stack is empty)

// const sample = async () => {
// 	console.log("Function started")

// 	await fetch("https://jsonplaceholder.typicode.com/comments/1")
// 		.then(response => response.json())
// 		.then(json => console.log(json));


// 	// const data = await fetch("https://jsonplaceholder.typicode.com/comments/2")
// 	// const finalData = await data.json();
// 	// console.log(finalData)
	

// 	console.log("Function ended");
// }

// console.log("Start")
// sample();
// console.log("Ended")


// "sequential execution" (here the first await will wait for it to complete then the second await will be executed)
const sample1 = async () => {

	const res1 = await fetch("https://jsonplaceholder.typicode.com/comments/1")
	.then(response => response.json())
	.then(json => console.log("Response 1 => ", json))

	const res2 = await fetch("https://jsonplaceholder.typicode.com/comments/2")
	.then(response => response.json())
	.then(json => console.log("Response 2 => ", json))
}

// sample1();


//" parallel execution" (here the both fetch executes parallely)
const sample = async () => {

	const res1 = fetch("https://jsonplaceholder.typicode.com/comments/1")
	.then(response => response.json())

	const res2 = fetch("https://jsonplaceholder.typicode.com/comments/2")
	.then(response => response.json())

	const a = await res1;
	const b = await res2;

	console.log("b => ", b);
	console.log("a => ", a);
}

// sample();
