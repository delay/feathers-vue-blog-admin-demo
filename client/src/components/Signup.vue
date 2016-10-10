<template>

  <div class="signup">
    <navigation></navigation>
    <h2>Signup</h2>
    <h4>{{successMessage}}</h4>
    <label>First Name</label><input v-model="firstName" placeholder="First Name" type="text">
    <label>Last Name</label><input v-model="lastName" placeholder="Last Name" type="text">
    <label>Email</label><input v-model="email" placeholder="email address" type="text">
    <label>Password</label><input v-model="password" placeholder="password" type="password">
    <button v-on:click="signup">Signup</button>

  </div>
</template>

<script>
  import * as services from '../services'
  import Navigation from './Navigation.vue'
  export default {
    data () {
      return {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        successMessage: ''
      }
    },
    methods: {
      signup () {
        // add a user to the db (look into how to encrypt password between client and server)
        services.userService.create({ firstName: this.firstName, lastName: this.lastName, email: this.email, password: this.password }).then(this.firstName = '').then(this.lastName = '').then(this.email = '').then(this.password = '').then(this.successMessage = 'Thanks for signing up.');
      }
    },
  components:{
      Navigation
  }
  }
</script>
