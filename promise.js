// const willMarry = false;
// new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         if(willMarry){
//             resolve('success')
//         }else{
//             reject('sorry...')
//         }
//     }, 3000)
// }).then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// })




// const willMarry = false;
// const myPromise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         if(willMarry){
//             resolve('success')
//         }else{
//             reject('sorry...')
//         }
//     }, 3000)
// })

// myPromise
// .then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// })





const willMarry = false;
function promiseOne(){
    const myPromise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(willMarry){
                resolve('success')
            }else{
                reject('sorry...')
            }
        }, 3000)
    })
    return myPromise
}
promiseOne()
    .then((value)=>{
        console.log(value);
    })
    .catch((error)=>{
        console.log(error);
    })
