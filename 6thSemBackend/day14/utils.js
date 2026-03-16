
const add = (a, b) => a + b;
const multi = (a, b) => a * b;

module.exports = { add, multi } // ✅ Send in object if thier are multiple variables

// module.exports = multi; ❌ This will not work as only multi will go their not add function

