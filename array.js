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
// let nums=[12,50,40,60]
// for(val in nums){
//     return nums+10
// }
// console.log(nums);
// for(val of nums){
// return nums+20
//      }
//      console.log(nums);

//      let arr=[62,605,333,39,95,165]
//  arr.sort((a,b)=>{
//      return a-b
//  })

//!______________________________________________________________________________________________

//Map method return an array
// let nums=[52,45,65,14,23,89]
// nums.map((val,i)=>{
//     console.log(val,i);

// })

//!__---------------------------filter method---------------------------------------

// let nums=[14,52,88,66,77,89]
// let filternums=nums.filter((val)=>{
//     return val>70
// })
// console.log(filternums);


// let arr=[NaN,10,10.10,"hello",true]
// let newArr=arr.filter((val,i)=>{
//     console.log(typeof val);
//     return (typeof val=="number")
// })
// console.log(newArr);
//!{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{Reduce}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
//it return one value

// let nums=[12,45,75,48,14,20,32,56]
// let ans=nums.reduce((sum,val,i,arr)=>{
  
//     return sum+=val
// },1000)//!toRemember
// console.log(ans);
// //to check array
// console.log(Array.isArray(nums));

// //!Join---------------------------
// let name=["k","h","a","b","i","b"]
// console.log(name.join(""));
//!_______________________________Destructuring_________________________________________________

// let backpack={
//     item1:"torch",
//     item2:"tiffin",
//     item3:"rope",
//     item4:"knife",
//     item5:"bottle",
//     item6: ()=>{
//         console.log("fishing");
//     }
// }
// let {item1,item2,item6}=backpack
// console.log(item1);
// console.log(item2);
// item6()

// let arr =["water bootle","torch","knife","gun","rope",{menu1:"biryani",
//                                                       menu2:"chicken changezi",     
//                                                       menu3:"dum biryani"
//                                                     }]                                                       
// let [a,b,c,d,e,f,{menu1,menu2}]=arr
// console.log(menu1);
//!-------------------------------REST OPERATOR-----------------------------------------------
// let arr=[10,25,62,45,9]
// let [a,...c]=arr
// console.log(c);
//  let ob=[10,20,"Khabib",{name:"john snow",
//                          series:"GOT",
//                          quote:()=>{
//                             console.log("KIll the boy,let the man born");
//                          }
//  }]
//  let [e,...d]=ob
//  console.log(d);

 //!---------------------------------

//deep copy(creating deep copy using spred operator)
 let arr=[10,20,25,35]
 let nums=[...arr]
 console.log(nums);

//  let func=(a,b,c,d)=>{
// console.log(a,b,c,d);
//  }
let func=(...a)=>{
    console.log(a);
     }
 func(...arr)
 
