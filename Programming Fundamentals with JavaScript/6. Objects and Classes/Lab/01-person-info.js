function solve(firstName, lastName, age) {
    // let person = {firstName: firstName, lastName: lastName, age: age};
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;

    return person;
}

solve('Peter', 'Parker', 25)