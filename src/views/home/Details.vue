<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <div class="card text-left shadow-md">
          <img class="card-img-top" :src="product.image" alt />
        </div>
      </div>
      <div class="col-6 text-left text-justify">
        <div class="display-3">{{ product.title }}</div>
        <p class="lead text-justify">{{ product.description }}</p>
        <div>
          <p class="h3">Price</p>
          <p class="h2">${{ product.price }}</p>
        </div>
        <div v-if="user.uid">
          <button
            v-if="!isInCardProp"
            @click.stop="addCart(product)"
            type="button"
            class="btn btn-primary btn-lg btn-block"
          >ADD TO CART</button>
          <button
            v-else
            @click.stop="removeCart(product.id)"
            type="button"
            class="btn btn-primary btn-lg btn-block"
          >REMOVE FROM CART</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  data () {
    return {
      isInCardProp: false,
    }
  },
  computed: {
    ...mapGetters("account", ["user"]),
    ...mapGetters("product", ["product"]),
    ...mapState("product", ["cart"]),
  },
  methods: {
    ...mapActions("product", ["productDetails", "addCart", "removeCart"]),

    getProduct() {
      this.productDetails(this.$route.params.idProduct);
    },
    isInCart(id) {
      for (let index = 0; index < this.cart.length; index++) {
        const element = this.cart[index];
        if (element.id === id) {
          return true;
        }
      }
      return false;
    },
  },
  mounted() {
    this.getProduct();
  },
  watch: {
    product(val) {
      this.isInCardProp = this.isInCart(val.id)
    },
    cart() {
      this.isInCardProp = this.isInCart(this.product.id)
    }
  },
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