import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Vuex from "vuex";
import VueCookies from "vue-cookies";
import { store } from "./store/store.js";
import { routes } from "./Routes";
import VueCarousel from "vue-carousel";
import VueEllipseProgress from "vue-ellipse-progress";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueCarousel);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(VueCookies);
Vue.use(VueEllipseProgress);

Vue.http.options.root = "https://apiaddress/api/";

Vue.http.interceptors.push(function (request) {
  request.headers.set(
    "Authorization",
    `Bearer ${Vue.$cookies.get("Authorization")}`
  );
});

export const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach(async (to, from, next) => {
  if (to.name == "Admin") {
    if (!store.getters.getUserAuth) {
      return next({ name: "404" });
    } else {
      return next();
    }
  } else await next();
});

new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});
