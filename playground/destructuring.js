// const person = {
//     age: 26,
//     location: {
//         city: 'Kirovograd',
//         temp: 4
//     }
// };

// const { name: firstName = 'Igor', age } = person;
// console.log(`${firstName} is ${age}.`);


// const { city, temp:temperature } = person.location;
// console.log(`It's ${temperature} in ${city}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Publisher' } = book.publisher;

// console.log(publisherName);

// Array destructuring

const address = ['1388 S Juniper Street', 'Philadelphia', 'California', '14345'];
// const [street, city, state, zip] = address;
const [, , state = 'New York'] = address;
console.log(`You are in ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [product, , mediumCost] = item;

console.log(`A medium ${product} consts ${mediumCost}`);