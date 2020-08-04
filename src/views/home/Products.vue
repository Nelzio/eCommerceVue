<template>
  <div style="padding: 25px;">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="i in 10" :key="i">
          <div class="card mb-4 shadow-sm">
            <img
              src="https://d3k1tj8fr6zqkl.cloudfront.net/sites/files/loveandbravery/productimg/202001/566yona1b1.jpg"
              class="card-img-top product-image"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-left">Card title</h5>
              <div class="row">
                <router-link type="button" class="btn btn-primary" to="/details">Details</router-link>
                <button type="button" class="ml-2 btn btn-secondary">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.card .product-image {
  height: 300px;
}
</style>