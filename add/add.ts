function add(param1: number, param2: number): number{
	return param1 + param2;
}

console.log(add(2,5));


function add1(...param: number[]){
	let total = 0;
	param.forEach((num)=>{
		total += num;
	});
	return total;
}


console.log(add1(1,2,3,4,5,6));
