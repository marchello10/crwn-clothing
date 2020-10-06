import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore();

//finds documents or collections
// firestore.collection('users').doc('XdZHUHbyfAk2ktGpBi8P').
//         collection('cartItems').doc('aVqp54DfinSD9id6mDBb')
// firestore.doc('/users/XdZHUHbyfAk2ktGpBi8P/cartItems/aVqp54DfinSD9id6mDBb/')
// firestore.collection('/users/XdZHUHbyfAk2ktGpBi8P/cartItems')