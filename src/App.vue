<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <transition
        id="tran"
        appear
        enter-active-class="animate__animated animate__fadeIn anim-dur"
        leave-active-class="animate__animated animate__fadeOut anim-dur"
        mode="out-in"
      >
        <router-view></router-view>
      </transition>
      <hr />
      <app-footer v-if="$route.name != 'About'" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/MainComps/Header";
import Footer from "@/components/MainComps/Footer";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  created() {
    this.$store.dispatch("checkUserLogin");
  },
};
</script>

<style>
.container {
  margin-top: 8px;
}
.anim-dur {
  --animate-duration: 0.1s;
}
</style>
