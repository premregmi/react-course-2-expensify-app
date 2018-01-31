//
// OBJECT DESTRUCTURING
//

// const person = {
//   name: 'Paru',
//   age : 22,
//   location: {
//     city: 'Kathmandu',
//     temp: 13
//   }
// }
// const {name: firstName ='Kalu', age } = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${firstName} is ${age}.`);
//
// const {city, temp: temperature} = person.location;
//
// if(city && temperature) {
//   console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }
//
// const{name: publisherName = 'Self-published'} = book.publisher;
//
// console.log(publisherName);
//

//
// ARRAY DESTRUCTURING
//


// const address = ['Paiyatar', 'Tarkeshwor', 'Kathmandu', '44600' ];
// const [street, city, state = 'kathmandu', zip] = address;
// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
