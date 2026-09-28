//clouser function
//inner function outer function ko
//yaad rakhta hai garbage values
//me nhi dalta

function outer(){
    let count=1;
    function inner(){
        console.log(count)
        count++
    }
    return inner
}

const fn=outer()
fn()
fn()
fn()
fn()

//inner return Kiya
//mene toh wo fn ko
//reference mil gya
//isliye wo inner ko
//call kar raha hai outer ko nhi


//example 2
function count2(){
    let count=0
    function increment(){
        count++;
        console.log(count)
    }
    function decrement(){
        count--;
        console.log(count)
    }
    return{
        increment:increment,
        decrement:decrement
    }
}
const counterr=count2()
counterr.increment()
counterr.increment()
counterr.decrement()
