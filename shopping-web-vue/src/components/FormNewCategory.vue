<script setup>
var data = defineProps({
  categories: {
    type: Array,
    required: true
  }
});
</script>
<script>
export default {
  data() {
    return {
      styleButtonSubmit: {
        marginTop: '1em',
        marginBottom: '1em'
      },
      textAlignCenter: {
        textAlign: 'center'
      },
      styleSubtitle: {
        textAlign: 'left',
        marginLeft: '-0.5em',
        marginRight: '-0.5em'
      },
      marginTop: {
        marginTop: '1em'
      },
      marginBottom: {
        marginBottom: '2em'
      },
      lateralMargin: {
        marginLeft: '2em',
        marginRight: '2em'
      },
      displayNone: {
        display: 'none'
      }
    }
  },
  methods: {
    //Realiza la comprobación y la inserción de la nueva categoría
    categorySubmit: function() {
      var idCategory = this.$refs.idCategory.value;
      var nameCategory = this.$refs.nameCategory.value;
      var categories = JSON.parse(this.$refs.categories.innerHTML);

      const listCategories = categories.filter(categories => categories.nameCategory === nameCategory);
      //Comprueba si la categoría no se encotraba ya disponible, y en tal caso la crea
      if(listCategories.length === 0 && nameCategory !== "")
      {
          const newCategory = {
              "idCategory" : parseInt(idCategory),
              "nameCategory" : nameCategory
          }
          categories.push(newCategory);
          localStorage.setItem('categories', JSON.stringify(categories));
          alert("La nueva categoría ha sido creada.");
          window.location = '/';
      }
      //Comprueba si no se ha introducido el nombre de la categoría para avisarle en tal caso
      else if(nameCategory === "")
      {
          alert("No se ha podido crear la categoría. Por favor, compruebe que el nombre de la categoría no esté vacío.");
      }
      //En caso contrario, avisa al usuario de que ya existe
      else
      {
          alert("La categoría ya existe. Por favor, compruebe que el nombre de la categoría no esté repetido.");
      }
    }
  }
}
</script>

<template>
    <div class="container d-flex flex-column justify-content-center col-sm-12" v-bind:style="marginBottom">
        <div class="row" v-bind:style="lateralMargin">
            <div id="containerCategory" class="container card col-lg-12 col-md-12 col-sm-12">
                <div class="container card d-flex bg-info" v-bind:style="marginTop">
                    <h3>Formulario de la nueva categoría:</h3>
                </div>
                <form id="formCategory" class="form">
                    <div class="form-group container col-sm-12 d-none">
                        <input ref="idCategory" id="idCategory" type="text" v-bind:value="(data.categories.length + 1)" readonly/>
                        <p ref="categories" v-bind:style="displayNone">{{ data.categories }}</p>
                    </div>
                    <div class="form-group container col-sm-12" v-bind:style="marginTop">
                        <div class="row">
                            <h6 v-bind:style="styleSubtitle"><strong>Nombre de la categoría(*)</strong></h6>
                            <input ref="nameCategory" id="nameCategory" type="text" required/>
                        </div>
                    </div>
                    <div class="form-group container col-sm-12" v-bind:style="textAlignCenter">
                        <input id="buttonNewCategory" class="btn btn-primary" v-bind:style="styleButtonSubmit" type="button" @click="categorySubmit" value="Añadir categoría"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>