import Vue from 'vue'

const state = {
  auth: false,
}

const getters = {
  getUserAuth(state) {
    return state.auth
  },
}

const mutations = {
  setAuthCookie: function (state, token) {
    Vue.$cookies.set('Authorization', token, '745d')
  },
  setUserAuth: function (state, isAuthenticated) {
    state.auth = isAuthenticated
  },
}

const actions = {
  loginUser(context, data) {
    Vue.http
      .post(`user`, {
        userName: data.name,
        password: data.password,
      })
      .then((response) => {
        context.commit('setAuthCookie', response.body.token)
        alert('Loged In :)')
      })
      .catch(() => {
        alert('Stop My Man')
      })
  },
  checkUserLogin(context) {
    Vue.http.get('user').then((response) => {
      context.commit('setUserAuth', response.body.result)
    })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
}
