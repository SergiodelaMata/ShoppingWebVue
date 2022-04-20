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
      marginBottom: {
        marginBottom: '2em'
      },
      lateralMargin: {
        marginLeft: '2em',
        marginRight: '2em'
      },
    }
  }
}

</script>

<template>
    <div class="container d-flex flex-column justify-content-center col-sm-12" v-bind:style="marginBottom">
        <div class="row" v-bind:style="lateralMargin">
            <CategoriesList v-bind:categories="data.categories" v-bind:products="data.products" v-bind:productsInBag="data.productsInBag"></CategoriesList>
            <Bag v-bind:products="data.products" v-bind:productsInBag="data.productsInBag"></Bag>
        </div>
    </div>

</template>