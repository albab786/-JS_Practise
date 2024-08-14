// const element=window.document.getElementById('js')
// element.style.color="red"
// document.write("hello")
// // const elm=document.getElementsByClassName('item')
// // elm.style.color="redyellow"
// const elements = document.getElementsByClassName('item');

// // Loop through each element in the collection
// for (let i = 0; i < elements.length; i++) {
//     elements[i].style.color = "pink";
// }
// const bytg=document.getElementsByTagName('p')

// for (let i = 0; i < bytg.length; i++) {
//     bytg[i].style.color = "blue";
// }
// let newElement=document.createElement('p');
// newElement.innerHTML="this is new data"
// document.body.appendChild(newElement);


//!------------------------------------


setTimeout(function(){
console.log("js ");

},2000)

const fnx=()=>{
    console.log("set time out fxn");
    
}
const stop=setTimeout(fnx,3000);  
clearTimeout(stop);