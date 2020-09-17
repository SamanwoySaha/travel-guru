import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeFirebaseFramework = () => {
    firebase.initializeApp(firebaseConfig);
}

export const createUserWithEmailAndPassword = (firstName, lastName, email, password) => {
    return (firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = {
                name: firstName + ' ' + lastName,
                email: email,
                success: true,
                error: ''
            }
            updateUserInfo(newUserInfo.name, email);
            return newUserInfo;
        })
        .catch(err => {
            const newUserInfo = {
                name: '',
                email: '',
                photo: '',
                success: false,
                error: err.message
            }
            return newUserInfo;
        })
    );
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
        const { displayName, email, photoURL } = res.user;
        const newUserInfo = {
            name: displayName,
            email,
            photo: photoURL,
            success: true,
            error: ''
        }
        updateUserInfo(displayName, email, photoURL);
        return newUserInfo;
    })
    .catch(err => {
        const newUserInfo = {
            name: '',
            email: '',
            photo: '',
            success: false,
            error: err.message
        }
        return newUserInfo;
    });
}

const handleSignIn = provider => {
    return firebase.auth().signInWithPopup(provider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const newUserInfo = {
                name: displayName,
                email,
                photo: photoURL,
                success: true,
                error: ''
            }
            updateUserInfo(displayName, email, photoURL);
            return newUserInfo;
        })
        .catch(err => {
            const newUserInfo = {
                name: '',
                email: '',
                photo: '',
                success: false,
                error: err.message
            }
            return newUserInfo;
        });
}

export const handleFbSignIn = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    return handleSignIn(provider);
}

export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return handleSignIn(provider);
}

export const handleTwitterSignIn = () => {
    var provider = new firebase.auth.TwitterAuthProvider();
    return handleSignIn(provider);
}

export const handleGithubSignIn = () => {
    var provider = new firebase.auth.GithubAuthProvider();
    return handleSignIn(provider);
}

export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
        const newUserInfo = {
            name: '',
            email: '',
            photo: '',
            error: '',
            success: false
        }
        return newUserInfo;
    })
    .catch(err => {
        const newUserInfo = {
            name: '',
            email: '',
            photo: '',
            error: err.message,
            success: false
        }
        return newUserInfo;
    })
}

const updateUserInfo = (name, email, photo) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name,
        email: email,
        photoURL: photo,
    })
}