const string = "Minha string";

let newString = "";
 
for (let i = string.length - 1; i >= 0; i--) { 
    newString = newString + string[i];
}

console.log('reverse: ', newString);