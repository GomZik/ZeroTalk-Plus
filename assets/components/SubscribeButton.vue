<script>
  export default {

  }
</script>

<template>
  <button class="subscribe">
    <slot></slot>
  </button>
</template>

<style lang="stylus" scoped>
  .subscribe
    background-color transparent
    border none
    font-size 16px
    font-weight lighter
    padding 10px 20px
    box-sizing border-box
    transition background-color .3s ease

    &:hover
      background-color rgba(255, 255, 255, 0.7)
</style>
