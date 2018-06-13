import Vue from 'vue'
import Buefy from 'buefy'
import Icon from './Icon'

Vue.component('Icon', Icon)

Vue.use(Buefy, {
  defaultIconPack: 'fas'
})
