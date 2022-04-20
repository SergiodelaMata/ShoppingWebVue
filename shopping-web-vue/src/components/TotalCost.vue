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
      textAlignRight: {
        textAlign: 'right'
      },
      displayNone: {
        display: 'none'
      },
      marginTopAndLaterals: {
        marginTop: '0.5em',
        marginLeft: '0.5em',
        marginRight: '0.5em'
      },
      fullWidth: {
        width: '100%'
      }
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
    },
    getTotalPriceResult: function()
    {
      var productsInBag = JSON.parse(this.$refs.productsInBag.innerHTML);
      var totalPrice = 0;
      for(var i = 0; i < productsInBag.length; i++)
      {
        totalPrice += productsInBag[i].price * productsInBag[i].numUnits;
      }
      totalPrice = Math.round(totalPrice * 100) / 100;
      return totalPrice;
    },
    setPopUp: function() 
    {
      var totalPrice = this.getTotalPriceResult();
      localStorage.setItem('overlay', true);
      this.emitter.emit('setTotalPrice', totalPrice);
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
        <h5 v-bind:style="marginTopAndLaterals">Coste Total:</h5>
        <p ref="productsInBag" v-bind:style="displayNone">{{JSON.stringify(data.productsInBag)}}</p>
      </div>
      <div className='col-sm-12 col-md-6 col-lg-6' v-bind:style="textAlignRight">
        <p ref="totalPrice" v-bind:style="marginTopAndLaterals"> 0 €</p>
      </div>
      <div className='col-sm-12 col-md-12 col-lg-12' v-bind:style="fullWidth">
        <button ref="buttonTotalCost" className='btn btn-primary' type='button' title='Realizar pedido' @click="this.setPopUp" v-bind:style="fullWidth">Realizar pedido</button>
      </div>
    </div>
  </div>
</template>