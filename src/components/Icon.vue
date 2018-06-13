<template>
  <svg :class="iconClass" aria-hidden="true" :style="sizeValue">
    <use crossorigin :xlink:href="icon.symbol" />
  </svg>
</template>

<script>
import icons from 'src/assets/icons'

const ajax = new window.XMLHttpRequest()
ajax.open('GET', `/img/sprite.svg?t=${new Date().getTime()}`, true)
ajax.send()
ajax.onload = function () {
  const div = document.createElement('div')
  div.setAttribute('style', 'display: none;')
  div.innerHTML = ajax.responseText
  document.body.insertBefore(div, document.body.childNodes[0])
}

export default {
  name: 'Icon',
  props: {
    name: {
      required: true
    },
    size: {
      type: String,
      default: '1em'
    },
    spin: Boolean
  },
  computed: {
    icon () {
      return icons[this.name]
    },
    iconName () {
      return '#icon-' + this.name
    },
    sizeValue () {
      return {
        'font-size': this.size
      }
    },
    iconClass () {
      return [
        'icon',
        'icon-' + this.name,
        this.spin ? 'spinner' : null
      ]
    }
  }
}
</script>
<style scoped>
body .icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  fill: currentColor;
  vertical-align: inherit;
}
</style>
