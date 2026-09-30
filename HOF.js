// HOD(higher order function)
//it take function as arguments
//and return function also
//one is enough to say HOD
// and call them


//example 1
function multiply(a,b,opretion){
    return opretion(a,b)
}
 function add(a,b) {
     return a+b;
 }
 const result=multiply(5,5,add)
 console.log(result)
 
 
 //example 2
 function sum(a){
     return function(b){
         return a+b;
     }
 }
 
 const result1=sum(5)
 const result2=result1(6)
 console.log(result2)