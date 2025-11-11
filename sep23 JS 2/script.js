// 1.  Sum of Digits

function digitSum(num) {
	let sum = 0;

	while (num > 0) {
		let ld = num % 10;
		sum += ld;
		num = Math.floor(num / 10);
	}
	return sum;
}

// take input from terminal

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Enter a number: ', (answer) => {
	console.log(`Sum of Digits = ${digitSum(answer)}`);
	rl.close();
});

