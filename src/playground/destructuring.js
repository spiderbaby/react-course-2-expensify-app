//
// Object destrucuring
//

// const person = {
//     name: 'Shane',
//     age: 98,
//     location: {
//         city: 'Dublin',
//         temperature: 2
//     }
// };

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temperature: temp } = person.location;
// if (city && temp !== undefined) {
//     console.log(`It's ${temp} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name:publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);

//
// Array destrucuring
//

const address = ['69 Main Street', 'Cityville', 'California', '12345'];
const [ , city, state = 'New York', ] = address;
console.log(`You are in ${city}, ${state}.`)

const item_1 = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item_1;
console.log(`A medium ${itemName} costs ${mediumPrice}.`)

const item_2 = ['Coffee (iced)', '$2.25', '$2.80', '$3.00'];
const [itemName2, , , largePrice2] = item_2;
console.log(`A large ${itemName2} costs ${largePrice2}.`)
