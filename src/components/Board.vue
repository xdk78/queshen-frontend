<template>
  <div>
    <p class="display-1 text-md-center">
    Board {{$route.params.name}}
    </p>
    <div v-if="boards">
      <feed :posts="boards[0].posts" :docKey="boards[0]['.key']"></feed>
    </div>
  </div>
</template>

<script>
import db from '../firebase'
import Feed from '@/components/Feed'
export default {
  name: 'Board',
  components: {Feed},
  data () {
    return {
      boards: []
    }
  },
  firestore () {
    return {
      boards: db.collection('boards').where('name', '==', this.$route.params.name)
    }
  }
}
</script>

<style>

</style>
