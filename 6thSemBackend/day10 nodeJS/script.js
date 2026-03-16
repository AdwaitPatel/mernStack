// console.log('first line')

// Non-Blocking code
// setTimeout(() => {
// 	console.log("second line")
// }, 0);

// const id = setInterval(() => {
// 	console.log("Interval executed ✅")
// }, 3000);

// setTimeout(() => {
// 	clearInterval(id);
// 	console.log("Interval ended ❌")
// }, 12500); 

// Blocking code
// for (let i = 0; i <= 5e9; i++) {}


// console.log("third line")


// =========================

// console.log(1 + -1) // here -1 is uni negative
// console.log(1 + +1) // uni positive
// console.log(1 + '1')
// console.log(1 + -'1')
// console.log(1 + +'1')
// console.log("A" - 1)


// =========================

const val = 10
console.log(val)

const getVal = () => {
	val = 11
	let number = 25
	console.log(val)
}

getVal();

console.log(val)
console.log(number)
