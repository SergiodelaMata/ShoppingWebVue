<script setup>
var data = defineProps({
  product: {
    type: Object,
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
    <div v-if="data.category.idCategory === data.product.idCategory" class='card col-sm-6' style="margin-bottom:'0.5em'"> 
        <div class='row'>
            <div class='col-lg-4 col-md-6 col-sm-12 align-self-center' style="text-align: center">
                <img class='zoom img-product' v-bind:id="'imageProduct' + data.product.codeproduct" v-bind:src="data.product.image" v-bind:alt="data.product.titleProduct" v-bind:title="data.product.titleProduct" style="opacity: 1; margin-top: 1em"/>
                <p v-bind:id="'unitsProduct' + data.product.codeProduct" style="font-size: 0.8em"> Unidades: {{data.product.numUnits}}</p>
                <h3 class='text-primary'>{{data.product.price}} €</h3>
                <button ref=buttonProduct v-bind:id="'buttonProduct' + data.product.codeProduct" class='btn btn-primary' type='button' @click="addProduct" style="width: 100%; margin-bottom: 1em; font-size: 0.8em" title='Añadir a la cesta'>Añadir a <br/> la cesta</button>
            </div>
            <div class='card-body col-lg-8 col-md-6 col-sm-12'>
                <p style="text-align:'center'">
                    <strong> {{data.product.titleProduct}} </strong>
                </p>
                <p class='text-muted' style="text-align:'left', fontSize:'0.8em'">{{data.product.codeproduct}}</p>
                <p style="text-align:'left', fontSize:'0.8em'">{{data.product.description}}</p>
            </div>
        </div>
    </div>
</template>