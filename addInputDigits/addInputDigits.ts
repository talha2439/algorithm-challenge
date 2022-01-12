function addInputDigits(param: number) {
	var nums = param.toString().split('');
	var total = 0;
	for(let i = 0; i < nums.length; i++){
		total += parseInt(nums[i]);
	}
	return total;
}

console.log(addInputDigits(46));


function addInputDigits1(param: any) {
	const nums = param.toString().split('');

	return nums.reduce((a: string, b: string) => {
		return parseInt(a) + parseInt(b);
	});
}


console.log(addInputDigits1(23));