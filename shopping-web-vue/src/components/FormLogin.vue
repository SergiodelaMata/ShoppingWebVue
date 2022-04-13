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
    login: function() {
      var emailInput = this.$refs.emailInput.value;
      var passwordInput = this.$refs.passwordInput.value;
      var users = JSON.parse(this.$refs.users.innerHTML);

      console.log(emailInput);
      console.log(passwordInput);
      if(emailInput === undefined || emailInput === "" || passwordInput === undefined || passwordInput === "") {
        alert('El correo o la contraseña no han sido introducidos. Por favor, introdúzcalos para poder continuar.');
      }
      else
      {
        const user = users.filter(users => users.email === emailInput);
        console.log(user);
        //Comprueba si se ha introducido un usuario existente en el listado de usuarios y si no es así, avisa al usuario
        if(user.length === 0)
        {
            alert("El usuario no existe. Por favor, introduzca sus datos de usuario de inicio de sesión correctamente.");
        }
        else
        {
            //Comprueba si la contraseña es correcta para el usuario introducido y si es así, inicia sesión
            if(user[0].password === passwordInput)
            {
                sessionStorage.setItem('email', emailInput);
                sessionStorage.setItem('role', user[0].role);
                location.reload();
            }
            //Comprueba si la contraseña es correcta para el usuario introducido y si no es así, avisa al usuario
            else
            {
                alert("Su contraseña es incorrecta. Por favor, introduzca correctamente su contraseña.");
            }
        }
      }
    },
    show: function()
    {
      var dropdownMenuButton = this.$refs.dropdownMenuButton;
      var dropdownMenu = this.$refs.dropdownMenu;

      if(dropdownMenuButton.classList.contains("show"))
      {
        dropdownMenuButton.classList.remove("show");
      }
      else
      {
        dropdownMenuButton.classList.add("show");
        dropdownMenuButton.classList.remove("hidden");
      }

      if(dropdownMenu.classList.contains("show"))
      {
        dropdownMenu.classList.remove("show");
      }
      else
      {
        dropdownMenu.classList.add("show");
        dropdownMenu.classList.remove("hidden");
      }
    }
  }
}
</script>


<template>
  <p ref="users" style="display:none">{{users}}</p>
  <li class="dropdown order-1">
    <button ref="dropdownMenuButton" id="dropdown-menu-button" type="button" class="btn btn-outline-secondary dropdown-toggle" data-toggle="dropdown" @click="show" v-bind:style="styleButton">Login</button>
    <ul ref="dropdownMenu" id="dropdown-menu" class="dropdown-menu dropdown-menu-right" style="margin-right: '3em'; background: lightslategrey">
      <form id='dropdown-menu-form' class='form'>
        <div class='form-group container'>
          <input ref="emailInput" id='emailInput' class='form-control form-control-sm' placeholder='Email' type='text' required/>
        </div>
        <div class='form-group container'>
          <input ref="passwordInput" id='passwordInput' class='form-control form-control-sm' placeholder='Contraseña' type='password' required/>
        </div>
        <div class='form-group container'>
          <button class='btn btn-primary btn-block' type='button' @click="login" style="margin-top:'1em', width: '100%'">Login</button>
        </div>
      </form>
    </ul>
  </li>
</template>