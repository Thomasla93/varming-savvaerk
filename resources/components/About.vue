<template>
    <section class="section" :id="section.id">
        <div class="container">
            <h1 class="title has-text-centered">{{ section.title }}</h1>
            <div class="columns is-centered">
                <div class="column is-7">
                    <div class="columns">
                        <div class="column">
                            <div class="image is-square">
                                <img src="images/thomas.jpg">
                            </div>
                        </div>
                        <div class="column content" v-html="section.content"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: ['section'],
    }
</script>