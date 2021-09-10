// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/App.vue'
import router from './router.js'
console.log(router)

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  data: {
    seaId: 1
  },
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
