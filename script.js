function fibonacci(num) {
// your code here
	if(num==1)
	{ return 0 }

	if(num==2)
	{ return 1 }

	let nthterm = fibonacci(num-1) + fibonacci(num-2)
	return nthterm 
}

module.exports = fibonacci;
