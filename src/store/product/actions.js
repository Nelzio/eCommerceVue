import firebase from "../../firebase/firebase"
// import router from '../../router'

export function addProduct({ commit }, payload) {
    commit("setLoad", true)
    // Create the file metadata
    var storageRef = firebase.storage().ref();


    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('products/').put(payload.image.file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, function (error) {

            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect error.serverResponse
                    break;
            }
        }, function () {
            // Upload completed successfully, now we can get the download URL
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at', downloadURL);
                payload.data["image"] = downloadURL
                firebase.firestore().collection("products").set(
                    payload.data
                )
                    .then(function () {
                        console.log("Document successfully written!");
                        commit("setLoad", false)
                    })
                    .catch(function (error) {
                        console.error("Error writing document: ", error);
                    });
            });
        });
}

export function editProduct(/* { commit } */) {
}

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
            commit("setProduct", doc.data())
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}

export function addCart({ commit, getters }, payload) {
    let cart = []
    if (getters.cart.includes(payload)) {
        getters.cart.forEach(element => {
            if (element != payload) {
                cart.push(element)
            }
        });
    } else {
        cart = getters.cart
        cart.push(payload)
    }
    commit("setCart", cart)
}
