function first(a,b,callback){
    setTimeout(() => {
        console.log(a + b);
        callback()
    }, 3000)
}
function second(){
    console.log('second-2');
}
first(4,3,second)