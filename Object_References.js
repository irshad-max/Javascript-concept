const user1 = {
    name: "Mustafa",
    age: 20
};

//pass by reference 
const user2 = user1;
user2.name = "Alex"; //user2 point to the user1 if user2.name change so also user1.name change
console.log(user1.name)
console.log(user2.name)

//object always pass by reference not create new objects