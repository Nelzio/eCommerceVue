<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <th scope="row">
              <img :src="product.image" width="60" alt />
            </th>
            <td>{{ product.title }}</td>
            <td>
              <router-link
                type="button"
                class="btn btn-primary"
                :to="'/details/' + product.id"
              >Details</router-link>
              <router-link
                type="button"
                class="btn btn-warning"
                :to="'/admin/edit/' + product.id"
              >Edit</router-link>
              <button @click="deleteProduct(product.id)" type="button" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import firebase from "../../firebase/firebase";
export default {
  computed: {
    ...mapGetters("product", ["products"]),
  },
  methods: {
    ...mapActions("product", ["getProducts"]),
    deleteProduct(id) {
      const vm = this;
      if (!window.confirm("Delete product?")) {
        return;
      }
      firebase
        .firestore()
        .collection("products")
        .doc(id)
        .delete()
        .then(function () {
          alert("Product was deleted");
          vm.getProducts()
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },
  },
};
</script>

<style>
</style>