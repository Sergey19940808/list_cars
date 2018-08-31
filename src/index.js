import Vue from 'vue';
import App from './components/App/App.vue';
import store from './store/index.js';

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});