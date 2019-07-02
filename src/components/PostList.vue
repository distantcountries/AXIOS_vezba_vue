<template>
  <div>
    <p class="dateFormat">{{ getFormatedDate(date) }}</p>
    <input @input="search" placeholder="Search posts ...." class="inputSearch"/>
    <ul class="postList">
      <li v-for="(post, index) in filteredPosts" :key="index">
        <span style="font-weight:bold; color:#006D54;">{{ post.title }}</span>
        <br>
          {{ post.body }} <br><br>
                
      </li>
    </ul>
  </div>
</template>

<script>
import { postService } from '../services/PostService'
import { mixinDate } from '../mixins/mixin'
  
export default {
    mixins: [ mixinDate ],

  data(){
    return {
      errors: [],
      posts: [], 
      searchTerm: '',
    }
  },

  computed: {
          
    filteredPosts() {
      return this.posts.filter(post => {
        return post.title.toLowerCase().includes(this.searchTerm.toLowerCase())});
    },

  },

  methods: {

    search($event) {
      console.log($event);
        if ($event.inputType === "deleteContentBackward") {
            this.searchTerm = this.searchTerm.substring(0, this.searchTerm.length - 1)
            console.log(this.searchTerm);
            return ;
        }
        this.searchTerm += $event.data;
        console.log(this.searchTerm);   
      }
    },

    created() {
      postService.getPosts()
        .then(response => {
        this.posts = response.data
        })
        .catch( e => {
          console.log(e);
        })
    },
}
</script>

<style>

  .postList {
    text-align: justify;
    text-transform: capitalize;
  }

  .inputSearch {
    border-radius: 0.5rem;
    padding: 0.4rem;
    background-color: lightcyan;
  }

  .dateFormat {
    font-style: italic;
    font-weight: bold;
  }


</style>


