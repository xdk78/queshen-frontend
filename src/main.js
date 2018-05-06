// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebaseee from './plugins/firebase'
import config from './config'
import firebase from 'firebase'
import 'firebase/firestore'
firebase.initializeApp(config)
export const db = firebase.firestore()

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  firebaseee,
  vuetify,
  components: { App },
  template: '<App/>'
})
