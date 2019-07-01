import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

import PostList from '@/components/PostList'
import UsersList from '@/components/UsersList'
import SingleUser from '@/components/SingleUser'



const routes = [

  {
    path: '/',
    component:PostList
  },
  {
    path: '/users',
    component:UsersList,
  },
  { 
    path : '/users/:id', 
  component: SingleUser 
}]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
