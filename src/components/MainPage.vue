<template>
  <div class="row" v-if="isLoaded">
    <category-frame
      v-for="(category, index) in categories"
      :key="index"
      :categoryName="category.categoryName"
      :categoryId="category.categoryId"
      :categoryImage="category.previewImage"
      class="category"
    >
    </category-frame>
  </div>
  <div class="text-center" v-else>
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
import categoryFrame from "./CategoryFrame";

export default {
  data() {
    return {
      isLoaded: false,
    };
  },
  components: {
    categoryFrame,
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    },
  },
  watch: {
    categories() {
      this.isLoaded = true;
    },
  },
  created() {
    this.$store.dispatch("getCategories");
  },
};
</script>

<style scoped>
.category:nth-child(even) {
  border: #1a632b solid 3px !important;
}
</style>
