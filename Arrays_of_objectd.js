//array of objects

const user=[
    {name:"irshad",city:"surat"},
    {name:"mustafa",city:"ankleshwar"}
    ]
  
// for in loop give index of objects
// with the help of index we find keys valyes
for(x in user){
    console.log(user[x].name)
}


// for of loop direct give object detail without 
// index 
for(x of user){
    console.log(x.name)
}


// give direct objects and index and it is 
// easy way to access arrays of object
// but ye foreavh objects pe ek ek karta rehta hai
user.forEach((x)=>{
    console.log(x.name)
}) 
