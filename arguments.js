function sum () {
    if( arguments.length == 0){
        console.log('arguments not found');
    } else{
        let store = 0;
        for( let i = 0; i < arguments.length; i++){
            store = store + arguments[i]
        }
        return store;
    }
       
}
let total = sum(4,9)
console.log(total);