<script setup>
import Product from '../components/Product.vue'
var data = defineProps({
  products: {
    type: Array,
    required: true
  },
  category: {
    type: Object,
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
    <div class='accordion-item'>
        <h5 class='accordion-header' v-bind:id="'category' + (data.category.idCategory + 1)">
          <button type='button' data-bs-toggle='collapse' v-bind:data-bs-target="('#products' + (data.category.idCategory + 1))" class='col-sm-12 accordion-button justify-content-start text-dark' aria-expanded='true' v-bind:aria-controls="('products' + data.category.idCategory + 1)" style="text-align: left, margin-bottom: 0.5em"> 
            {{data.category.nameCategory}}
          </button> 
        </h5>
        <div v-bind:id="('products' + (data.category.idCategory + 1))" class='container accordion-collapse collapse show' v-bind:aria-labelledby="('category' + (data.category.idCategory + 1))">
            <div v-bind:id="('listProducts' + (data.category.idCategory + 1))" class='row' style="margin-top: 0.5em; margin-bottom: 0.5em">
                <Product v-for="product in data.products" v-bind:category="data.category" v-bind:product="product" v-bind:products="data.products" v-bind:productsInBag="data.productsInBag"></Product>
          </div>
        </div>
    </div>
</template>