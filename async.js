// setInterval(function(){
//     console.log("UFC");
    
// },1000)

//generate random color
const randomColor=function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for (let index = 0; index <6; index++) {
        color+=hex[Math.floor(Math.random()*16)]

    }
    return color;
}
let intervalId;
const startChaningColor=function() {
    if(!intervalId){
    intervalId= setInterval(changeBgColor,1000)
    }
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor()
    }
    
}
const stopChaningColor=function(){
    clearInterval(intervalId)
    intervalId=null

}
document.querySelector('#start').addEventListener('click',startChaningColor)
document.querySelector('#stop').addEventListener('click',stopChaningColor)