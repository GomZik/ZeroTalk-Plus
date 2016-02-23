<script>
  import ContentBlock from 'components/ContentBlock.vue'

  export default {
    props: ['selected', 'sticked'],
    components: {
      ContentBlock
    }
  }
</script>

<template>
  <content-block>
    <div class="post__preview">
      <div class="post__preview__item">
        <i class="icon-topic"></i>
      </div>
    </div>
    <a href="#" class="post__header">
      <h2 class="post__header__title">
        <slot  name="title"></slot>
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

    &__preview
      float left
      position absolute

    &__header
      display inline-block
      margin-bottom 10px

      &__title
        padding 0
        margin 0

    &__header,
    &__body
      margin-left 60px
</style>
