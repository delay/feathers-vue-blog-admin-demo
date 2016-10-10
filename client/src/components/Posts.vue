<template>
  <div class="posts">
    <navigation></navigation>
    <h2>Posts</h2>
    <!-- post list -->
    <li v-for="post in posts">
      <router-link :to="'/post/' + post._id">{{post.title}}</router-link>  -  {{ post.createdAt | inTimeAgo }}
    </li>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" spinner="waveDots"></infinite-loading>
  </div>
</template>

<script>
  import * as services from '../services'
  import InfiniteLoading from 'vue-infinite-loading';
  import Navigation from './Navigation.vue'
  export default {

    name: 'Posts',

    components: {
      InfiniteLoading,
      Navigation
    },

    data () {
      return {
        posts: [],
        total: 0,
        limit: 0,
        skip: 0

      }
    },


    created () {

      // this.loadPosts();

    },

    destroyed () {

    },

    methods: {

      loadPosts () {
        if (this.skip <= this.total) { //run this query as long as we haven't shown more than the total results (need <= so query will run on initial load on the downside it might run once extra time but will return no more results so it won't affect things.)
          services.app.authenticate().then(result => {  //check to see if the user has logged in.
            services.postService.find({
              query: {
                $sort: {createdAt: -1},
                $skip: this.skip, //tells how many
                $select: { "title" :1, "createdAt" :1 }
              }
            }).then(result => {
              this.posts = this.posts.concat(result.data); //add newly retrieved posts to existing posts
              //needed for loading additional results
              this.total = result.total;
              this.limit = result.limit;
              this.skip = result.skip;
              console.log(JSON.stringify(result));
              this.setSkip();
            })
          }).catch(function (error) {
            console.error('Error authenticating!', error);
          });
        }

      },

      //increment the skip amount so it can load more records the next time it's called.
      setSkip() {
        this.skip = this.skip + this.limit;
      },

      //load more posts as user scrolls
      onInfinite() {
        if (this.skip <= this.total) {
            this.loadPosts();
            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
        } else {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
        }
      },

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
