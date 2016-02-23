<script>
export default {
  props: ['primary'],
}
</script>

<template>
  <a href="#" class="btn" :class="{
    'btn--primary': primary
  }">
    <slot></slot>
  </a>
</template>

<style lang="stylus" scoped>
  default-button-color = #FFF85F
  primary-button-color = #007AFF

  .btn
    padding 10px 15px
    border-radius 4px
    border-width 2px 3px 3px 2px
    border-style solid
    border-color darken(default-button-color, 30%)
    box-shadow 2px 2px 5px 1px rgba(0, 0, 0, 0.3)
    margin-right 10px
    text-decoration none
    color black
    background-color default-button-color
    font-weight bold
    box-sizing border-box

    &:active
      border-width 2px
      padding 10px 16px 11px 15px
      box-shadow 2px 2px 2px 1px rgba(0, 0, 0, 0.3)

    &:hover
      background-color darken(default-button-color, 20%)

    &--primary
      background-color primary-button-color
      color white
      border-color darken(primary-button-color, 30%)

      &:hover
        background-color darken(primary-button-color, 10%)
</style>
