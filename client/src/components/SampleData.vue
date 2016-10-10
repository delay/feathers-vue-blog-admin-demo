<template>
    <div>

      <button class="button" v-on:click="generateData">Generate Sample Post</button>
      <p>
      {{this.count}}. {{this.title}}
      </p>
      <p>
      {{this.description}}
      </p>
    </div>
</template>
<script>
  import * as services from '../services'
    export default{
        data(){
            return{
                title:'',
                description:'',
              count: 0
            }
        },
      methods: {
        generateData () {
          // add a post to the db
          this.count = +this.count + +1;
          var loremIpsum = require('lorem-ipsum');
          this.title = loremIpsum();
          this.description = loremIpsum();
          services.app.authenticate().then(result => {
            services.postService.create({
              title: this.count + '. '+this.title,
              description: this.description
            })
          }).catch(function (error) {
            console.error('Error authenticating!', error);
          });
          console.log(this.title + ' ' + this.description);
        },

      }
    }
</script>
