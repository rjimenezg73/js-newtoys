function jumpOut(){
  var a = [1, 2, 3];
  for(var i =0; i < a.length; i++){
    var value = a[i];
    console.log(value);
  }    
  console.log("Outside loop " + value); //why can use "value" here?
}

function stayContained(){
  var b = [1, 2, 3];
  for(var j = 0; j < b.length; j++){
    let value2 = b[j];
    console.log(value2);
  }
  console.log("Outside loop " + value2); // Reference Error: 'value2' is not defined
}

jumpOut();
stayContained();