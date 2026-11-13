//prototype chaain create kese hota hai 
//basically witohut class hum inheritance
// kese perform karte hai


//har object ka apna ek  proto hota hai hum ussi ko
//redirect karte hsi ki tum isse point karo
let Animal={
    eat(){
        console.log(`animal eat`)
    }
}

let Dog={
    bark(){
        console.log(`animal barks`)
    },
    //jese yaha mene kiya hai
    __proto__:Animal
}
Animal.eat()
Dog.eat()
Dog.bark()
