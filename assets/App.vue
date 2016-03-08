<script>
  import 'fonts/roboto/stylesheet.css'
  import 'icons/topic.css'

  import Logo from 'components/Logo.vue'
  import PageTitle from 'components/PageTitle.vue'
  import MyButton from 'components/Button.vue'
  import Post from 'components/Post.vue'
  import SubscribeButton from 'components/SubscribeButton.vue'

  import {store} from 'store'
  import * as actions from 'store/actions.js'

  export default {
    data() {
      return {
        posts: this.$select('posts'),
        topics: this.$select('topics'),
        settings: {
          title: 'Newest topics',
          logo: {
            bgcolor: '#000000',
            text: 'Ru-Zer0Talk'
          },
          subscribeButton: {
            text: 'Subscribe'
          },
          ui: {
            addTopic: '+ Add topic'
          }
        }
      }
    },
    methods: {
      onAddTopicClicked() {
        this.showAddTopicForm()
      },

      showAddTopicForm() {
        // console.log('Add topic showed')
        store.dispatch(actions.addTopic('Title', 'Body'))
      }
    },
    components: {
      Logo, PageTitle, MyButton, Post, SubscribeButton
    }
  }
</script>

<template>
  <a href="https://github.com/GomZik/ZeroTalk-Plus"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"></a>
  <logo :bgcolor="settings.logo.bgcolor">
    {{ settings.logo.text }}
  </logo>
  <div class="content-wrapper">
    <page-title>
      {{ settings.title }}
    </page-title>
    <subscribe-button>
      {{ settings.subscribeButton.text }}
    </subscribe-button>

    <a href="javascript:;" @click="onAddTopicClicked" class="add-topic">
      {{ settings.ui.addTopic }}
    </a>

    <div class="posts">
      <post v-for="topic in topics" :visited="false">
        <span slot="title">{{ topic.title }}</span>
        <span slot="body">{{ topic.body }}</span>
      </post>
    </div>
  </div>
</template>

<style lang="stylus">
  html, body
    margin 0
    padding 0

  body
    margin 10px
    font-family 'Roboto', sans-serif
    background-color #F5F5F5

  a
    text-decoration none
    color #DB3207

    &:hover
      text-decoration underline

</style>

<style lang="stylus" scoped>
  .content-wrapper
    max-width 900px
    width 100%
    margin 0 auto

  .add-topic
    color #aaa
    text-decoration none
    display inline-block
    padding 10px

    &:hover
      color #D83207

  .posts
    margin-top 40px
</style>
