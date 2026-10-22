//function declaration
function add1(a,b){
    return a+b;
}
console.log(add1(10,20))

//function expression
const add2=function(a,b){
    return a+b;
}
console.log(add2(20,30))

// arrow function
const add3=(a,b)=>{
    return a+b;
}
console.log(add3(40,40))

//arrow function not provide this 
//keyword and own argument abd it not hiosted


//function declaration is hoisted 
//means we can call before declaration 
// and have own argument


// high order function 
// ya toh koi function callback me le sakta hai
// ya fir return kar sakta hai


//pehla function jo ek func as argument leta hai
function add(a,b){
    console.log(a+b)
}
function calculate(a,b,callback){
    callback(a,b)
}
calculate(10,20,add)


//dusra func jo return karta hai dusra function 
function minus(a,b){
    return b-a
}
function calculate1(a,b){
    return minus(a,b)
}

const c=calculate1(10,20)
console.log(c)
