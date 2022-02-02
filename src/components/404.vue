<template>
  <div class="text-center">
    <h1>صفحه ای که میخواستی پیدا نشد 😔</h1>
    <p>ارور 404</p>
    <button class="btn btn-primary btn-lg" @click="backToHome()">
      برگشت به صفحه اصلی
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    backToHome: function () {
      this.$router.push("/");
    },
  },
};
</script>

<style></style>
