import Vue from "vue";

const state = {
  Categories: {},
  products: {},
  categoryName: "",
};

const getters = {
  getCategories(state) {
    return state.Categories;
  },
  getProducts(state) {
    return state.products;
  },
  getCategoryName(state) {
    return state.categoryName;
  },
};

const mutations = {
  setCategories(state, data) {
    state.Categories = data;
  },
  setProducts(state, data) {
    state.products = data;
  },
  setCategoryName(state, data) {
    state.categoryName = data;
  },
};

const actions = {
  getCategories(state) {
    Vue.http
      .get("home/getcategories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        state.commit("setCategories", data);
      });
  },
  postProduct(state, infos) {
    Vue.http
      .post(`home/addproduct?categoryId=${infos.categoryId}`, infos.data)
      .then(() => {
        alert("Product added successfully");
      })
      .catch(() => {
        alert("not ok");
      });
  },
  getProducts(state, categoryId) {
    Vue.http
      .get(`home/GetProducts?categoryId=${categoryId}`)
      .then((res) => {
        state.commit("setProducts", res.body);
      })
      .catch(() => {
        alert("An Error Has Occurred");
      });
  },
  getCategoryName(state, categoryId) {
    Vue.http
      .get(`home/GetCategoryName?categoryId=${categoryId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        state.commit("setCategoryName", data);
      });
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
