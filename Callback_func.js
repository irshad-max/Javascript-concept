// ye call back function hai

function getuser(cb){
   console.log("irshad")
   cb()
}

function getnumber() {
    console.log("123456")
}

getuser(getnumber)

//Synchronous Callback
//Jab callback ko execute
//karne wali function us
//callback ko apne normal 
//execution ke dauran chala deti hai, toh woh synchronous callback ho sakta hai.

function greet(cb) {
    console.log("Hello");
    cb();
    console.log("Bye");
}
function message() {
    console.log("Mustafa");
}
greet(message);

//Asynchronous Callback
//Jab callback ko baad mein 
//execute kiya jata hai, 
//jaise timer complete hone
//par, toh woh asynchronous
//callback hota hai.

console.log("1");
setTimeout(function () {
    console.log("2");
}, 2000);

console.log("3");



