<template>
    <div>
        <router-view />
        <ul>
            <li v-for="(user, index) in users" :key="index">

                <router-link :to="routeToUser(user)">
                    {{ user.name }}
                </router-link>
                
            </li>
        </ul>
    </div>
</template>

<script>
 import { userService } from '../services/UserService'
export default {
    props: ['users'],

created() {
   userService.getUsers()
    .then(response => {
    this.users = response.data
    })
    .catch( e => {
      console.log(e);
    })
  },

  methods: {
      routeToUser(user) {
          return `/users/${user.id}`
      }
  }

}
</script>

<style>

</style>
