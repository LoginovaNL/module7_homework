const users = [
    {name: 'Nick', age: 17},
    {name: 'Jack', age: 18},
    {name: 'Max', age: 25}
];
const usersAge = users.filter((userAge) => {
    return userAge.age >= 18;
    });
console.log(usersAge);
const usersName = users.map((userName) => {
    return userName.name;
});
console.log(usersName);