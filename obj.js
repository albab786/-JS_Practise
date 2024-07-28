// let obj={
//     name:"john wick"
// }
// console.log(obj);
// let arr=[10,70]
// console.log([].__proto__);
// console.log(typeof String);
// let a=Boolean.prototype
// console.log(a);
// let f=Function().prototype
// console.log(f);
//!Except null & undefine all are object in js 


//!inheritance

// let obj1={
//     name:"john wick"
// }
// let obj2={
//     age:25
// }
// obj1.__proto__=obj2
// console.log(obj1);
// console.log(obj2);

// let date=new Date();
// console.log(date);

//!Math object
//?absolute value
// console.log(Math.abs(10.100000000000));

// console.log(Math.ceil(10.1));
// console.log(Math.floor(10.999));
// console.log(Math.round(10.6));
// console.log(Math.cbrt(125));

// let arr=[10,50,70,1,2,65]

// Math.min(...arr)
let val=Math.floor(Math.random()*10)


if (val>0){
    console.log(val);
}else
console.log(val+1);
