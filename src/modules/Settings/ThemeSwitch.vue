<template>
  <a href @click.prevent="toggleTheme()">
    <icon :name="theme.icon"></icon>
  </a>
</template>
<script>
const themeList = [{
  name: 'dark',
  icon: 'moon'
}, {
  name: 'light',
  icon: 'sun'
}]

export default {
  name: 'ThemeSwitch',
  data: () => ({
    index: 0,
    list: themeList
  }),
  computed: {
    theme () {
      return this.list[this.index]
    },
    nextTheme () {
      return this.list[(this.index + 1) % this.list.length]
    }
  },
  created () {
    this.loadTheme(this.theme)
  },
  methods: {
    async toggleTheme () {
      await this.loadTheme(this.nextTheme)
      this.index = ++this.index % this.list.length
    },
    async loadTheme ({ name }) {
      const loading = this.$loading.open()
      await import(/* webpackChunkName: "theme-[request]" */ `src/style/${name}/`)
        .then(data => {
          console.log(data)
          document.querySelector('html').setAttribute('theme', name)
        })
      loading.close()
    }
  }
}
</script>
