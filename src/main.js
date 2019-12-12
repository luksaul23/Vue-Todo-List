import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import firebase from 'firebase/app'
import "firebase/auth";

Vue.use(BootstrapVue)
Vue.use(VueRouter)

 const firebaseConfig = {
  apiKey: "AIzaSyAmPovCTZ5cwmuArvbqrFebKQl4iYgu9NM",
  authDomain: "vue-todo-list-229e3.firebaseapp.com",
  databaseURL: "https://vue-todo-list-229e3.firebaseio.com",
  projectId: "vue-todo-list-229e3",
  storageBucket: "vue-todo-list-229e3.appspot.com",
  messagingSenderId: "914206632515",
  appId: "1:914206632515:web:07fd018ccc47eac2bf82f6",
  measurementId: "G-979MGHJ6CE"
};

firebase.initializeApp(firebaseConfig)

let app;

firebase.auth().onAuthStateChanged(user =>{
  if(!app){
    app = new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
  }
})

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) =>{
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requiresAuth && !isAuthenticated){
    next("")
  } else{
    next()
  }
})

