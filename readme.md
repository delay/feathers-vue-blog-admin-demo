# Feathers and Vue 2.0 Blog Admin Demo

This demo app shows how to use Feathers.js with Vue 2.0.  It includes
using authentication, vue-router and roles.  It also uses 
vue-infinite-loading to load the posts as the user scrolls.
It uses Feathers on the server side.

![Login Screenshot](/client/assets/login.png?raw=true "Login Screenshot")

![Posts Screenshot](/client/assets/posts.png?raw=true "Posts Screenshot")


``` 
In the client directory

    bash
# install dependencies
npm install

# serve in dev mode, with hot reload at localhost:8080
npm run dev

Web browser: http://localhost:8080/

Create a user and you can generate some sample posts. Make sure you 
also install and run feathers server side component as well so data can 
be added and saved.

```

``` 
In the server directory. This installs and runs the feathers server side services.

    bash
# install dependencies
npm install

# serve in dev mode, with hot reload at localhost:8080
npm start

Web browser: http://localhost:3030/

```

I made this to learn some of the basics on using these two awesome
frameworks together.  I looked at several helpful tutorials and 
documentation including the official docs on ![Feathers](https://docs.feathersjs.com/) and ![Vue](http://vuejs.org/guide/). 
These three examples were also very helpful. 

* ![Vue Hackernews Clone 2.0](https://github.com/vuejs/vue-hackernews-2.0)
* ![Realtime Vue.js and Feathers.js Example](https://www.youtube.com/watch?v=zbhYcxr5ldk)
* ![Vue Router Examples](https://github.com/vuejs/vue-router/tree/dev/examples)

I am still learning so if you have any suggestions about how to make the code better, please
let me know.

Thanks so much to everyone who contributed to these two great frameworks!