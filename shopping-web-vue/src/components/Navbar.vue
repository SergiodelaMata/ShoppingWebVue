<script setup>
/*defineProps({
  title: {
    type: String,
    required: true
  }
})*/
</script>
<script>
export default {
  data() {
    return {
      styleButton: {
        textAlign: 'center'
      }
    }
  },
  methods: {
    obtainPage: function(message) {
      alert('Hola ' + message);
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="../img/logo.jpg" width="30" height="30" class="d-inline-block align-top rounded-pill" alt="Logo de la página web" title="Logo de la página web de Gaming Shopping"/>
        Gaming Shopping
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse navbar-div" id="navbarSupportedContent">
      <ul id="buttonsNavbar" class="navbar-nav me-auto">
        <li class="nav-item" v-bind:style="styleButton">
          <a class="nav-link active" href="/" @click="obtainPage('Home')">Home</a>
        </li>
        <li id="newCategory" class="nav-item" v-bind:style="styleButton">
          <a id="newCategoryA" class="nav-link" href="/newCategory" @click="obtainPage('newCategory')">Nueva categoría</a>
        </li>
        <li id="newProduct" class="nav-item" v-bind:style="styleButton">
          <a id="newProductA" class="nav-link" href="/newProduct" @click="obtainPage('newProduct')">Nuevo producto</a>
        </li>
      </ul>
      <ul id="loginlogout" class="nav navbar-nav flex-row justify-content-center ml-auto">
      </ul>
    </div>

  </nav>
</template>