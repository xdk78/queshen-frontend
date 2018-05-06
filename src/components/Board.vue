<template>
  <div>
    board {{$route.params.name}}
    <feed></feed>
  </div>
</template>

<script>
import Feed from '@/components/Feed'
export default {
  name: 'Board',
  components: {Feed}
}
</script>

<style>

</style>
