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
      
    }
  },
  methods: {
    categorySubmit: function() {
        var idCategory = this.$refs.idCategory.value;
        var nameCategory = this.$refs.nameCategory.value;
        var categories = JSON.parse(this.$refs.categories.innerHTML);

        const listCategories = categories.filter(categories => categories.nameCategory === nameCategory);
        //Comprueba si la categoría no se encotraba ya disponible, y en tal caso la crea
        if(listCategories.length === 0)
        {
            const newCategory = {
                "idCategory" : parseInt(idCategory),
                "nameCategory" : nameCategory
            }
            categories.push(newCategory);
            localStorage.setItem('categories', JSON.stringify(categories));
            alert("La nueva categoría ha sido creada.");
        }
        //En caso contrario, avisa al usuario de que ya existe
        else
        {
            alert("La categoría introducida ya existe.");
        }
    }
  }
}
</script>

<template>
    <div class="container d-flex flex-column justify-content-center col-sm-12" style="margin-bottom: 2em">
        <div class="row" style="margin-left: 2em; margin-right: 2em">
            <div id="containerCategory" class="container card col-lg-12 col-md-12 col-sm-12">
                <div class="container card d-flex bg-info" style="margin-top: 1em">
                    <h3>Formulario de la nueva categoría:</h3>
                </div>
                <form id="formCategory" class="form" @submit="categorySubmit">
                    <div class="form-group container col-sm-12 d-none">
                        <input ref="idCategory" id="idCategory" type="text" v-bind:value="(data.categories.length + 1)" readonly/>
                        <p ref="categories" style="display:none">{{ data.categories }}</p>
                    </div>
                    <div class="form-group container col-sm-12" style="margin-top: 1em">
                        <div class="row">
                            <h6 style="text-align: left; margin-left: -0.5em; margin-right: -0.5em"><strong>Nombre de la categoría</strong></h6>
                            <input ref="nameCategory" id="nameCategory" type="text" required/>
                        </div>
                    </div>
                    <div class="form-group container col-sm-12" style="text-align: center">
                        <input id="buttonNewCategory" class="btn btn-primary" style="margin-top: 1em; margin-bottom: 1em" type="submit" value="Añadir categoría"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>