function topp(){
var a = 500;
    function x(){
    // var a =7;as
    function y(){
        console.log(a);
    }
    //a=100;
    return y;
    
    }
}
var z = x();
console.log(z);
z();

topp();