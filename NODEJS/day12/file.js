
// commonJS 
// const add = require("./utils")

// ES6
// import functionName from "path"

import { add, GLOBAL_VAR } from "./utils.js";
import { crudFileSync, crudFileAsync } from "./fileSystem.js";

// const output = add(4, 6)
// console.log(`OUTPUT : ${output}`)
// console.log("Global Var : ", GLOBAL_VAR)

// crudFileSync()
crudFileAsync()

