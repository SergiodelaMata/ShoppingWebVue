<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <h1 style="text-align:center" >{{ title }}</h1>
</template>