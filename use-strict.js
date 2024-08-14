function func(a,b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        return 'enter a number';
    }
    return a + b;
}
const result = func(3, 5)
console.log(result);