import Vue from 'vue';
import app from './component/app.vue';
import ajax from './tools/ajax.js';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper);
Vue.prototype.$ajax = ajax;
new Vue({
    el: '#app',
    template: '<div><App /></div>',
    components: {
        App: app
    }
})