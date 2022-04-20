<script setup>
var data = defineProps({
});
</script>
<script>
export default{
  data() {
    return {
        styleButton: {
            width: '100%'
        }
    }
  },
  methods: {
    //Establece el valor que se va a mostrar al usuario del precio total que debe pagar
    setTotalPrice: function(totalPrice)
    {
        var priceText = this.$refs.priceText;
        priceText.innerHTML = "El pago total ha sido de " + totalPrice + " €";
    },
    //Realiza el cierre de la operación de compra y limpieza de los productos en la cesta de la compra
    setFinish: function()
    {
        localStorage.setItem('productsInBag', JSON.stringify([]));
        localStorage.setItem('overlay', false);
        this.emitter.emit('setOverlay');
        this.emitter.emit('getTotalPrice');
        location.reload();
    }
  },
  mounted() {
    this.emitter.on('setTotalPrice', totalPrice => {
        this.setTotalPrice(totalPrice);
        localStorage.setItem('overlay', true);
        this.emitter.emit('setOverlay');
    })
  }
}
</script>
<template>
    <div class="popup flex-column">
        <div @click="this.setFinish" class="closeIcon">
            <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <h2>¡La compra se ha efectuado correctamente! ¡Gracias por confiar en nosotros!</h2>
        <h3 ref="priceText" id="priceText">El pago total ha sido de 0 €</h3>
        <div class="container">
            <button type="button" class="btn btn-primary" v-bind:style="styleButton" @click="this.setFinish">
                Aceptar
            </button>
        </div>
    </div>
</template>