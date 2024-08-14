function addNumber (num1, num2,...number ){
    return number
}
console.log(addNumber(200, 399, 400, 40000,20000));


let numbers = [3, 5, 2, 9, 8]
function sum ( num1, num2, num3, num4, num5){
    return num1 + num2 + num3 + num4 + num5;
}
console.log(sum(...numbers));

let arr1 = [4, 5, 9, 3]
console.log(Math.max(...arr1));
console.log(Math.min(...arr1));