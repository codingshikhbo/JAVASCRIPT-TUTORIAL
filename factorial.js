// function myFunc(number){
//     let sum = 0;
// for(let i = 1; i <= number; i ++){
//     sum = sum + i;
//     console.log(i, sum);
// } return sum;
// }
// const result = myFunc(15);
// console.log(result);


// function myFunc(number){
//     let multi = 1;
// for(let i = 1; i <= number; i ++){
//     multi = multi * i;
//     console.log(i, multi);
// } return multi;
// }
// const result = myFunc(5);
// console.log(result);



function myFunc(number){
    let multi = 1;
for(let i = number; i >= 1; i --){
    multi = multi * i;
    console.log(i, multi);
} return multi;
}
const result = myFunc(10);
console.log(result);