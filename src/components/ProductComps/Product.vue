<template>
  <div class="p-4 justify-content-center" v-if="isLoaded">
    <h1 class="mb-5 text-center">{{ categoryName.name }}</h1>
    <carousel
      id="carousel-1"
      :loop="true"
      :autoplay="true"
      :per-page="1"
      :rtl="true"
      :autoplayTimeout="3000"
      :navigationEnabled="true"
      :center-mode="true"
      style="text-shadow: 1px 1px 2px #333; display: block"
    >
      <slide
        v-for="(item, index) in Pictures"
        :key="index"
        class="d-flex justify-content-center align-items-center"
      >
        <img
          :src="`https://apiaddress/images/${item.imagePath}`"
          class="img-fluid slider-img"
          alt="Product Image"
        />
      </slide>
    </carousel>
  </div>
  <div class="d-flex align-items-center justify-content-center" v-else>
    <vue-ellipse-progress
      color="#1a632b"
      :progress="100"
      :size="80"
      :loading="true"
    >
    </vue-ellipse-progress>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  data() {
    return {
      isLoaded: false,
    };
  },
  components: {
    Carousel,
    Slide,
  },
  computed: {
    Pictures() {
      return this.$store.getters.getProducts;
    },
    categoryName() {
      return this.$store.getters.getCategoryName;
    },
  },
  created() {
    this.$store.dispatch("getProducts", this.$route.params.id);
    this.$store.dispatch("getCategoryName", this.$route.params.id);
  },
  watch: {
    Pictures() {
      this.isLoaded = true;
    },
  },
};
</script>

<style scoped>
.slider-img {
  max-height: 70vh;
}
</style>
