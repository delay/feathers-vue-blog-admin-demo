<template>
    <div>
      <h1>Blog Admin</h1>

      <div class="row">
        <router-link v-if="loggedIn" to="/logout">
          <div class="column">Log out</div>
        </router-link>
        <router-link v-if="!loggedIn" to="/login">
          <div class="column">Login</div>
        </router-link>
        <router-link v-if="!loggedIn" to="/signup">
          <div class="column">Signup</div>
        </router-link>

        <router-link v-if="loggedIn" to="/posts">
          <div class="column">Posts</div>
        </router-link>

        <router-link v-if="loggedIn" to="/post">
          <div class="column">Add Post</div>
        </router-link>
        <router-link v-if="loggedIn" to="/sampledata">
          <div class="column">Create Random Post</div>
        </router-link>
      </div>
    </div>
</template>
<style>

</style>
<script>

    export default{
      data () {
        return {
          loggedIn: !!localStorage.getItem("feathers-jwt")
          // loggedIn: !!services.app.get('token') //currently a bug with this.
        }
      }
    }
</script>
