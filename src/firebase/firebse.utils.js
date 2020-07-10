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





// Setting up Google authentification utulity 
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


// export const createUserProfile = async function (userAuth, extraInfo) {
//     if (!userAuth) return
//     // Сначала мы получаем местоположение в БД.
//     const userRef = await firestore.doc(`authenticatedUsers/${userAuth.uid}`)
//     console.log('BD location object (userRef)', userRef)
//     // Пытаемся взять из данной директории в БД, если данного пользователя нету, тогда добавляем. 
//     const docSnapshot = await userRef.get()
//     console.log('getting user form DB (docSnapshot)', docSnapshot)
//     if (!docSnapshot.exists) {
//         try {
//             console.log('user doesnt exist')
//             // Добавляем в БД
//             await userRef.set({
//                 displayName: userAuth.displayName,
//                 email: userAuth.email,
//                 timeCreated: new Date()
//             })
//         } catch (error) {
//             console.log('error creating user ', error.message)
//         }
//     }

//     return userRef
// }






