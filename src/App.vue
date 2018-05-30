<template>

 <v-app :dark='dark'>
    <toolbar></toolbar>
    <v-content>
      <v-container fluid>
        <v-flex xs12 sm6 offset-sm3>
          <v-slide-y-transition mode='out-in'>
            <router-view :key="$route.fullPath"></router-view>
          </v-slide-y-transition>
        </v-flex>
      </v-container>
      </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Toolbar from '@/components/Toolbar'
export default {
  name: 'App',
  computed: {
    ...mapGetters({
      dark: 'isDark'
    })
  },
  components: { Toolbar }
}
</script>

<style>

</style>
