const friendList = ['rahim', 'karim', 'salman', 'mashiur', 'salman']
function ignoreDuplicate(friendList){
    let newList = []
    for(let i = 0; i < friendList.length; i++){
        let element = friendList[i]
        if(newList.includes(element) === false){
            newList.push(element)
        }
    }
    return newList
}
let finalResult = ignoreDuplicate(friendList)
console.log(finalResult);