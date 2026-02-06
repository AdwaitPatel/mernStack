// using dot notation to get the functions
// const functions = require("./utils")
// console.log("🚀 ~ add : ", functions.add(3, 1))
// console.log("🚀 ~ multiplication : ", functions.multi(3, 5))


// using key to get the functions
// const functions = require("./utils")
// console.log("🚀 ~ add : ", functions["add"](3, 1))
// console.log("🚀 ~ multiplication : ", functions["multi"](3, 5))


// using object destructuring to get the functions
const { add, multi } = require("./utils")
// const { add, multi } = functions;
console.log("🚀 ~ add : ", add(3, 1))
console.log("🚀 ~ multiplication : ", multi(3, 5))














