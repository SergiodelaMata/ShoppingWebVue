<script setup>
import Navbar from '../components/Navbar.vue'
import Title from '../components/Title.vue'
import data from '../js/data.js'
</script>
<script>
var props = data.data().props;
var user = props.user;
var products = props.products;
var categories = props.categories;
var users = props.users;
var productsInBag = props.productsInBag;
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
    }
}
</script>

<template>
  <Navbar v-bind:user="user" v-bind:users="users"/>
  <Title title="Introduzca un nuevo producto"/>
</template>