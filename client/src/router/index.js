import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import * as services from '../services'
import Posts from '../components/Posts.vue'
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'
import Post from '../components/Post.vue'
import RemovePost from '../components/RemovePost.vue'
import SampleData from '../components/SampleData.vue'

function requireAuth (to, from, next) {
  //console.log('via feathers method: '+services.app.get('token'));
  //console.log('via localstorage method: '+localStorage.getItem("feathers-jwt"));
  if (localStorage.getItem("feathers-jwt") === null) {  //app.get('token') has a bug in the current build.  https://github.com/feathersjs/feathers-authentication/issues/303
 // if (services.app.get('token') === null) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}


export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: Posts, beforeEnter: requireAuth },
    { path: '/posts', component: Posts, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/post', component: Post, beforeEnter: requireAuth },
    { path: '/signup', component: Signup },
    { path: '/post/:id', component: Post},
    { path: '/removepost/:id', component: RemovePost},
    { path: '/logout',
     beforeEnter (to, from, next) {
      services.app.logout();
      next('/login')
     }
     },
    { path: '/sampledata', component: SampleData },
    { path: '*', component: NotFound }
  ]
})
