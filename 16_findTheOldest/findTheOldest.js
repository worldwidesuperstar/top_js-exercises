const findTheOldest = function(list) {
    max = 0;
    result = undefined;
    
    for (const person of list) {
        let age = 0;
        console.log(person.name);

        if (person.yearOfDeath === undefined) {
            age = 2025 - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth;
        }

        console.log(age);

        if (age > max) {
            console.log("current max is " + max)
            result = person;
            max = age;
        }

        console.log("current oldest person is " + result);
    }

    return result;

};

// Do not edit below this line
module.exports = findTheOldest;
