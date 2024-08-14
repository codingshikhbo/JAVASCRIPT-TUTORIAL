// const numbers = [3, 4, 6, 1]
// let [num1, num2, num3, num4] = numbers
// console.log(num1);
// console.log(num2);

const friendsInfo = {
    name: 'rahim',
    id: 2344784,
    vill: 'chandpur',
    moreInfo: {
        hobby: 'cricketer',
        age: 50
    }
}
let {name, id , vill, moreInfo} = friendsInfo;
console.log(id);
console.log(moreInfo.hobby);