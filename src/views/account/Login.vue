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
import { mapActions } from "vuex";
export default {
  name: "Login",
  methods: {
    ...mapActions("account", ["googleLogin"])
  }
};
</script>

<style>
</style>