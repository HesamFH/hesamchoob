<template>
  <header>
    <div class="row">
      <div class="col-12 mb-3">
        <img
          src="http://hesamchoob.ir/logo.png"
          alt="Logo"
          id="Logo"
          class="img-fluid"
        />
        <h2 class="d-inline h-bold">
          <span id="title-darker">حسام</span> <span id="title-color">چوب</span>
        </h2>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-12">
        <nav>
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/" exact
                >خانه</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/About"
                >تماس با ما</router-link
              >
            </li>
            <li class="nav-item" v-if="isAdmin">
              <router-link
                class="nav-link"
                active-class="active"
                to="/PostProduct"
                >ادمین</router-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isAdmin() {
      return this.$store.getters.getUserAuth;
    },
  },
};
</script>

<style scoped>
#Logo {
  max-height: 60px;
  max-width: 50px;
  display: inline;
  margin-left: 0.8rem;
}

#title-color {
  color: #34ce57;
}

#title-darker {
  color: #1a632b;
}

.h-bold {
  font-weight: bold;
}

.nav-link:not(.active) {
  color: #2ecd53;
}
</style>
