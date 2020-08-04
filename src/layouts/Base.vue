<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <router-link class="navbar-brand" to="/">CS-eCommerce</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link h4" to="/">Home</router-link>
            </li>
            <li class="nav-item h4">
            <router-link class="nav-link h4" to="/profile">Profile</router-link>
            </li>
          </ul>-->
          <div v-if="user.photoURL" class="ml-auto">
            <img
              :src="user.photoURL"
              class="img-thumbnail profile-image"
              alt
            />
            <router-link class="btn btn-primary my-2 my-sm-0" to="/admin/add">Add Product</router-link>
          </div>
          <router-link v-else class="btn btn-primary my-2 my-sm-0 ml-auto" to="/login">Login</router-link>
          <router-link class="btn btn-primary my-2 my-sm-0" to="/cart">
            <img
              src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png"
              width="50"
              alt
            />
            <span class="badge badge-danger badge-pill">14</span>
          </router-link>
        </div>
      </nav>
    </div>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Base",
  computed: {
    ...mapGetters("account", ["user"])
  }
};
</script>

<style>
.profile-image {
  width: 50px;
  border-radius: 100% !important;
}
.page-container {
  padding-top: 81px;
}
</style>