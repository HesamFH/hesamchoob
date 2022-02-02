import Vue from "vue";
import Vuex from "vuex";
import Products from "@/store/modules/Products";
import User from "@/store/modules/User";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  modules: {
    Products,
    User,
  },
});
