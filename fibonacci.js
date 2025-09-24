// Plain Iteration 

function fibonacci (num) {
	let fibonacciNums = [];
	for (let i = 0; i < num; i++) {
		if (fibonacciNums.length < 2) {
			fibonacciNums.push(i);
		}
		else {
			fibonacciNums.push(fibonacciNums[i-1] + fibonacciNums[i-2]);
		}
	}
	console.log(fibonacciNums);
}

fibonacci(8);


// Recursive Solution

let num = 8;
let count = 1;

function fibonacciRecur(num) {
	console.log(`This is printed ${count} times.`);
	if (num === 2) return [0, 1];
	count++;
	let arr = fibonacciRecur(num - 1);
	arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	
	return arr;
}

console.log(fibonacciRecur(num));

