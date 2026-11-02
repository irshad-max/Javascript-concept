function getuser(id,callback){
    setTimeout(function() {
        const user={
            id:id,
            name:"irshad"
        }
        callback(user)
    }, 500);
}

function getpost(id,callback){
 console.log("id verified your post are")
   setTimeout(function(){
    const post=["html","css","js","react"]
    callback(post)
   },2000)
}

getuser(1,function(user){
    getpost(user.id,function(post){
        console.log(post)
    })
})