<template>
  <div id="app">
    <div class="container">


      <template v-if="$route.matched.length">
        <router-view></router-view>
      </template>
      <template v-else>
        <p>You are logged {{ loggedIn ? 'in' : 'out' }}</p>
      </template>
    </div>
  </div>
</template>

<script>
  import * as services from '../services'
  export default {
    data () {
      return {
        loggedIn: !!localStorage.getItem("feathers-jwt")
        // loggedIn: !!services.app.get('token') //currently a bug with this.
      }
    }
  }
</script>
<style src="../assets/milligram.min.css"></style>
<style>
  .container {
    max-width: 600px;
  }


</style>

