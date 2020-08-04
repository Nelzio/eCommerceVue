<template>
  <div style="padding: 30px;">
    <div class="row d-flex justify-content-center">
      <div class="col-7">
        <img v-if="image.url" :src="image.url" class="image-product img-thumbnail" alt="Responsive image" />
        <img
          v-else
          src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
          class="image-product img-thumbnail"
          alt="Responsive image"
        />
      </div>
      <form class="col-7 text-left">
        <div class="form-group">
          <label>Title</label>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
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
              <label v-if="image.name" class="custom-file-label" for="inputGroupFile01">{{ image.name }}</label>
              <label v-else class="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Description</label>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <button type="submit" class="btn btn-lg btn-block btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: {
        url: null,
        name: ""
      }
    };
  },
  methods: {
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
        this.image.name = filename;
      });
      fileReader.readAsDataURL(files[0]);
    }
  }
};
</script>

<style>
.image-product {
  height: 300px;
}
</style>