// let numbers = [2, 4, 6, 7, 4, 9]
// const result = numbers.filter((number) => {
//     return number > 4
// })
// console.log(result);


const herosName = [
        {name: 'shahrukh khan', age: 55, profession: 'actor'},
        {name: 'salman khan', age: 50, profession: 'actor'},
        {name: 'saif ali khan', age: 45, profession: 'actor'},
        {name: 'shakib al hassan', age: 35, profession: 'cricketer'},
        {name: 'sheikh hasina', age: 70, profession: 'prime minister'}
]
let result = herosName.filter((hero) => {
    return hero.age > 40
})
console.log(result);