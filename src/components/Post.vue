<template>
  <v-card class="my-1">
    <v-card-text>
        <div class="grey--text" >
          Anonymous <span class="black--text" ><b>{{post.title.toUpperCase()}}</b></span>
        </div>
        <v-spacer />
        <p class="mt-3">
        {{post.content}}
        </p>
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
