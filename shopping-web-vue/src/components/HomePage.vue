<script setup>
import Navbar from '../components/Navbar.vue'
import Title from '../components/Title.vue'
import PopUp from '../components/PopUp.vue'
import HomeBody from '../components/HomeBody.vue'
import data from '../js/data.js'
</script>
<script>
var props = data.data().props;
var user = props.user;
var products = props.products;
var categories = props.categories;
var users = props.users;
var productsInBag = props.productsInBag;
if(productsInBag === undefined || productsInBag === null || productsInBag === ""){
    productsInBag = [];
} 
export default{
    data() {
        return {
            props: {
                user: user,
                products: products,
                categories: categories,
                users: users,
                productsInBag: productsInBag
            }
        }
    },
    methods: {
        reloadHomePage: function() {
            this.props.productsInBag = JSON.parse(localStorage.productsInBag);
            this.$forceUpdate();
        },
        setOverlay: function() {
            var overlay = this.$refs.overlay;
            if(localStorage.overlay === "true")
            {
                overlay.style.display = "flex";
            }
            else
            {
                overlay.style.display = "none";
            }
        }
    },
    mounted() {
        this.emitter.on('reloadHomePage', () => {
            this.reloadHomePage();
        });
        this.emitter.on('setOverlay', () => {
            this.setOverlay();
        });
    }
}
</script>

<template>
    <Navbar v-bind:user="user" v-bind:users="users"/>
    <Title title="Encuentre aquí los productos que busca"/>
    <div ref="overlay" class="overlay" id="overlay" style="display:none">
        <PopUp></Popup>
    </div>
    <HomeBody v-bind:products="products" v-bind:categories="categories" v-bind:productsInBag="productsInBag"/>
</template>