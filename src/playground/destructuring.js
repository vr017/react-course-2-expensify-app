
// const person = {
//     name: 'Victor',
//     age: 33,
//     location: {
//         city: 'NY',
//         temp: 92
//     }
// };

// const { name: firtstName = 'Nombre', age } = person;
// console.log(`${firtstName} is ${age}.`);

// const { city, temp } = person.location;
// if (city && temp){
//     console.log(`It's ${temp} is ${city}.`)
// }


// const book = {
//     title: 'Test name',
//     author: 'Author',
//     publisher: {
//        // name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


const address = [
    '12356 Ehtdff Street',
    'Philadelphia',
    'Pennsylvania',
    '19147'
];

const [ street, city, state = 'New York', zip ] = address;
console.log(`You are in ${city}, ${state}.`);

const item = [
    'Coffee (hot)',
    '$2.00',
    '$2.50',
    '$2.75'
];
const [ product, small, medium, large ] = item;
console.log(`A medium ${product} cost ${medium}`);