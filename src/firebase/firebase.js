import * as firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyD3aFjB2U_FLkHt0PUvnyw8chcZQwy2jMc",
    authDomain: "expensify-prem.firebaseapp.com",
    databaseURL: "https://expensify-prem.firebaseio.com",
    projectId: "expensify-prem",
    storageBucket: "expensify-prem.appspot.com",
    messagingSenderId: "377018031325"
  };

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };




//
// database.ref().on("value", function(snap) {
//   if (snap.val() === true) {
//     alert("connected");
//   } else {
//     alert("not connected");
//   }
// });

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
//
//
// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//
//     console.log(expenses);
//   });

// database.ref('expenses').on('value', (snapshot) => {
//       const expenses = [];
//
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//       });
//
//       console.log(expenses);
// });


// database.ref('expenses').push({
//   description: 'Coffee',
//   note: 'Coffee at Himalayan Java',
//   amount: 450,
//   createdAt: 12345
// });



// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// database.ref('name')
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// })
// .catch((e) => {
//   console.log('Error fetcning data', e);
// })

// database.ref().set({
//   name: "Prem Regmi",
//   age: 28,
//   streesLevel: 6,
//   job:{
//     title:'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Kathmandu',
//     country: 'Nepal'
//   }
// }).then(() => {
//   console.log('Data is saved');
// }).catch((e) => {
//   console.log('This failed', e);
// });
//
// database.ref().update({
//   streesLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Pokhara'
// });

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });
