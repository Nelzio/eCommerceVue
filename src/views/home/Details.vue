<template>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
      <div class="col-6">
        <div class="card text-left shadow-md">
          <img
            class="card-img-top"
            src="https://d3k1tj8fr6zqkl.cloudfront.net/sites/files/loveandbravery/productimg/202001/566yona1b1.jpg"
            alt
          />
        </div>
      </div>
      <div class="col-6 text-left text-justify">
        <div class="display-3">Product Title</div>
        <p class="lead text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eveniet dolores sequi alias quos deserunt, aspernatur culpa aliquid molestiae voluptas atque, distinctio dignissimos quod. Amet vel necessitatibus repudiandae aspernatur similique.</p>
        <div>
          <p class="h3">Price</p>
          <p class="h2">$150</p>
        </div>
        <div>
          <button type="button" class="btn btn-primary btn-lg btn-block">ADD TO CART</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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