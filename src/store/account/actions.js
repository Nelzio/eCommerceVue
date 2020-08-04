import firebase from "../../firebase/firebase"
import router from '../../router'

export function googleLogin({ commit }) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
            let userData = {
                displayName: result.user.displayName,
                email: result.user.email,
                emailVerified: result.user.emailVerified,
                phoneNumber: result.user.phoneNumber,
                photoURL: result.user.photoURL,
                refreshToken: result.user.refreshToken,
                uid: result.user.uid
            }

            commit("setUserData", userData)
            router.push('/')
        })
        .catch(function (error) {
            console.log(error)
        });
}
