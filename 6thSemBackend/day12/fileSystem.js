
import fs from "fs";

// blocking code -> synchronous
export const crudFileSync = () => {
	console.log("=============== Started 🚀 ===============")

	// read a file
	const fileContent = fs.readFileSync('./demo.txt', "utf-8")
	console.log(fileContent)

	// add new content(it'll remove the existing content)
	fs.writeFileSync("./demo.txt", "\nNew content from fs")

	const newfileContent = fs.readFileSync('./demo.txt', "utf-8")
	console.log("New content :-")
	console.log(newfileContent)

	// append a content in a file
	fs.appendFileSync("./demo.txt", "\nThis is the new appended content")

	const appendedfileContent = fs.readFileSync('./demo.txt', "utf-8")
	console.log("Appended content :-")
	console.log(appendedfileContent)

	console.log("=============== Ended 🚀 ===============")
}

// non-blocking code -> Asynchronous
export const crudFileAsync = () => {
	console.log("=============== Started 🚀 ===============")

	// read a file
	const fileContent = fs.readFile("./demo.txt", "utf-8", (err, data) => {
		if (err) {
			console.log("Read file error : ", err)
		} else {
			console.log(data)
		}
	})

	// add new content(it'll remove the existing content)
	// fs.writeFile("./demo.txt", )

	// const newfileContent = fs.readFileSync('./demo.txt', "utf-8")
	// console.log("New content :-")
	// console.log(newfileContent)

	// append a content in a file
	// fs.appendFileSync("./demo.txt", "\nThis is the new appended content")

	// const appendedfileContent = fs.readFileSync('./demo.txt', "utf-8")
	// console.log("Appended content :-")
	// console.log(appendedfileContent)

	console.log("=============== Ended 🚀 ===============")
}








