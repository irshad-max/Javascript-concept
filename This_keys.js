const user = {
    name: "Mustafa",
    normal() {
        console.log(this.name);
    },
    arrow: () => {
        console.log(this.name);
    }
};
user.normal();
user.arrow();