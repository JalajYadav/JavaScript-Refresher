
class Person{
    constructor(name){
        this.name = name;
    }
    arrowFun(){
        setTimeout(()=>{
            console.log('Arrow:'+this.name);
        },100)
    }
    normalFun(){
        setTimeout(function(){
            console.log('Normal:'+this.name);
        },100);
    }
}
// this.name = '999'; // >>>>>>this is gonna work
//let name = '999'; //>>>>>>>> this is also gonna work out

let p1 = new Person('JalajYadav');
p1.arrowFun();
p1.normalFun();