<template>
  <v-card class="my-1">
    <v-card-text>
        <div class="grey--text" >
            Anonymous
        </div>
        <v-spacer />
      <div></div>
      <v-layout>
        <p class="mt-3">
        {{post.content}}
        </p>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Post',
  props: ['post'],
  data () {
    return {
    }
  }
}
</script>
