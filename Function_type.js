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

//function Date is not hiosted
//means we can't call Boolean declaration
// and have own argument