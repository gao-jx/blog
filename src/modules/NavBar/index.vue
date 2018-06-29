<template>
  <div class="main-nav">
    <div href @click.prevent class="titleIcon">
      <img src="~src/assets/logo.png" alt="Tiger Trade Logo" />
      <span>{{$t('title')}}</span>
    </div>
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
    width: 100px;
    background-color: var(--default-bg);
    padding: 40px 10px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .titleIcon {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      margin-bottom: 20px;
      img {
        width: 40px;
        display: inline-block;
      }
    }
    .nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      li {
        margin-bottom: 20px;
      }
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--default-font-color);
      }
       li a.router-link-active {
          color: var(--active-color);
        }
    }
  }
</style>
