<template>
  <div class="container" style="padding: 30px">
      <div class="row d-flex justify-content-center">
        <div class="list-group col-8">
        <a
            v-for="item in cart"
            :key="item.id"
            href="#"
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
            <img
            :src="item.image"
            alt
            height="60"
            width="60"
            />
            <p class="h4">P{{ item.title }}</p>
            <div>
            <p>Price</p>
            <p>${{ item.price }}</p>
            </div>
        </a>
        <button type="button" class="btn btn-primary btn-lg btn-block mt-4">Checkout</button>
        </div>

      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapGetters("product", ["cart"])
  }
  
};
</script>

<style>
</style>