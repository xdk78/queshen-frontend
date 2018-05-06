<template>
  <div>
    <post v-for="post in posts" :key="post.id" :post="post"></post>
  </div>
</template>

<script>
import Post from '@/components/Post'
export default {
  name: 'Feed',
  components: { Post },
  data () {
    return {
      posts: [
        {
          id: 0,
          content: 'super content 1'
        },
        {
          id: 1,
          content: 'xd super content 2'
        }
      ]
    }
  }
}
</script>

<style>
</style>
