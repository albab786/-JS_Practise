// let promise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     let success = true;

//     if (success) {
//         resolve("Operation was successful!");
//     } else {
//         reject("Operation failed!");
//     }
// });
// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     });

const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task");
        resolve()
    },1000)
})

promiseOne.then(function(){
        console.log("Promise consumed");
        
})

