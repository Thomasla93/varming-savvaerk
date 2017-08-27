window._ = require('lodash');
window.axios = require('axios');
window.Vue = require('vue');

Vue.config.productionTip = false;
Vue.component('header-menu', require('./components/Menu'));
Vue.component('section-hero', require('./components/Hero'));
Vue.component('section-products', require('./components/Products'));
Vue.component('section-projects', require('./components/Projects'));
Vue.component('section-history', require('./components/History'));
Vue.component('section-contact', require('./components/Contact'));
Vue.component('section-about', require('./components/About'));

new Vue({
    el: '#app',
});