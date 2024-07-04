//block level scope
// let a="RRR"
// if(true){
//     console.log(a);
//     const b="MI"
//     var c="John wick"
// }
// console.log(a);
//fxn level scope
// let a="bahubali"
// let fcn=()=>{
//     let b="pushpa"
// }
// fcn()
// console.log(a);
// console.log(b);
//var is a fxn scope
// let func=()=>{
//     let func1=()=>{
//         console.log("helooooo");
//     }
//    func1()
// }
// func()


//javascript currying
// let a=()=>{
//     console.log("a block executed");
//     let b=()=>{
//         console.log("b block executed");
//         let c=(value)=>{
//             console.log("c block execeted", value);
//         }
//        return c
//     }
//     return b
// }
// a()()(100)

//lexical scoping
//the ability of javascript engine to search for varible from one scope to another block or function
let minku=()=>{
let bike="KTM"
let mobile="iphone"
let tinku=()=>{
    console.log("the bike is======",bike,mobile);
}
return tinku;
}

let returnfnc=minku()
returnfnc()
// the ability of js engine to search variable in to the fxn even if it remove from the call stack is called closures
//jssssss