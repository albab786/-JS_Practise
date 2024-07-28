obj1={
    name:"faheem",
    func: function func(param){
        console.log(param)
    }
}

obj2=Object.create(obj1)
obj2.func("faheem")