<template>
  <div>
     'test'
     <!-- {{ user.name }} -->
  </div>
</template>

<script>
import { userService } from '../services/UserService'
export default {

  props:['user'],

    data() {
        return{
            errors: [],
            // user:userService.find(this.$route.params.id)
        }
    },

  mounted() {
   userService.findUser(this.$route.params.id)
    .then(response => {
    this.user = response.data
    })
    .catch( e => {
      console.log(e);
    })
  },


  // watch: {
  //   '$route'(){
  //     if(this.$route.params.id){
  //       this.user = userService.find(this.$route.params.id)
  //     }
  //   }

  // }

}

</script>