//es6 se pehle hum constructor function 
// ka use kiya karte the  basically ye 
// ek hume object hi return karta hai 
// or isse hum pascal text se likhte hai



//dusri language me jese hota hai
// class ek blueprint wesa hi hai ye
// blueprint hai
function person(name,age){
    this.name=name
    this.age=age
    this.getinfo=function(){
        console.log(name," ",age)
    }
}

// yaha object bana rahe hai hai or call kar rahe hai
const p1=new person("irshad",21)
const p2=new person("mustafa",21)
p1.getinfo()
p2.getinfo()