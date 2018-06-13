import Butter from './Butter'
import Vue from 'vue'
Vue.use({
  install (vue) {
    Vue.butter = Butter
    vue.prototype.$butter = Butter
  }
})
