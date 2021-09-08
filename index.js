function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}
console.log(add(5,10));
console.log(subtract(5,10));
console.log(multiply(5,10));
console.log(divide(5,10));

function increment(n){
    return n += 1;
}

function decrement(n){
    return n -= 1;
}

console.log(increment(5));
console.log(decrement(5));

function makeInt(string){
    return parseInt(string, 10);
}

function preserveDecimal(string){
    return parseFloat(string);
}

console.log(makeInt(486.8));
console.log(preserveDecimal(2.222));