<script setup>
var data = defineProps({
});
</script>
<script>
export default{
  data() {
    return {
    }
  },
  methods: {
    setTotalPrice: function(totalPrice)
    {
        var priceText = this.$refs.priceText;
        priceText.innerHTML = "El pago total ha sido de " + totalPrice + " €";
    },
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
            <button type="button" class="btn btn-primary" style="width:100%" @click="this.setFinish">
                Aceptar
            </button>
        </div>
    </div>
</template>