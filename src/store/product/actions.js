import firebase from "../../firebase/firebase"
// import router from '../../router'

export function getProducts({ commit }) {
    let products = []
    firebase.firestore().collection("products").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            products.push({
                id: doc.id,
                description: doc.data().description,
                image: doc.data().image,
                price: doc.data().price,
                title: doc.data().title
            })
        });
        commit("setProducts", products)
    });
}

export function productDetails({ commit }, id) {
    var docRef = firebase.firestore().collection("products").doc(id);

    docRef.get().then(function (doc) {
        if (doc.exists) {
            let data = {
                id: doc.id,
                description: doc.data().description,
                image: doc.data().image,
                price: doc.data().price,
                title: doc.data().title
            }
            commit("setProduct", data)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}

export function addCart({ commit, getters }, id) {
    let cart = getters.cart
    cart.push(id)
    commit("setCart", cart)
}

export function removeCart({ commit, getters }, id) {
    let cart = []
    if (id) {
        for (let index = 0; index < getters.cart.length; index++) {
            const element = getters.cart[index];
            if (element.id !== id) {
                cart.push(element)
            }
        }
    }
    commit("setCart", cart)
}
