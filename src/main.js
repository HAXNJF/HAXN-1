import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store/store';
import "./global.css";

Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
