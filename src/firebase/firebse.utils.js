import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCmpPmqljqHcKg-NSoTp7nOqRtViGXyhlc",
    authDomain: "e-commerce-md.firebaseapp.com",
    databaseURL: "https://e-commerce-md.firebaseio.com",
    projectId: "e-commerce-md",
    storageBucket: "e-commerce-md.appspot.com",
    messagingSenderId: "905521972745",
    appId: "1:905521972745:web:ec52b42e3be1c9d7941ad8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const addUserToFirestore = async (authenticatedUser, userName) => {
    const docRef = firestore.doc(`authenticatedUsers/${authenticatedUser.uid}`);
    const { exists } = await docRef.get();
    if (!exists) {
        const { uid, email } = authenticatedUser;
        const theName = userName ? userName : 'Unknown person'
        const newUser = await docRef.set({
            name: theName,
            email: email,
            id: uid,
            timeCreated: new Date().toLocaleString()
        });
    }
    return docRef;
}

// Adding data to Firestore
export const addProductsToFirestore = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })

    return await batch.commit()
}

// Setting up Google authentification utility 
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const twitterInProvider = new firebase.auth.TwitterAuthProvider();
// We always trigger Google Pop-up each time we use this GoogleAuthProvider for authentification
googleProvider.setCustomParameters({ prompt: 'select_account' });
facebookProvider.setCustomParameters({ prompt: 'select_account' });
twitterInProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);
export const signInWithTwitter = () => auth.signInWithPopup(twitterInProvider);

export default firebase;





