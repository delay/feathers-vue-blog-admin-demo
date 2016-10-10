import Vue from 'vue'
import App from './components/App.vue'
import router from './router'
import * as filters from './filters'

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});

const app = new Vue({
  router,
  ...App // Object spread copying everything from App.vue
}).$mount('#app');
