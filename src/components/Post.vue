<template>
  <v-card class="my-1">
    <v-card-text>
        <div>
          <div class="grey--text" >Anonymous</div> <span>{{post.title.toUpperCase()}}</span>
        </div>
        <v-spacer />
        <p class="mt-3">
            {{post.content}}
          </p>
        <div v-text="parseDate(post.timestamp.seconds)"></div>
    </v-card-text>
  </v-card>
</template>

<script>
import {format} from 'date-fns'
export default {
  name: 'Post',
  props: ['post'],
  data () {
    return {
    }
  },
  methods: {
    parseDate (time) {
      return format(time)
    }
  }
}
</script>
