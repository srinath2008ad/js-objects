const person = {
    name: "Asha",
    age: 20,
};

function birthday(person) {
    return {
        name: person.name,
        age: person.age + 1,
    };
}

const olderPerson = birthday(person);

console.log("person", person)
console.log("older person", olderPerson)