<template>
    <section class="section" :id="section.id">
        <div class="container">
            <div class="title has-text-centered">{{ section.title }}</div>
            <div class="columns">
                <div class="column content" v-html="section.content"></div>
                <div class="column">
                    <div class="card">
                        <div class="image">
                            <img :src="section.image">
                        </div>
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