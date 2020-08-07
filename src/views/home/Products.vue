<template>
  <div style="padding: 25px;">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div class="card mb-4 shadow-sm">
            <img
              :src="product.imageUrl"
              class="card-img-top product-image"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-left">{{ product.name }}</h5>
              <div class="row">
                <router-link type="button" class="btn btn-primary btn-lg" :to="'/details/' + product.id">Details</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("product", ["products"]),
  },
  methods: {
    ...mapActions("product", ["getProducts", "addCart", "removeCart"]),
  },
  mounted() {
    this.getProducts();
  }
};
</script>

<style>
.card .product-image {
  height: 300px;
}
</style>