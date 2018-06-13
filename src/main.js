import Vue from 'vue'
import App from './App.vue'
import 'src/config'
import router from 'src/router'
import i18n from 'src/i18n'

import 'src/components'

Vue.config.productionTip = false

async function bootrap () {
  window.app = new Vue({
    render: h => h(App),
    router,
    i18n
  }).$mount('#app')
}
bootrap()
