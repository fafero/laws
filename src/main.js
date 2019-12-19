import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import axios from 'axios';
import VueAxios from "vue-axios";
import bootstrapVue from "bootstrap-vue";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueAxios, axios)
Vue.use(bootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
