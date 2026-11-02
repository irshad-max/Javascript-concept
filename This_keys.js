// yaha dyan dene layk chiz hai
// nirmal me name isliye print huwa kyu ki woto
// object ke andr hai isliye wo object ko refere kar raha hai
// but esa nhi hai humne 
const user = {
    name: "Mustafa",
    normal() {
        console.log(this.name);
    },
    arrow: () => {
        console.log(this.name);
    }
};
user.normal(); // humne user ki madad se normal ko call kiya hai 
//isliye name orint huwa kyu ki declaration function ke pass this hai
// but arriw function ke pass nhi isliye undefind aya 
user.arrow();
