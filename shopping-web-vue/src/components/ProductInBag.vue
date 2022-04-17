<script setup>
var data = defineProps({
  products: {
    type: Array,
    required: true
  },
  productInBag: {
    type: Object,
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
  <div class='card col-sm-12 col-md-12 col-lg-12' style="margin-top: 0.5em">
    <div class='row'>
      <div class='align-self-center col-sm-12 col-md-6 col-lg-5' style="text-align: center">
          <img class='zoom img-product-bag' v-bind:id="'imageProduct' + data.productInBag.codeproduct" v-bind:src="data.productInBag.image" v-bind:alt="data.productInBag.titleProduct" v-bind:title="data.productInBag.titleProduct" style="margin-top: 1em, opacity: 1"/>
          <div class='container'>
            <div class='row' style="margin-top: 0.5em">
              <div class='col-sm-12 col-md-12 col-lg-12'>
                <p id={unitsProductId} style="text-align: center, font-size: 1em">Unidades: {{data.productInBag.numUnits}}</p>
                <button ref="refMinusCodeProduct" class='btn btn-primary col-sm-12 col-md-6 col-lg-6' type='button' title='Eliminar de la cesta' @click="this.removeProduct" style="border-color: black">
                  <img class='icon-element' alt='Eliminar una unidad del producto' title='Eliminar una unidad del producto' src="../img/dash.svg"/>
                </button>
                <button ref="refPlusCodeProduct" class='btn btn-primary col-sm-12 col-md-6 col-lg-6' type='button' title='Agregar a la cesta' @click="this.addProduct" style="border-color: black">
                  <img class='icon-element' alt='Añadir una unidad del producto' title='Añadir una unidad del producto' src="../img/plus.svg"/>
                </button>
              </div>
              <h3 class='text-primary' style="text-align: center">{{data.productInBag.price}} €</h3>
            </div>
          </div>
        </div>
      <div class='card-body col-sm-12 col-md-6 col-lg-7'>
        <p style="text-align: left">
          <strong>{{data.productInBag.titleProduct}}</strong>
        </p>
        <p class='text-muted' style="font-size: 0.8em, text-align: left">
          {{data.productInBag.codeProduct}}
        </p>
        <p style="font-size: 0.8em, text-align: left">
          {{data.productInBag.description}}
        </p>
        
      </div>
    </div>
  </div>

</template>