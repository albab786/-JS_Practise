//object is a real world entity which has state and behaviour,which occupy space

// let fruit={
//     mango:"yellow",
//     papaya:"yellow",
//     apple:"red"

// }
// let car={
//     name:"bmw",
//     engineType:"1000hp",
//     color:"black"
// }
// console.log(fruit);
// console.log(car);
// let student={
// name:"naveen",
// age:24,
// gf:null,
// gfmobNo:null,
// studentbehaviour:()=>{
//     console.log("ladki baaz");
// }
// }
// console.log(student);
// student.studentbehaviour()
// console.log(typeof(student));


// let obj={
//     name:"the rock"
// }
// console.log(obj);
// obj.add="us"
// console.log(obj);


// object crea]tion with new keyword

// let obj=new Object({
//     name:"john wick"
// })
// obj.add="US"
// console.log(obj);

///object creation with factory function

// function students(name,add,mob){
//     return{
//     name:name,
//     add:add,
//     mob:mob
//     }
// }
// let student1=students("the rock","us",9134576)
// console.log(student1);



// //object creation with the help of class in js
// class Car{
//     constructor(brand,price){
//         this.brand=brand
//         this.price=price
//     }
// }
// let car1=new Car("Audi",98989989)
// let car2=new Car("BMW",98989989)
// console.log(car1,car2);


//delete the properties from an object
//delte is a operator(uniary operator)
// let dummy={
// name:"tinku",
// add:"nd"
// }
// console.log(dummy);
// delete dummy.add


// //multiple nested object
// let country={
//     name:"India",
//     state :{
//         name:"UP",
//         city:{
//          name:"noida",
//          block:{
//         name:"sector 16"

    
//          }
//         }

//     }
// }
// console.log(country.state.city.name);


// //using constructor function
// let Empl=function(name,add){
//     this.name=name;
//     this.add=add
// }
// let Empl1=new Empl("john jones","naveda")
// console.log(Empl1);
// /////////////////////



















// ////////////////////////////
// //object methods
// let movie={
// name:"student of the year",
// actor:"shidhart",
// actress:"alia bhat",
// budget:9888888888876,
// income:"110cr"

// }
// let allkeys=Object.keys(movie)
// console.log(allkeys);
// let allvalues=Object.values(movie);
// console.log(allvalues);

// let allEntries=Object.entries(movie)
// console.log(allEntries);



// let student2={
//     name:"khabib"
// }
// let student3={
//     add:"Dagestan"
// }
// let student4={
//     profession:"MMA"
// }
// let student5={
//     about:"29-0"
// }
// Object.assign(student2,student3,student4,student5)
// console.log(student2);

// let movie={
//     name:"Hera pheri",
//     actor:{
//         name1:"Akshay kumar",
//         name2:"babu rao",
//         name3:"shyam"

//     },
//     actress:{
//         name:"Anuradha",
//         name2:"Tabbu"
//     },
//     budget:"150rs",
//     income:"1cr"
// }
// console.log(movie["actor"]["name1"]);
// console.log("income" in movie);
// let obj={
//     name:"Tinku"
// }
// Object.freeze(obj);
// console.log(obj);
// delete obj.name //cant delete due to freeze
// console.log(obj);
// obj.add="nwd"//cant add
// obj.name="minku"
// console.log(obj);
// console.log(Object.isFrozen(obj));


// Object.seal(obj)
// delete obj.name //cant delete
// obj.name="minku"
// console.log(obj);//you can update existing properties
// console.log(Object.isSealed(obj));
// we can check whether object is freeeze or sealed with the help of method


let name="john jones"
let phone=984563874
let add="usa"
 let person={
    name,
    phone,
    add
 }
 console.log(person);
let person2=person
console.log(person2);
person.add="europe"
console.log(person);

for(key in person){
    console.log(key);
}
//create deeep copy 
//1st way
//simply copy paste with differ variable name

//2nd way(using for in loop)
// let obj={
//     name:"hamza mackachev",
//     add:"chechanya"
// }
// console.log(obj);
// let copy={

// }
// for(a in obj){
//     copy[a]=obj[a]
// }
// console.log(copy);

// copy.pno=90898797
// console.log(obj);
// console.log(copy);

// 3rd way using parsing and jason



// let obj={
//     name:"minku",
//     add:"noida"
// }
// let jasonObj=JSON.stringify(obj)
// console.log(jasonObj);
// let copy=JSON.parse(jasonObj)
// console.log(copy);