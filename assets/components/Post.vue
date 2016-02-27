<script>
  import ContentBlock from 'components/ContentBlock.vue'

  export default {
    props: {
      selected: {},
      sticked: {},
      visited: {
        default: false
      }
    },
    components: {
      ContentBlock
    }
  }
</script>

<template>
  <content-block>
    <div class="post__dot" :class="{
      'post__dot--visited': visited,
      'post__dot--new-messages': !visited
    }">•</div>
    <div class="post__preview">
      <div class="post__preview__item">
        <i class="icon-topic"></i>
      </div>
    </div>
    <a href="#" class="post__header">
      <h2 class="post__header__title">
        <slot name="title"></slot>
      </h2>
    </a>
    <div class="post__body">
      <slot name="body"></slot>
    </div>
  </content-block>
</template>

<style lang="stylus" scoped>
  .post
    position relative

    &__dot
      position absolute
      font-size 40px
      vertical-align middle
      margin-top 5px

      &--visited
        color: #E2E2E2

      &--new-messages
        color #74BBFE

    &__preview
      position absolute
      opacity 0.3
      margin-left 30px
      margin-top 10px

    &__header
      display inline-block
      margin-bottom 10px

      &__title
        padding 0
        margin 0

    &__header,
    &__body
      margin-left 98px
</style>
