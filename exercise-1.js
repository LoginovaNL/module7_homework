const person =  {
    name: "Nick",
    age: 36
};    
function printInfo(name, age) {
console.log(`Name: ${this.name}, Age: ${this.age}`);
}
printInfo.call(person);