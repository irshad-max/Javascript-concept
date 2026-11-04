const user = {
    name: "Mustafa"
};

function greet(age, city) {
    console.log(this.name, age, city);
}

//call
//ye as first aargument ko current this bana deta hai
// matlb hum kisi bhi object ko kahi bhi istemal kar sakte hai
greet.call(user,21,"surat")

//apply
//ye same call ki trh hi hai but 
//extra parameter ko array ki roop me leta hai
greet.apply(user,[21,"surat"])

//bind
//ye ek function return karta hai
const user1=greet.bind(user,21,"surat")
user1()