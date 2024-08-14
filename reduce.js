// let numbers = [4, 5, 2, 7, 9]
// let result = numbers.reduce((initialValue, currentValue) => {
//     console.log(`initial: ${initialValue} and current: ${currentValue}`);
//     return initialValue + currentValue;
// }, 0)
// console.log(result);


const shoppingCart = [
    {
        items: 't-shirt',
        price: 400
    },
    {
        items: 'watch',
        price: 300
    },
    {
        items: 'polo-shirt',
        price: 250
    }
]
let result = shoppingCart.reduce((initialValue,currentValue) => {
    return initialValue + currentValue.price;
}, 0)
console.log(result);
