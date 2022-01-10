function absoluteValue(a: number[]){
	const isEven = a.length % 2 === 0;

	return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValue([2,4,7,5,6]));
console.log(absoluteValue([2,4,7,5,6,8]));
console.log(absoluteValue([2,4,7]));


function absoluteValue1(a: number[]){
	const isEven = a.length % 2;
	const length = a.length;
	const getVal = length / 2;

	if(isEven == 0){
		const median = a[getVal-1];

		return median;
	}
	else{
		const median = a[Math.floor(getVal)];

		return median;
	}
}


console.log(absoluteValue1([2,4,7,6]));
console.log(absoluteValue1([2,4,7,6,6]));
console.log(absoluteValue1([2,4,7,6,6,8]));
