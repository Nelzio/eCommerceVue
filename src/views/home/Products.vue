<template>
  <div style="padding: 25px;">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="product in products" :key="product.id">
          <div class="card mb-4 shadow-sm">
            <img
              :src="product.image"
              class="card-img-top product-image"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-left">{{ product.title }}</h5>
              <div class="row">
                <router-link type="button" class="btn btn-primary" :to="'/details/' + product.id">Details</router-link>
                <button v-if="!cart.includes(product)" @click.stop="addCart(product)" type="button" class="ml-2 btn btn-secondary">Add to cart</button>
                <button v-else @click.stop="addCart(product)" type="button" class="ml-2 btn btn-secondary">Remove from cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("product", ["products", "cart"])
  },
  methods: {
    ...mapActions("product", ["getProducts", "addCart"])
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