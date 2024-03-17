function fibonacci(num) {
// your code here
	if(num==1)
	{ return 0 }

	if(num==2)
	{ return 1 }

	let fibNum = [0,1]

	for (let i = 2; i <= num; i++)
	{ fibNum[i] =  fibNum[i-1] + fibNum[i-2] }

	return fibNum[num-1]
}

module.exports = fibonacci;
