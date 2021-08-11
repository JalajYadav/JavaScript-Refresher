//example 1
function sum(a,b){
    return a+b;
}

let sum2 = (a,b) =>a+b;
sum2(5,6);



//example 2

function isEven(num){
    return (num%2==0);
}

const isEven2 = num => (num%2==0);

console.log(isEven(4));
console.log(isEven2(5));



//example 3
function randomness(){
    return Math.random();
}


let randomness2 = () => Math.random();

console.log(randomness2());
console.log(randomness());


//example 4
document.addEventListener('click',function(){
    console.log('You clicked :D');
})

document.addEventListener('click',()=>{
    console.log('You clicked :D');
})


