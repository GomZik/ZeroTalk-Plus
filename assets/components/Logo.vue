<script>
  export default {
    props: {
      'bgcolor': {
        default: '#db3207'
      }
    }
  }
</script>

<template>
  <div class="logo-container">
    <a class="logo" :style="{
      backgroundColor: bgcolor
    }">
      <slot>ZeroTalk</slot>
    </a>
    <span class="prj-logo" :style="{
      color: bgcolor
    }">+</span>
  </div>
</template>

<style lang="stylus" scoped>
  .logo-container
    float left

  .logo
    padding 10px
    background-color #DB3207
    margin-left -10px
    font-size 20px
    display inline-block
    color white
    font-family consolas, menlo, monospace
    line-height 1em
    text-transform uppercase

  .prj-logo
    display inline-block
    font-size 40px
    color #DB3207
    font-family consolas, menlo, monospace
    line-height 40px
    text-transform uppercase
    font-weight bolder
    height 40px
    vertical-align middle

</style>
