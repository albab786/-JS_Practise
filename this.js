//this keyword inside arrow fxn is always point to window object 
// this keyword will point towards the current object within normal function


// let obj={
//     name:"islam mackachev"

// }
// function info(){
//     console.log(obj.name);
// }
// info()

// let obj={
//     name:"islam mackachev",
//     add:"dagestan",
//     sports:"MMA"

// }
// function info(a,b){
//     console.log("My name is ",this.name);
//     console.log("My add is ",this.add);
//     console.log("My profession is ",this.name);
//     console.log(a+b);
// }
// info.call(obj,10,20)


// let obj={
//     name:"islam mackachev",
//     add:"dagestan",
//     sports:"MMA"

// }
// function info(a,b,c,d){
//     console.log("My name is ",this.name);
//     console.log("My add is ",this.add);
//     console.log("My profession is ",this.name);
//     console.log(a+b+c-d);
// }
// info.apply(obj,[10,20,10,5])

//! bind
let obj={
    name:"islam mackachev",
    add:"dagestan",
    sports:"MMA"

}
function info(a,b,c,d){
    console.log("My name is ",this.name);
    console.log("My add is ",this.add);
    console.log("My profession is ",this.name);
    console.log(a+b+c-d);
}
let bndfxn= info.bind(obj,10,20,10,5)
bndfxn()
