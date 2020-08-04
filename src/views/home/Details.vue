<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <div class="card text-left shadow-md">
          <img
            class="card-img-top"
            :src="product.image"
            alt
          />
        </div>
      </div>
      <div class="col-6 text-left text-justify">
        <div class="display-3">{{ product.title }}</div>
        <p class="lead text-justify">{{ product.description }}</p>
        <div>
          <p class="h3">Price</p>
          <p class="h2">${{ product.price }}</p>
        </div>
        <div>
          <button type="button" class="btn btn-primary btn-lg btn-block">ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters("product", ["product"])
  },
  methods: {
    ...mapActions("product", ["productDetails"]),
    getProduct() {
      this.productDetails(this.$route.params.idProduct)
    }
  },
  mounted () {
    this.getProduct()
  }
};
</script>

<style>
.container-fluid {
  padding: 30px;
}
.image-product {
  width: 100%;
}
.card * {
  max-height: 85vh;
}
</style>