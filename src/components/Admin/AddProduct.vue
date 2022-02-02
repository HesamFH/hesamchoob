<template>
  <div class="row align-items-center flex-column text-center">
    <div class="col-6 d-flex align-items-center flex-column">
      <form class="form-group">
        <label for="Img">عکس</label>
        <br />
        <label class="btn btn-warning">
          انتخاب
          <input
            type="file"
            id="Img"
            class="form-control"
            @change="getFile"
            hidden
          />
        </label>
        <br />
        <label>
          دسته بندی
          <ul class="list-group" id="cat-list">
            <li
              v-for="(category, index) in categories"
              :key="index"
              class="list-group-item"
            >
              <label>
                <input
                  type="radio"
                  name="categoryId"
                  :value="category.categoryId"
                  v-model="categoryId"
                  required
                />
                {{ category.categoryName }}
              </label>
            </li>
          </ul>
        </label>
        <br />
        <button type="submit" class="btn btn-info" @click.prevent="postProduct">
          پست
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddProduct",
  data() {
    return {
      file: {},
      categoryId: 0,
    };
  },
  methods: {
    getFile(e) {
      this.file = e.target.files[0];
    },
    postProduct() {
      const formData = new FormData();
      formData.append("file", this.file);

      if (this.categoryId != 0 && this.file != {}) {
        this.$store.dispatch("postProduct", {
          categoryId: this.categoryId,
          data: formData,
        });
      } else {
        alert("Please select a category");
      }
    },
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    },
  },
  created() {
    this.$store.dispatch("getCategories");
  },
};
</script>

<style scoped>
#cat-list {
  margin-right: 2.5rem;
}
</style>
