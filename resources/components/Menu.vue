<template>
    <nav class="navbar is-unselectable">
        <div class="navbar-brand">
            <a class="navbar-item is-paddingless" href="/">
                <img src="images/logo.png" style="max-height:none;height:52px">
            </a>

            <div class="navbar-burger" v-on:click="mobileShow = !mobileShow" v-bind:class="{'is-active':mobileShow}">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="navbar-menu" v-bind:class="{'is-active':mobileShow}">
            <div class="navbar-end">
                <router-link v-for="(item, key) in menu" :key="key" :to="item.link" class="navbar-item" exact>{{ item.title }}</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                mobileShow: false,
                menu: [
                    {
                        title: 'Velkommen',
                        link: '/',
                    },
                    {
                        title: 'Produkter',
                        link: '#products',
                    },
                    {
                        title: 'Projekter',
                        link: '#projects',
                    },
                    {
                        title: 'Historie',
                        link: '#history',
                    },
                    {
                        title: 'Om os',
                        link: '#about',
                    },
                    {
                        title: 'Kontakt',
                        link: '#contact',
                    },
                ],
            };
        },
    }
</script>