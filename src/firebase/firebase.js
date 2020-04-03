import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };  








// database.ref('notes')
//     .once('value')
//     .then((snapshot) => {
//         const notes = [];

//         snapshot.forEach((childNote) => {
//             notes.push({
//                 id: childNote.key,
//                 ...childNote.val
//             });
//         });

//         console.database.ref('notes')
//     .once('value')
//     .then((snapshot) => {
//         const notes = [];

//         snapshot.forEach((childNote) => {
//             notes.push({
//                 id: childNote.key,
//                 ...childNote.val
//             });
//         });

//         console.log(notes);log(notes);
    // });

// database.ref('notes').push({
//     title: 'Fists note!',
//     body: 'This is my note'
// });


// const firebaseNotes = {
//     notes: {
//         lajsflasdfa: {
//             title: 'Fists note!',
//             body: 'This is my note'
//         },
//         asdfasff: {
//             title: 'Second title',
//             body: 'This is my second note'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '3464sdf',
//     title: 'Another note',
//     body: 'this is another body'
// }];

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error: ', e);
// });


// setTimeout(() => {
//     database.ref('age').set(56);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);



// setTimeout(() => {
//     database.ref('age').set(99);
// }, 10500);
// database.ref()
//     .once('value')
//     .then((snapshot) => {
//        const val = snapshot.val();
//        console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data ', e);
//     });

// database.ref().set({
//     name: 'Igor Popov',
//     age: 30,
//     isSingle: false,
//     location: {
//         city: 'Kirovograd',
//         country: 'Uganda'
//     }
// }).then(() => {
//     console.log('Data is saved2');
// }).catch((error) => {
//     console.log('This failed.', error);
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) => {
//         console.log('Din not remove data', e);
//     });


// database.ref().update({
//     name: 'Irra88',
//     age: 444444,
//     job: 'Software developer', // you can add a new value
//     isSingle: null // you can delete
// });  

// database.ref().update({
//     'location/city': 'Madrid' // to update nested object
// });

// database.ref().set(null) it's like remove


// database.ref().set('This is my data');

// database.ref('age').set(27);
// database.ref('location/city').set('Hex');

// database.ref('attributes').set({
//     height: 180,
//     weight: 85
// }).then(() => {
//     console.log('attributes are saved');
// }).catch((e) => {
//     console.log('failed to set the attributes', e);
// });