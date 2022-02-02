<template>
  <div class="col-md-12 text-center tablesCa">
    <h1 class="mb-5">{{ categoryName }}</h1>
    <img
      :src="`https://api.hesamchoob.ir/images/${categoryImage}`"
      class="img-fluid"
      id="table-thumbnail"
    />
    <p>
      <router-link
        :to="`Products/${categoryId}`"
        class="btn btn-info btn-sm mt-5"
        >تصاویر بیشتر</router-link
      >
    </p>
  </div>
</template>

<script>
export default {
  props: ["categoryName", "categoryId", "categoryImage"],
};
</script>

<style>
.tablesCa {
  border: #34ce57 solid 3px;
  border-radius: 10px;
  padding: 1rem;
  margin-top: 0.1rem;
}

#table-thumbnail {
  height: 50vh;
}
</style>
