// method 1
function addBorder(param: string[]){
	const arr = [];;
	arr.push('*****');
	for(var i = 0; i < param.length; i++){
		arr.push('*'+param[i]+'*');
	}
	arr.push('*****');
	return arr;
}

console.log(addBorder(['abc','def','ghi']));


// method 2
function addBorder1(picture: string[]){
	let wall = '*****';
	picture.unshift(wall);
	picture.push(wall);

	for(let i = 1; i < picture.length - 1; i++){
		picture[i] = '*'.concat(picture[i], '*');
	}

	return picture;
}


console.log(addBorder1(['abc','def','ghi']));

