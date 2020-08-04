<template>
  <div style="padding: 30px;">
    <div class="row d-flex justify-content-center">
      <div class="col-7">
        <img
          v-if="image.url"
          :src="image.url"
          class="image-product img-thumbnail"
          alt="Responsive image"
        />
        <img
          v-else
          src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
          class="image-product img-thumbnail"
          alt="Responsive image"
        />
      </div>
      <div class="col-7 text-left">
        <div class="form-group">
          <label>Title</label>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="product.title"
          />
        </div>
        <div class="form-group">
          <label>Price</label>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="product.price"
          />
        </div>
        <div class="form-group">
          <label>Image</label>
          <div class="input-group mb-3">
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01"
                @change="loadImage"
              />
              <label
                v-if="image.name"
                class="custom-file-label"
                for="inputGroupFile01"
              >{{ image.name }}</label>
              <label v-else class="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Description</label>
          <textarea class="form-control" aria-label="With textarea" v-model="product.description"></textarea>
        </div>
        <button v-if="loading" class="btn btn-lg btn-block btn-primary">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </button>
        <button v-else class="btn btn-lg btn-block btn-primary" @click.stop="onSubmit()">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      loading: false,
      image: {
        url: null,
        name: "",
        file: null
      },
      product: {
        title: "",
        price: null,
        description: ""
      }
    };
  },
  computed: {
    ...mapState("product", ["uploadingData"])
  },
  methods: {
    ...mapActions("product", ["addProduct"]),

    onSubmit() {
      let data = {
        image: this.image,
        data: this.product
      }
      this.addProduct(data);
    },
    loadImage(event) {
      const files = event.target.files;
      let filename = files[0].name;
      let file = files[0];
      if (!(file && file["type"].split("/")[0] === "image")) {
        console.log("Error File load");
        return (this.errorFileDialog = true);
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.image.url = fileReader.result;
        this.image.name = filename;this.product
      });
      fileReader.readAsDataURL(files[0]);
      this.image.file = files[0]
    }
  },
  watch: {
    uploadingData(val) {
      this.loading = val;
      if (!val) {
        this.$router.push("/")
      }
    }
  }
};
</script>

<style>
.image-product {
  height: 300px;
}
</style>