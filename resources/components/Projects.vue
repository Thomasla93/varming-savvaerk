<template>
    <section class="section is-primary" :id="section.id">
        <div class="container">
            <h1 class="title has-text-centered">{{ section.title }}</h1>
            <div class="columns is-centered">
                <div class="column is-10">
                    <div class="card" v-for="project in section.items">
                        <div class="columns is-marginless">
                            <div class="column is-paddingless">
                                <div class="image is-4by3">
                                    <img v-bind:src="project.image" v-bind:alt="project.title">
                                </div>
                            </div>
                            <div class="column is-5">
                                <div class="subtitle">{{ project.title }}</div>
                                <div class="content">
                                    {{ project.description }}
                                </div>
                            </div>
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