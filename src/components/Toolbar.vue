<template>
   <div>
    <v-toolbar app fixed>
      <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/" > Home</v-btn>
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

<style>

</style>
