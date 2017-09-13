<template>
    <section class="hero is-primary is-fullheight bg-image" :style="{'background-image': 'url('+section.image+')'}">
        <div class="hero-body">
            <div class="container has-text-centered is-uppercase">
                <img :src="section.logo" class="hero-center-logo">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['section'],
    }
</script>