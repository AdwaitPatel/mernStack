import fs from "fs";
import path from "path";

// this is os dependent not good ❌
// const filePath = "./functions/functions.js"

// # This "path" function will not check the if file/dir exisits or not

// using path will work in every os
const filePath = path.join("functions", "functions.js")
console.log("Relative Path : ", filePath)

// get the root dir path (absolute path)
const absolutePath = path.resolve("functions")
console.log("Absolute Path : ", absolutePath)

const fileDir = path.dirname("functions/functions.js")
console.log(fileDir)

const fileExtension = path.extname("file.js")
console.log(fileExtension)

// fs.readFile(filePath, "utf-8", (err, data) => {
// 	console.log("Content : ", data);
// });

// =====================

const newfilePath = path.join("functions", "dir1", "demo.txt")
console.log(newfilePath)

// fs.readFile(newfilePath, "utf-8", (err, data) => {
// 	console.log("new file Content : ", data);
// });

// ====================== OS functions ==================

import os from "os";

console.log("Platform : ", os.platform())
console.log("Architechure : ", os.arch()) 
console.log("Memory : ", os.freemem()) // Returns FREE (unused) system memory, not total RAM in bytes

const freeMemoryInGB = (os.freemem() / 1024 / 1024 / 1024)
console.log("Memory in GB : ", freeMemoryInGB)

console.log("Total Memory in GB : ", (os.totalmem()/ 1024 / 1024 / 1024))











