<template>
    <section class="section is-primary" id="projects">
        <div class="container">
            <h1 class="title has-text-centered">Projekter</h1>
            <div class="columns is-centered">
                <div class="column is-10">
                    <div class="card" v-for="project in projects">
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
        data() {
            return {
                projects: [],
            };
        },

        created() {
            axios.get('projects.json').then(response => {
                this.projects = response.data;
            });
        }
    }
</script>