<template>
  <div>
    <navigation></navigation>
    <h2>Login</h2>
    <p v-if="$route.query.redirect">
      You need to login first.
    </p>

      <p v-if="error" class="error">Incorrect email or password</p>
      <label>Email</label><input v-model="email" placeholder="email address" type="text">
      <label>Password</label><input v-model="password" placeholder="password" type="password">
      <button v-on:click="login">Login</button>

  </div>
</template>

<script>
  import * as services from '../services'
  import Navigation from './Navigation.vue'
  //import auth from '../auth'
  export default {
    data () {
      return {
        email: '',
        password: '',
        error: false
      }
    },
    components:{
      Navigation
    },
    methods: {
      login () {
        services.app.authenticate({
          type: 'local',
          'email': this.email,
          'password': this.password
        }).then(this.loginSuccess).catch(this.loginError);
      },
      loginSuccess() {
        this.$router.replace(this.$route.query.redirect || '/');
      },
      loginError() {
        this.error = true;
      }

    }
  }
</script>

<style>
  .error {
    color: red;
  }
</style>
