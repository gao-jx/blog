import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from 'src/i18n/lang/zh'
Vue.use(VueI18n)

export default new VueI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: {
    zh
  }
})
