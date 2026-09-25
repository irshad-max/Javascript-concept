// method of object mostly use

const obj={
    name:"irshad",
    city:"surat",
    age:20,
    course:"BCS CS"
}

// object entries function like destructure
for(const[keys,values] of Object.entries(obj)){
    console.log(keys)
}

//Object.keys hume object ke keys dete hai array form me
const key=Object.keys(obj)
console.log(key)

// Object.values hume objects ke values dete hai array ke form me
const values=Object.values(obj)
console.log(values)

// optional chaining 
// ye check karta hai ki kya keys extus karta hsi ya nhi
// agr nhi karta toh wo bus undefind bata deta hai bina error ke

console.log(obj?.year)

// nullish chaining
// behave like or opretor agr hai toh dikhao warna 
// dusra dikhao

console.log(obj?.year ?? "2023")


// function of arrays also use on 
// arrays of objects 
/*
1 map
2 reduce
3 filter 
4 Sort 
etc 
*/