<script setup>
var session = defineProps({
  user: {
    type: Object,
    required: true
  },
  users: {
    type: Array,
    required: true
  }
});
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
    },
    show: function()
    {
      var dropdownMenu = this.$refs.dropdownMenu;

      if(dropdownMenu.classList.contains("show"))
      {
        dropdownMenu.classList.remove("show");
      }
      else
      {
        dropdownMenu.classList.add("show");
      }
    }
  }
}
</script>

<template>
  <li class="dropdown order-1">
    <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" @click="show" v-bind:style="styleButton">Login</button>
    <ul ref="dropdownMenu" id="dropdown-menu" class="dropdown-menu dropdown-menu-right" style="margin-right: '3em'; color: 'dark'">
      <form id='dropdown-menu' class='form'>
        <div class='form-group container'>
          <input id='emailInput' class='form-control form-control-sm' placeholder='Email' type='text' required/>
        </div>
        <div class='form-group container'>
          <input id='passwordInput' class='form-control form-control-sm' placeholder='Contraseña' type='password' required/>
        </div>
        <div class='form-group container'>
          <button class='btn btn-primary btn-block' type='submit' style="margin-top:'1em', width: '100%'">Login</button>
        </div>
      </form>
    </ul>
  </li>
</template>