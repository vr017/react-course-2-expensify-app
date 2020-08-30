import * as firebase from 'firebase';
import { isNextDay } from 'react-dates';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
    // ,
    // appId: "app-id",
    // measurementId: "G-measurement-id",
  };

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};


// //child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//     console.log(expenses);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     amount: 3535,
//     createdAt: 123557788,
//     description: 'desc',
//     note: 'test note'
// });

//database.ref('notes/-MFbUdjFyvCgpEvkBqjc').remove();

// database.ref('notes').push({
//     title: 'Watch list',
//     body: 'Go for the run, tresadsad'
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
// console.log('Error with data fetching', e);
// });
//------
// const onValueChange = database.ref().on('value', (snapshot) => {
//         console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29)
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(() => {
//         console.log('error fetching data', e);
//     });

// database.ref().set({
//       name: 'Victor Campos',
//       age: 34,
//       stressLevel: 6,
//       job: {
//           title: 'Software Developer',
//           company: 'Google'
//         },
//       location: {
//           city: 'NY',
//           Country: 'USA'
//       }
// }).then(() => {
//     console.log('data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref()
// .update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })
// .then(() => {
//     console.log('Data was updated');
// }).catch((e) => {
//     console.log('Did not updated data', e);
// });

// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Boston'
// });

// database.ref('isSingle')
// .set(null)
// .then(() => {
//     console.log('Data was updated');
// }).catch((e) => {
//     console.log('Did not updated data', e);
// });

// database.ref('isSingle')
// .remove()
// .then(() => {
//     console.log('Data was removed');
// }).catch((e) => {
//     console.log('Did not removed data', e);
// });