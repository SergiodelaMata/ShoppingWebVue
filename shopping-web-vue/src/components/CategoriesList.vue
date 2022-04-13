<script setup>
import Category from '../components/Category.vue'
var data = defineProps({
  products: {
    type: Array,
    required: true
  },
  categories: {
    type: Array,
    required: true
  },
  productsInBag: {
    type: Array,
    required: true
  }
});
</script>
<script>
export default{
    data() {
        return {
        }
    }
}
</script>

<template>
    <div id="containerProducts" class="container card col-lg-8 col-md-12 col-sm-12">
        <div class="container card d-flex bg-info" style="marginTop:1em">
            <h3>Productos disponibles clasificados por categoría:</h3>
        </div>
        <div id="categories" class="accordion" style="marginTop: 1em, marginBottom: 1em">
            <Category v-for="category in data.categories" v-bind:category="category" v-bind:products="data.products" v-bind:productsInBag="data.productsInBag"></Category>
        </div>
    </div>
</template>