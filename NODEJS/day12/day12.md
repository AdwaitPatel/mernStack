# Difference Between Named and Default Import/Export in JavaScript

## Named Export / Import
- Used when exporting **multiple values** from a single file
- Exported values **must be imported using the same name**
- Imported inside `{}` braces
- Order does **not** matter

### Example
```js
// math.js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;

// file.js
import { add, sub } from "./math.js";
```

## Default Export / Import 
- Used when exporting **one main value** from a file
- Can be **imported with any name**
- Imported without `{}`
- Only **one default export allowed per file**

## File System in JS

```js
// ES6 module
import fs from "fs"
// const fs = require("fs")

// read a file
export const fileContent = fs.readFileSync('./demo.txt', "utf-8")
// write in file
fs.writeFileSync("./demo.txt", "New content")
// append content
fs.appendFileSync("./demo.txt", "\nThis is the new appended content")

```

