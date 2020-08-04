<template>
  <div>
    <div class="container" style="padding-top: 30%">
      <div class="row">
        <div class="col text-center">
          <button @click="googleLogin()" type="button" class="btn btn-secondary">
            <img
              src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
              alt
              height="40"
              width="40"
            />
            Login With Google
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../../firebase/firebase"
export default {
  name: "Login",
  methods: {
    googleLogin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user)
          // ...
        })
        .catch(function(error) {
          // Handle Errors here.
          // var errorCode = error.code;
          console.log(error)
          // var errorMessage = error.message;
          // // The email of the user's account used.
          // var email = error.email;
          // // The firebase.auth.AuthCredential type that was used.
          // var credential = error.credential;
          // ...
        });
    }
  }
};
</script>

<style>
</style>