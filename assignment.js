// function sayHello(){
//     console.log("Hello World");
// }
// sayHello();
// function greet( name){
//     console.log("hello"+" "+name);
// }
// greet("john wick")
// function add(a ,b){
//     return a+b;
// }
// console.log(add(7,8));
// function greetWithDefault(name ="Guest"){
//     console.log(`Hello, ${name}`);

// }
// greetWithDefault();
// greetWithDefault("john wick")
// //======================================================================
// //Arrow fxn
// let sub=(a,b)=>{
//     return a-b;

// }
// console.log(sub(9,5));
// const applyOperation = (num1, num2, operation) => {
//     return operation(num1, num2);
// };
// const divide = (a, b) => {
//     return a / b;
// };
// const result = applyOperation(20, 4, divide);
// console.log(result);


// let greet=(name)=>{
//     console.log(`${name} May your day be as splendid as a unicorn dance party.`);

// }
// greet("john")

// let sum=(num1,num2)=>{
//     let sum=num1+num2
//     console.log(`You've just summoned the Sum Wizard who declares that ${[num1]} + ${[num2]} = ${[sum]}`);
// }
// sum(4,5)

// let  welcomeNewMember=(name, age)=>{
//     return `Welcome aboard, Captain ${name}! At the sprightly age of ${age}, you're about to embark on an adventure full of code quests and pixelated dragons.`;
// }
// console.log(welcomeNewMember("jack sparrow",20));

// let square=(num)=>{
//     let ans=num*num
//     console.log(`the square of given number is ${ans}`);
// }
// square(4)
// let evenOrOdd=(n)=>{
//     if(n%2==0){
//         console.log("given no is even");
//     }else{
//         console.log("given no is odd");
//     }
// }
// evenOrOdd(7)
// let minToSec=(mn)=>{
//     let ans=mn*60;
//     console.log(`the final answer is ${ans}`);

// }
// minToSec(5)
///////////////////////////////////////////////////////////////

let age=17;
if(age>18){
    console.log("elogible for vote");
}else{
    console.log("not eligible for vote");
}

let temprature=17;
if(temprature>25){
    console.log("warm");
}else{
    console.log("cool");
}
let userName="john"
let password="wick"
if(userName==="john"){
    if (password==="wick") {
        console.log("login successfuly");
    }
}else{
    console.log("eroor");
}


// let day = "Tuesday";


// if (day === "Saturday" || day === "Sunday") {

//   console.log("Weekend");
// } else {
 
//   console.log("Weekday");
// }


let day = "Tuesday";


switch(day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  

  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;
  
 
  default:
    console.log("Invalid Day");
    break;
}



let x = 7;

console.log(x % 2 === 0 ? "Even" : "Odd");


let temperature = 25;


let message = temperature > 30 ? "Hot" : (temperature > 20 ? "Moderate" : "Cold");


console.log(message); 


function isValidName(name) {
    
    if (name !== null && name !== undefined && name !== '') {
     
      return true;
    }
    
    return false;
  }
  
  
  console.log(isValidName("Alice"));  
  console.log(isValidName(""));       
  console.log(isValidName(null));     
  console.log(isValidName(undefined));
  

function calculateBonus(sales) {
   
    if (sales <= 0) {
      return 0;
    }
    
    
    const bonusPercentage = 0.1; 
    const bonus = sales * bonusPercentage;
    return bonus;
  }
  
 
  console.log(calculateBonus(500));  
  console.log(calculateBonus(0));    
  console.log(calculateBonus(-100));  
  
  


let score = 75;


if (score >= 60) {
  
  console.log("Pass");
} else {
 
  console.log("Fail");
}


score >= 60 ? console.log("Pass") : console.log("Fail");

