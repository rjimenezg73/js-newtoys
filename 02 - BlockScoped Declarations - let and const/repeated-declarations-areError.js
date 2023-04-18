function redundantRepetition(){
	var x = "Alpha";
	console.log(x);
	// ...lots of code here...
	var x = "bravo";
	console.log(x);
	// ...lots of code here...
	return x;
}

function redundantRepetition2(){
	let w = "Alpha";
	console.log(w);
	// ...lots of code here...
	let w = "bravo";	// VSyntaxError: Identifier 'w' has already been declared
	console.log(w);
	// ...lots of code here...
	return w;
}

var y = redundantRepetition();
console.log("y almacena: " + y);

let z = redundantRepetition2();
console.log("z almacena: " + z);