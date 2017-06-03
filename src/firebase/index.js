import firebase from "firebase";

import { config } from "../../config/config";

firebase.initializeApp(config);

export const githubProvider = new firebase.auth.GithubAuthProvider()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const facebookProvider = new firebase.auth.FacebookAuthProvider()
export const twitterProvider = new firebase.auth.TwitterAuthProvider()

export const firebaseRef = firebase.database().ref();
export const auth = firebase.auth();
export default firebase;
