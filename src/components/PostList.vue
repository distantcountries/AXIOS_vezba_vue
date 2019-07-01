<template>
    <div>
        {{ date }}
        <br>
        <input type="text" v-model="term" placeholder="Search..."/>
        <ul>
            <li v-for="(post, index) in filteredPosts" :key="index">

                <span style="font-weight:bold">{{ post.title }}</span>
                <br>
                {{ post.body }} <br><br>
                
            </li>
        </ul>
    </div>
</template>

<script>
  import { userService } from '../services/UserService'
  import { mixinDate } from '../mixins/mixin'
  
  
export default {
    mixins: [ mixinDate ],

  data(){
    return {
        errors: [],
        posts: [], 
        term:'',


        post:{
            title:'', 
            body:''
        }
    }
  },

    computed: {
          
        filteredPosts() {
            return this.posts.filter(post => {
                return post.title.toLowerCase().includes(this.term.toLowerCase())
            })
        },
    },


  created() {
   userService.getUserPosts()
    .then(response => {
    //   console.log(response);
    this.posts = response.data
    })
    .catch( e => {
      console.log(e);
    })
  }
}
</script>


