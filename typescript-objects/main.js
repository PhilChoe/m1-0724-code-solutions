"use strict";
const student = {
    firstName: 'Philip',
    lastName: 'Choe',
    age: 33,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'self-employed';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
console.log('type of student:', typeof student);
const vehicle = {
    make: 'Porsche',
    model: '911 Turbo',
    year: 2020,
};
vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('color of vehicle:', vehicle['color']);
console.log('is vehicle a convertible?', vehicle['isConvertible']);
console.log('Vehicle:', vehicle);
console.log('Type of vehicle:', typeof vehicle);
const pet = {
    name: 'Mia',
    kind: 'Toy Goldendoodle',
};
delete pet.name;
delete pet.kind;
console.log(pet);
console.log(typeof pet);
