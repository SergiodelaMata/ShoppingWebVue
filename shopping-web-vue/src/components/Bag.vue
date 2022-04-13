<script setup>
import TotalCost from '../components/TotalCost.vue'
import ProductInBag from '../components/ProductInBag.vue'
var data = defineProps({
  products: {
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
    <div id="containerBagProducts" class="container card col-lg-4 col-md-12 col-sm-12">
        <div class="container card d-flex bg-success" style="margin-top: 1em">
            <h3>Su cesta de la compra:</h3>
        </div>
        <div id="bag-products" style="margin-top: 1em">
            <TotalCost v-bind:productsInBag="data.productsInBag"></TotalCost>
            <ProductInBag v-for="ProductInBag in data.productsInBag" v-bind:productInBag="ProductInBag" v-bind:products="data.products"></ProductInBag>
        </div>
    </div>
</template>