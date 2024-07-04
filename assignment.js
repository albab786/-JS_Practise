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



let greet=(name)=>{
    console.log(`${name} May your day be as splendid as a unicorn dance party.`);

}
greet("john")

let sum=(num1,num2)=>{
    let sum=num1+num2
    console.log(`You've just summoned the Sum Wizard who declares that ${[num1]} + ${[num2]} = ${[sum]}`);
}
sum(4,5)

let  welcomeNewMember=(name, age)=>{
    return `Welcome aboard, Captain ${name}! At the sprightly age of ${age}, you're about to embark on an adventure full of code quests and pixelated dragons.`;
}
console.log(welcomeNewMember("jack sparrow",20));

let square=(num)=>{
    let ans=num*num
    console.log(`the square of given number is ${ans}`);
}
square(4)
let evenOrOdd=(n)=>{
    if(n%2==0){
        console.log("given no is even");
    }else{
        console.log("given no is odd");
    }
}
evenOrOdd(7)
let minToSec=(mn)=>{
    let ans=mn*60;
    console.log(`the final answer is ${ans}`);

}
minToSec(5)