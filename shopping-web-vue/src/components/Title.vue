<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>
<script>
export default{
  data() {
    return {
      textAlignCenter: {
        textAlign: 'center'
      }
    }
  }
}
</script>

<template>
  <h1 v-bind:style="textAlignCenter" >{{ title }}</h1>
</template>