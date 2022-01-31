function adjacentElementProduct(param: number[]){
	var largestProduct = param[0] * param[1];
	
	for(let i = 0; i < param.length - 1; i++){
		var product = param[i] * param[i + 1];
		
		largestProduct = largestProduct > product ? largestProduct : product; 
	}
	return largestProduct;
}

console.log(adjacentElementProduct([3, 6, -2, -5, 7, 3, 4, 8]));
