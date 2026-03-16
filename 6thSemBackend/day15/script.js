// ===================== CALL STACK ===================
// call stack executes each line as a one then moves forward
// everything is pushed sequentially not all at once

// const a = () => {
// 	b();
// 	console.log("A is done");
// }

// const b = () => {
// 	console.log("B initial")
// 	setTimeout(() => {
// 		console.log("B timeout after 2 sec");
// 	}, 2000);
// 	console.log("B is done")
// }

// a();

// Call Stack + Event Loop flow
/*
global execution starts
a is pushed
b is pushed
setTimeout is pushed
setTimeout registers timer → moves callback to Web APIs
setTimeout is popped
console.log("B is done") executes
b is popped
console.log("A is done") executes
a is popped
(after 2 seconds)
callback moves from task queue to call stack
callback executes
*/



// CallStack Overflow -> continously adding to stack but not executing it

// const fun = () => {
// 	fun();
// }
// fun();

// ===================== EVENT LOOP ===================
// triggers the callback functions (setTimeout, setInterval etc)
// Until the call stack is not empty event loop will not be executed
// Event loop executes in "QUEUE" manner

// const a = () => {
// 	b();
// 	console.log("A is done");
// }

// const b = () => {
// 	console.log("B initial")
// 	setTimeout(() => {
// 		console.log("B first");
// 	}, 2000);
// 	setTimeout(() => {
// 		console.log("B second");
// 	}, 0);
// 	console.log("B is done")
// }

// a();


// ==================== Micro & Macro tasks ========================

// const a = () => {
// 	b();
// 	Promise.resolve().then(() => {
// 		console.log("A Promise");
// 	})
// 	console.log("A is done");
// }

// const b = () => {
// 	console.log("B initial")
// 	setTimeout(() => {
// 		console.log("timeout 1");
// 	}, 2000);
// 	setTimeout(() => {
// 		console.log("timeout 2");
// 	}, 0);

// 	// Even though it is last in queue it will be executed first as it has higher priority
// 	Promise.resolve().then(() => {
// 		console.log("B Promise")
// 	});

// 	setTimeout(() => {
// 		console.log("timeout 3")
// 	}, 500);
// 	console.log("B is done")
// }

// a();

// Microtask Queue => [promise]
// Macrotask Queue => [first, second]

// Priority
// Microtasks(promise, async/await) => Macrotasks(setTimeout, interval)


// ==================== CALLBACKS ============================
// a function passed as an argument to another function

const fetchData = (callback) => {
	callback("Data fetched!!");
};

fetchData((data) => console.log(data));

// Callback hell happens when callbacks are nested inside other callbacks many times, creating messy, pyramid-shaped code.
// Callback hell is usually avoided using Promises or async/await.


