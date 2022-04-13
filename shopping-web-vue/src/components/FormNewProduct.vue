<script setup>
var data = defineProps({
  products: {
    type: Array,
    required: true
  },
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
    productSubmit: function() 
    {
        var codeProduct = this.$refs.codeProduct.value;
        var idCategory = this.$refs.selectorCategory.value;
        var titleProduct = this.$refs.titleProduct.value;
        var description = this.$refs.description.value;
        var price = this.$refs.price.value;
        var numUnits = this.$refs.numUnits.value;
        var image = this.$refs.image.value;
        var products = JSON.parse(this.$refs.products.innerHTML);

        //En caso de no seleccionar ninguna de las categorías disponibles, se avisa al usuario de ello
        if(idCategory === "-")
        {
            alert("Por favor, introduzca la categoría para este producto.")
        }
        //En caso contrario, se comprueba si se puede introducir el producto
        else
        {
            const listProducts = products.filter(products => products.titleProduct === titleProduct);
            //En caso de no encontrarse en el listado, se introduce en él
            if(listProducts.length === 0)
            {
                const newProduct = {
                    "codeProduct" : codeProduct,
                    "idCategory" : parseInt(idCategory),
                    "titleProduct" : titleProduct,
                    "description" : description,
                    "price" : parseFloat(price),
                    "numUnits" : parseInt(numUnits),
                    "image" : image
                }

                products.push(newProduct);
                localStorage.setItem('products', JSON.stringify(products));
                alert("El producto ha sido creado e introducido en su respectiva categoría.");
            }
            //En caso contrario, se avisa al usuario de que el producto ya se encontraba disponible
            else
            {
                alert("El producto introducido ya existe.");
            }
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
                    <h3>Formulario del nuevo producto:</h3>
                </div>
                <form id="formCategory" class="form" @submit="productSubmit">
                    <div class="form-group container col-sm-12 d-none">
                        <input ref="codeProduct" id="codeProduct" type="text" value={this.setValueNewProduct()} readOnly/>
                        <p ref="products" style="display:none">{{ data.products }}</p>
                    </div>
                    <div class="form-group container col-sm-12" style="margin-top: 1em">
                        <div class="row">
                            <h6 style="text-align: left; margin-left: -0.5em; margin-right: -0.5em"><strong>Título del producto</strong></h6>
                            <input ref="titleProduct" id="titleProduct" type="text" required/>
                        </div>
                    </div>
                    <div class="form-group container col-sm-12" style="margin-top: 1em">
                        <div class="row">
                            <h6 style="text-align: left; margin-left: -0.5em; margin-right: -0.5em"><strong>Categoría a la que pertenecerá el producto</strong></h6>
                            <select ref="selectorCategory" id="selectorCategory">
                                <option value="-">-</option>
                                <option v-for="category in data.categories" v-bind:value="category.idCategory">{{category.nameCategory}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group container col-sm-12" style="margin-top: 1em">
                        <div class="row">
                            <h6 style="text-align: left; margin-left: -0.5em; margin-right: -0.5em"><strong>Descripción del producto</strong></h6>
                            <textarea ref="description" id="description" cols="2000" rows="4"></textarea>
                        </div>
                    </div>
                    <div class="form-group container col-sm-12" style="margin-top: 1em">
                        <div class="row">
                            <h6 style="text-align: left; margin-left: -0.5em; margin-right: -0.5em"><strong>Precio del producto</strong></h6>
                            <input ref="price" id="price" type="number" min="0" step=".01" required/>
                        </div>
                    </div>
                    <div class="form-group container col-sm-12" style="margin-top: 1em">
                        <div class="row">
                            <h6 style="text-align: left; margin-left: -0.5em; margin-right: -0.5em"><strong>Número de unidades del producto</strong></h6>
                            <input ref="numUnits" id="numUnits" type="number" min="0" required/>
                        </div>
                    </div>
                    <div class="form-group container col-sm-12" style="margin-top: 1em">
                        <div class="row">
                            <h6 style="text-align: left; margin-left: -0.5em; margin-right: -0.5em"><strong>URL de la imagen del producto</strong></h6>
                            <input ref="image" id="image" type="text" required/>
                        </div>
                    </div>
                    <div class="form-group container col-sm-12" style="text-align: center">
                        <input id="buttonNewProduct" class="btn btn-primary" type="submit" style="margin-top: 1em; margin-bottom: 1em" value="Añadir producto"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>