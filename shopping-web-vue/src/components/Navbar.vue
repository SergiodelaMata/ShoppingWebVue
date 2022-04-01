<script setup>
/*defineProps({
  title: {
    type: String,
    required: true
  }
})*/
</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="">
        <img src="../img/logo.jpg" width="30" height="30" class="d-inline-block align-top rounded-pill" alt="Logo de la página web" title="Logo de la página web de Gaming Shopping"/>
        Gaming Shopping
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
      <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div className="collapse navbar-collapse navbar-div" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto">
      </ul>
      <ul id="loginlogout" className="nav navbar-nav flex-row justify-content-center ml-auto">
      </ul>
    </div>

  </nav>
</template>