<template>
  <div>
    <p class="display-1 text-md-center">
    Board {{$route.params.name}}
    </p>
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
