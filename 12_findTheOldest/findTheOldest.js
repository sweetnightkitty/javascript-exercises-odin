const findTheOldest = function(people) {
   return people.reduce((oldestPerson, currentPerson) => {
        const oldestAge = calculateAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = calculateAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);

    return currentAge > oldestAge ? currentPerson : oldestPerson;
    });
};

function calculateAge(birth, death) {
    if(!death) death = 2024;
    return death - birth;
}
// Do not edit below this line
module.exports = findTheOldest;
