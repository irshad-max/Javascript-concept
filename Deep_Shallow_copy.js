// shallow copy 
// means it can't copy nested objects

const user={
    name:"irshad",
    address:{
        city:"surat"
    }
}

//spread opretor only create new object area for outer object not for inner
const copy={...user}
copy.name="mustafa"
// copy.address.city="bharuch"
console.log(user.name) //same 
console.log(user.address.city) // change beacuse nested object can't create new object


// deep copy
// always create new objects reference for all nested objects 
const copy2=structuredClone(user)
copy2.address.city="ahmadabad"
console.log(user.address.city)



//same as structuredClone always create new objects reference
const copy3=JSON.parse(JSON.stringify(user))
copy3.address.city="ankleshwar"
console.log(user.address.city)