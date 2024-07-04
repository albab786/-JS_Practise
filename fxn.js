//fxn that has some name is called name fxn
function sum(a ,b){
    return a+b;
}
//fxn that doest not have name

let demo=function(){
    console.log("annomyus fxn");
}
demo();


let fnc=()=>{
    console.log("arrow fxn/callback fxn/annamous fxn");
}

//immediate invoke fxn
(()=>{
    console.log("immediate invoke fxn");
    
})()
//var primitive data stores in heap area
//other primitive data types store in stacks
//non primitive data store in heap area

// let a=10
// let fnx=()=>{
//     let m="qwer"
//     console.log("hello");
// }
// console.log("xyz");
// fnx()


//////////////////////////
// let que="kaisi ho"
// let call=(que)=>{
//     console.log(que);
//     return "mai bhadiya tm batao"

// }
// let reply=call(que)
// console.log(reply);

// a=20;
// console.log(a);
// a=30;
// console.log(a);
