<template>
  <div class="text-center w-50" id="login-box">
    <div class="form-group">
      <h1>ورود</h1>
      <form>
        <label for="floatingInput">Username</label>
        <input
          type="text"
          class="form-control mb-2"
          id="floatingInput"
          v-model="name"
        />
        <label for="floatingInput">Password</label>
        <input
          type="password"
          class="form-control mb-2"
          id="floatingInput"
          v-model="password"
        />
        <button class="btn btn-primary btn-block" @click.prevent="loginUser">
          ورود
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: "",
    };
  },
  methods: {
    loginUser() {
      this.$store.dispatch("loginUser", {
        name: this.name,
        password: this.password,
      });
    },
  },
};
</script>

<style>
#login-box {
  margin-right: 21vw;
}
</style>
