//!  aray is a continous block of memory , continous hetrogenous data type

// let demp=[1,3,"js",5,7]
// console.log(demp);

// let temp=[1,"john john","khabib","Islam Mackachev",253,true,[1,2,5,7,[210,1213,24652,]],25.9]
// console.log(temp);


//! do delete the element
// let arr=[10,20,30,40]
// arr.splice(2,1)
// console.log(arr);

//!check the element

// let arr=[10,20,30,40]

// console.log(arr.includes(40));
//! reverse
// arr.reverse()
// console.log(arr);

//!sort

// let arr=[62,605,333,39,95,165]
// arr.sort((a,b)=>{
//     return a-b
// }

// )
// console.log(arr);
// let sum=0
// arr.forEach((val ,i) =>{
//     console.log(val, "index",i);
// sum+=val
// })
// console.log(sum);


//! ////////////////////////////////////////
// let arr=[
//     {name :"tinku",age:22},
//     {name :"minku",age:23},
//     {name :"chinku",age:24}
// ]

// arr.forEach((val)=>{
//     console.log(`name is ${val.name} and age is ${val.age}`);
// })

//!,....................................,,,,,,,,,,,,,,,,,,,,,-------------------___________

// let arr=[62,605,333,39,95,165]
// for(val in arr){
//     console.log(val);
// }
// for(val of arr){
//     console.log(val);
// }

//!______________________________________________________________________________________________
let nums=[12,50,40,60]
for(val in nums){
    return nums+10
}
console.log(nums);
for(val of nums){
return nums+20
     }
     console.log(nums);

     let arr=[62,605,333,39,95,165]
 arr.sort((a,b)=>{
     return a-b
 })