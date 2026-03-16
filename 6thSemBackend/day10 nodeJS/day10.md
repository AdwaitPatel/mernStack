# NodeJS
- JS Runtime environment
- JS is single threaded and synchronous language
- Blocking vs Non-Blocking code
- Call stack and event loop
- even though name is callstack it executes callbacks like queues(FIFO).  

```js
// Blocking code
for (let i = 0; i <= 5e9; i++) {}

// Non-Blocking code
setTimeout(() => console.log("nb"), 2000)
```

- Event loop checks if the call stack is empty or not  

|       | Redeclaration | Reassignment |
|-------|---------------|--------------|
| const |      ❌       |      ❌      |
| let   |      ❌       |      ✅      |
| var   |      ✅       |      ✅      |  

## Scoped Variables

- vars declared inside new scoped like a functional or any new block.

