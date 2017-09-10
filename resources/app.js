window._ = require('lodash');
window.axios = require('axios');
window.Vue = require('vue');

Vue.config.productionTip = false;

const app = new Vue({
    el: '#app',

    data: {
        content: null,
    },

    created() {
        axios.get('data.json').then(response => {
            this.content = response.data;
        });
    },

    components: {
        'header-menu':      require('./components/Menu'),
        'section-hero':     require('./components/Hero'),
        'section-products': require('./components/Products'),
        'section-projects': require('./components/Projects'),
        'section-history':  require('./components/History'),
        'section-contact':  require('./components/Contact'),
        'section-about':    require('./components/About'),
    }
});