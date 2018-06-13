<template>
  <div class="main-nav">
    <a href @click.prevent >
      <img src="~src/assets/logo.png" alt="Tiger Trade Logo" />
    </a>
    <ul class="nav">
      <li v-for="(item, index) in menu" :key="index">
        <router-link :to="item.to">
          <icon :name="item.icon"></icon>
          <span> {{ $t(item.name) }} </span>
        </router-link>
      </li>
    </ul>
    <ul class="setting">
      <settings></settings>
    </ul>
  </div>
</template>

<script>
import menu from './menu.js'
import Settings from 'mod/Settings'
export default {
  name: 'NavBar',
  data () {
    return {
      menu
    }
  },
  components: {
    Settings
  }
}
</script>

<style scoped lang="scss">
  .main-nav {
    display: flex;
    height: 40px;
    img {
      width: 20px;
      height: 20px;
    }
    .nav {
      display: flex;
    }
  }
</style>
