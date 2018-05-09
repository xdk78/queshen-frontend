<template>
  <div>
    <p class="display-1 text-md-center">
    Board {{$route.params.name}}
    </p>
    <feed></feed>
  </div>
</template>

<script>
// import db from '../firebase'
import Feed from '@/components/Feed'
export default {
  name: 'Board',
  components: {Feed}
  // data () {
  //   return {
  //   }
  // },
  // firestore () {
  //   return {
  //     boards: db.collection('boards').where('name', '==', this.$route.params.name)
  //   }
  // }
}
</script>

<style>

</style>
