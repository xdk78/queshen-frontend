<template>
   <div>
    <v-toolbar flat app fixed>
      <v-toolbar-items>
          <v-btn class="btn-normal " v-for="(item, index) in boards" :key="index" flat :to="item.to" > /{{item.name}}/</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click="changeTheme">
        <v-icon>invert_colors</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Toolbar',
  computed: {
    ...mapGetters({
      dark: 'isDark'
    })
  },
  data () {
    return {
      boards: [
        {
          name: 'a',
          to: 'a'
        },
        {
          name: 'b',
          to: 'b'
        },
        {
          name: 'smroot',
          to: 'smroot'
        }
      ]
    }
  },
  methods: {
    changeTheme () {
      if (this.dark) {
        this.$store.commit('setDark', false)
      } else {
        this.$store.commit('setDark', true)
      }
    }
  }
}
</script>

<style scoped>
.btn-normal {
  text-transform: none;
}
</style>
