<template>
  <div>
     <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="30"
                label="Title"
                required
                ></v-text-field>
                  <v-text-field
                name="input-1"
                label="Content Text"
                textarea
              ></v-text-field>
                <picture-input
                ref="pictureInput"
                @change="onChange"
                width="200"
                height="200"
                margin="16"
                accept="image/jpeg,image/png"
                size="10"
                buttonClass="btn"
                :customStrings="{
                upload: '<h1>Your image</h1>',
                drag: 'Drag image here'
      }">
    </picture-input>
                <v-btn depressed color="primary">Submit</v-btn>
                <v-btn depressed color="error" @click="clear">clear</v-btn>
                </v-form>
              </v-flex>
            </v-layout>
          </v-container>
        <v-card-actions>
        </v-card-actions>
      </v-card>
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

<script>
import PictureInput from 'vue-picture-input'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    PictureInput
  },
  methods: {
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  }
}
</script>

<style>
</style>
