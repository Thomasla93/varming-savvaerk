<template>
    <section class="section" id="products">
        <div class="container">
            <h1 class="title has-text-centered">Produkter</h1>
            <nav class="breadcrumb is-centered">
                <ul>
                    <li><a href="#" v-on:click.prevent="setFilter(null)">All</a></li>
                    <li v-for="category in categories"><a href="#" v-on:click.prevent="setFilter(category)">{{ category }}</a></li>
                </ul>
            </nav>
            <div class="columns is-multiline">
                <div class="column is-4" v-for="product in filteredProducts">
                    <div class="card">
                        <div class="image">
                            <img v-bind:src="product.image" v-bind:alt="product.title">
                            <div class="box hover is-radiusless">
                                <div class="subtitle has-text-white">{{ product.title }}</div>
                                <div class="content has-text-white">{{ product.description }}</div>
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
                filter: null,
                categories: [],
                products: [],
            };
        },

        computed: {
            filteredProducts() {
                let self = this;
                return _.filter(this.products, function(item){
                    if (self.filter == null) {
                        return true;
                    }
                    return item.categories.indexOf(self.filter) > -1;
                });
            },
        },

        created() {
            axios.get('products.json').then(response => {
                this.categories =  response.data.categories;
                this.products = response.data.items;
            });
        },

        methods: {
            setFilter(value) {
                this.filter = value;
            },
        },
    }
</script>