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
import { mapState } from "vuex";
import firebase from "../../../firebase/firebase"
export default {
  data() {
    return {
      loading: false,
      image: {
        url: null,
        name: "",
        file: null,
      },
      product: {
        title: "",
        price: null,
        description: "",
      },
    };
  },
  computed: {
    ...mapState("product", ["uploadingData"]),
  },
  methods: {
    onSubmit() {
      let data = {
        image: this.image,
        data: this.product,
      };
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
        this.image.name = filename;
        this.product;
      });
      fileReader.readAsDataURL(files[0]);
      this.image.file = files[0];
    },
    addProduct(payload) {
      const vm = this;
      // Create the file metadata
      var storageRef = firebase.storage().ref();

      // Upload file and metadata to the object 'images/mountains.jpg'
      var uploadTask = storageRef.child("products/" + payload.image.name).put(payload.image.file);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        function (snapshot) {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log("Upload is running");
              break;
          }
        },
        function (error) {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;

            case "storage/canceled":
              // User canceled the upload
              break;

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        function () {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log("File available at", downloadURL);
            payload.data["image"] = downloadURL;
            firebase
              .firestore()
              .collection("products")
              .add(payload.data)
              .then(function () {
                alert("Product added successfully!");
                vm.$router.push("/");
              })
              .catch(function (error) {
                console.error("Error writing document: ", error);
              });
          });
        }
      );
    },
  },
};
</script>

<style>
.image-product {
  height: 300px;
}
</style>