<template>
    <nav class="navbar is-unselectable">
        <div class="navbar-brand">
            <a href="" class="navbar-item" style="font-weight:bold;">Varming Savværk</a>

            <div class="navbar-burger" v-on:click="mobileShow = !mobileShow" v-bind:class="{'is-active':mobileShow}">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="navbar-menu" v-bind:class="{'is-active':mobileShow}">
            <div class="navbar-end">
                <template v-for="(item, key) in items">
                    <div v-if="typeof item.sub !== 'undefined'" class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link is-active">{{ item.title }}</a>
                        <div class="navbar-dropdown">
                            <a v-for="(subItem, subKey) in item.sub" :key="subKey" class="navbar-item" :href="subItem.link">{{ subItem.title }}</a>
                        </div>
                    </div>
                    <a v-else :href="item.link" class="navbar-item">{{ item.title }}</a>
                </template>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        props: ['items'],

        data() {
            return {
                mobileShow: false,
            };
        },
    }
</script>