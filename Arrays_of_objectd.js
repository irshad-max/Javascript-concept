//array of objects

const user=[
    {name:"irshad",city:"surat"},
    {name:"mustafa",city:"ankleshwar"}
    ]
  
//for in loop hume index deta hai array of object karta
//jiski madad se hum perticular index ke specific key se values le sakte hai 
for(x in user){
    console.log(user[x])
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
