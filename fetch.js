const url="https://cat-fact.herokuapp.com";
const getFacts=async()=>{
    console.log("getting data");
    
    let response= await fetch(url)
    console.log(response);
    // let data= await response.json()
    // console.log(data);
    
    
}
getFacts()
console.log("dev,,,,,,");
