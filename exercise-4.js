const person  = {
    firstName: "Nick",
    lastName: "Carter",
};
function setFullName(obj, name) {
    obj.fullName = this.firstName + " " + this.lastName;
    obj.fullName = name;
}
const setPersonFullName = setFullName.bind(null, person);
setPersonFullName("John Smith");
console.log(person.fullName);
