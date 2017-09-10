<template>
    <section class="hero is-primary is-fullheight bg-image" :id="section.id" :style="{'background-image': 'url('+section.image+')'}">
        <div class="hero-body">
            <div class="container">
                <div class="columns">
                    <div class="column is-narrow">
                        <div class="card">
                            <div class="card-header">
                                <p class="card-header-title">{{ section.title }}</p>
                            </div>
                            <div class="card-content">
                                <p v-html="section.address"></p>
                                <br>
                                <p>Tel: <a :href="linkPhone" class="has-text-primary">{{ section.phone }}</a></p>
                                <p>Email: <a :href="linkMail" class="has-text-primary">{{ section.email }}</a></p>
                                <br>
                                <p>CVR: {{ section.cvr }}</p>
                            </div>
                            <footer class="card-footer">
                                <iframe :src="section.map" width="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
                            </footer>
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

        computed: {
            linkPhone: function() {
                return 'tel:+45'+this.section.phone.replace(/\s/g, '');
            },
            linkMail: function() {
                return 'mailto:'+this.section.email;
            },
        }
    }
</script>