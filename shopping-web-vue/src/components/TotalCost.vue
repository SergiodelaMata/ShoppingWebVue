<script setup>
var data = defineProps({
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
  },
  methods: {
    getTotalPrice: function()
    {
      var productsInBag;
      var buttonTotalCost = this.$refs.buttonTotalCost;
      if(this.$refs.productsInBag.innerHTML === "")
      {
        productsInBag = [];
      }
      else
      {
        productsInBag = JSON.parse(this.$refs.productsInBag.innerHTML);
      }
      var totalPriceP = this.$refs.totalPrice;
      var totalPrice = 0;
      for(var i = 0; i < productsInBag.length; i++)
      {
        totalPrice += productsInBag[i].price * productsInBag[i].numUnits;
      }
      totalPrice = Math.round(totalPrice * 100) / 100;
      totalPriceP.innerHTML = totalPrice + " €";

      if(totalPrice === 0)
      {
        buttonTotalCost.disabled = true;
      }
      else
      {
        buttonTotalCost.disabled = false;
      }
    }
  },
  mounted() {
    this.getTotalPrice();
    this.emitter.on('getTotalPrice', () => {
      var productsInBag = localStorage.productsInBag;
      this.$refs.productsInBag.innerHTML = productsInBag;
      this.getTotalPrice();
    })
  }
}
</script>

<template>
  <div className='card'>
    <div className='row'>
      <div className='col-sm-12 col-md-6 col-lg-6'>
        <h5 style="margin-left: 0.5em, margin-top: 0.5em, margin-bottom: 0.5em">Coste Total:</h5>
        <p ref="productsInBag" style="display:none">{{JSON.stringify(data.productsInBag)}}</p>
      </div>
      <div className='col-sm-12 col-md-6 col-lg-6' style="textAlign: right">
        <p ref="totalPrice" style="margin-right: 0.5em, margin-top: 0.5em, margin-bottom: 0.5em"><!--{totalPrice}--> €</p>
      </div>
      <div className='col-sm-12 col-md-12 col-lg-12' style="width: 100%">
        <button ref="buttonTotalCost" className='btn btn-primary' type='button' title='Realizar pedido' @click="this.setPopUp" style="width: 100%">Realizar pedido</button>
      </div>
    </div>
  </div>
</template>