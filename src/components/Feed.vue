<template>
  <div>
     <v-card>
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="title"
                  :rules="titleRules"
                  :counter="10"
                label="Title"
                required
                ></v-text-field>
                  <v-text-field
                      v-model="content"
                      :rules="contentRules"
                      label="Content Text"
                      textarea
                      required
              ></v-text-field>
                <!-- <picture-input
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
    </picture-input> -->
                  <v-btn flat color="primary"  :disabled="!valid" @click="createPost">Submit</v-btn>
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
import db from '../firebase'
import Post from '@/components/Post'
// import PictureInput from 'vue-picture-input'
export default {
  name: 'Feed',
  components: { Post },
  data () {
    return {
      posts: [],
      image: '',
      valid: true,
      title: '',
      titleRules: [
        v => !!v || 'Title is required'
      ],
      content: '',
      contentRules: [
        v => !!v || 'Content is required'
      ]
    }
  },
  firestore () {
    return {
      posts: db.collection('posts').orderBy('timestamp', 'desc')
    }
  },
  methods: {
    createPost () {
      if (this.$refs.form.validate()) {
        db.collection('posts').add({
          title: this.title,
          content: this.content,
          timestamp: new Date()
        })
      }
    }
    // onChange (image) {
    //   console.log('New picture selected!')
    //   if (image) {
    //     console.log('Picture loaded.')
    //     this.image = image
    //   } else {
    //     console.log('FileReader API not supported: use the <form>!')
    //   }
    // }
  }
}
</script>

<style>

</style>
