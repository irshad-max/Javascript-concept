function getuser(id,callback){ // yaha me callfunc le raha hu
    setTimeout(function() {
        const user={
            id:id,
            name:"irshad"
        }
        callback(user) // yaha me cb me user daal raha hu
    }, 500); // ye sab execute hoga lagbag 0.5s me
}

function getpost(id,callback){ // yaha bji same kar raha hu me
 console.log("id verified your post are")
   setTimeout(function(){
    const post=["html","css","js","react"]
    callback(post)
   },2000)
}

getuser(1,function(user){ // yaha dyan deyan dena jo bhi meri git hub se padh raha ho
    // yaha mene function(user) jo hai wo ek as a 
    // argument ki trh pass honga jab waha se wo function 
    // execute nhi hota tab tak ye execute nhi honga 
    getpost(user.id,function(post){
        console.log(post)
    })
})
