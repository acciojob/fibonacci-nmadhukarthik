function fibonacci(num) {
// your code here
	if (num==1) 
	{ return 0 }

	if(num==2)
	{ return 1 }
		
	let fib = fibonacci(num-1) + fibonacci(num-2)
	return fib;
}

module.exports = fibonacci;
