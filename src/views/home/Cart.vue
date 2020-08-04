<template>
  <div class="container" style="padding: 30px">
      <div class="row d-flex justify-content-center">
        <div class="list-group col-8">
        <a
            v-for="i in 10"
            :key="i"
            href="#"
            class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
            <img
            src="https://d3k1tj8fr6zqkl.cloudfront.net/sites/files/loveandbravery/productimg/202001/566yona1b1.jpg"
            alt
            height="60"
            width="60"
            />
            <p class="h4">Product Title</p>
            <div>
            <p>Price</p>
            <p>$1250</p>
            </div>
        </a>
        <button type="button" class="btn btn-primary btn-lg btn-block mt-4">Checkout</button>
        </div>

      </div>
  </div>
</template>

<script>
export default {
  name: "Cart"
};
</script>

<style>
</style>