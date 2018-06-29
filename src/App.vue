<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from 'mod/NavBar'

export default {
  name: 'app',
  components: {
    NavBar
  }
}
</script>

<style scoped lang="scss">
@import "src/style/dark/index";
#app {
  height: 100%;
  width: 100%;
  background-color: var(--darken-black);
  display: flex;
}
</style>
