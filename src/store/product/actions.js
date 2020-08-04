import firebase from "../../firebase/firebase"
// import router from '../../router'

export function addProduc(actionOptions, payload) {
    firebase.firestore().collection("products").doc(payload.title).set(
        payload
    )
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

export function editProduc(/* { commit } */) {
}

export function getProducs(/* { commit } */) {
}

export function producDetails(/* { commit } */) {
}
