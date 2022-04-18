<script setup>
import CategoriesList from '../components/CategoriesList.vue'
import Bag from '../components/Bag.vue'
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
    <div class="container d-flex flex-column justify-content-center col-sm-12" style="margin-bottom: 2em">
        <div class="row" style="margin-left: 2em; margin-right: 2em">
            <CategoriesList v-bind:categories="data.categories" v-bind:products="data.products" v-bind:productsInBag="data.productsInBag"></CategoriesList>
            <Bag v-bind:products="data.products" v-bind:productsInBag="data.productsInBag"></Bag>
        </div>
    </div>

</template>