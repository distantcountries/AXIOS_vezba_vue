<template>
  <div>
    <router-view/>      
    <ul class="userList">
      <li v-for="(user, index) in users" :key="index">
        <router-link :to="routeToUser(user)" >
            {{ user.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { userService } from '../services/UserService'
  
export default {

    // props: ['users'],

    data(){
        return {
            errors: [],
            users: [], 
        }
    },

    methods: {
        routeToUser(user) {
            return `/users/${user.id}`
        }
    },

    created() {
      userService.getUsers()
        .then(response => {
        this.users = response.data
        })
        .catch( e => {
          console.log(e);
        })
    },
}
</script>

<style>

  .userList {
    text-align: justify;;
    text-transform: capitalize;
  }

</style>










