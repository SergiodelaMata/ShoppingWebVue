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
    }
}
</script>

<template>
  <div className='card'>
    <div className='row'>
      <div className='col-sm-12 col-md-6 col-lg-6'>
        <h5 style="margin-left: 0.5em, margin-top: 0.5em, margin-bottom: 0.5em">Coste Total:</h5>
      </div>
      <div className='col-sm-12 col-md-6 col-lg-6' style="textAlign: right">
        <p style="margin-right: 0.5em, margin-top: 0.5em, margin-bottom: 0.5em"><!--{totalPrice}--> €</p>
      </div>
      <div className='col-sm-12 col-md-12 col-lg-12' style="width: 100%">
        <button className='btn btn-primary' type='button' title='Realizar pedido' @click="this.setPopUp" style="width: 100%">Realizar pedido</button>
      </div>
    </div>
  </div>
</template>