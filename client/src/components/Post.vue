<template>
  <div class="addpost">
    <navigation></navigation>
    <h2>{{heading}}</h2>
    <input class="form-control" placeholder="title" v-model="title" type="text">
    <textarea v-model="description" placeholder="description"></textarea>
    <button class="button" v-if="id" v-on:click="editPost">Update Post</button>
    <button class="button" v-else v-on:click="addPost">Add Post</button>
    <a class="remove-link" v-on:click="removePost">Remove Post</a>
  </div>
</template>

<script>
  import * as services from '../services'
  import Navigation from './Navigation.vue'
  export default {
    data () {
      return {
        title: '',
        description: '',
        id: this.$route.params.id,
        heading: 'Add Post'
      }
    },
    components:{
      Navigation
    },
    created () {
      this.getPost();

    },
    methods: {
      addPost () {
        // add a post to the db
        services.app.authenticate().then(result => {
          services.postService.create({
            title: this.title,
            description: this.description
          }).then(this.title = '').then(this.description = '')
        }).catch(function (error) {
          console.error('Error authenticating!', error);
        });
        this.$router.push({ path: '/posts' })
      },

      editPost () {
        // add a post to the db
        if (typeof this.id !== 'undefined') {
          services.app.authenticate().then(result => {
            services.postService.update(this.id,{
              title: this.title,
              description: this.description
            }).then(this.title = '').then(this.description = '')
          }).catch(function (error) {
            console.error('Error authenticating!', error);
          });
          this.$router.push({ path: '/posts' })
        }
      },

      getPost () {
        if (typeof this.id !== 'undefined') {
          this.heading = 'Edit Post';
          services.app.authenticate().then(
            services.postService.find({
              query: {
                _id: this.id
              }
            }).then(result => {
              this.title = result.data[0].title;
              this.description = result.data[0].description;
            })
          ).catch(function (error) {
            console.error('Error authenticating!', error);
          })
        }
      },
      removePost () {
        if (typeof this.id !== 'undefined') {
          this.heading = 'Edit Post';
          services.app.authenticate().then(services.postService.remove(this.id)).catch(function (error) {
            console.error('Error authenticating!', error);
          })
          this.$router.push({ path: '/posts' })
        }
      },
    }
  }
</script>
<style>
  .remove-link {
    float: right;
    cursor: pointer;

  }
</style>
