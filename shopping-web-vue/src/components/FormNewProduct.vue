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
        var lengthCode = 14 - codeProduct.length;
        for(let i = 0; i < lengthCode; i++)
        {
            codeProduct = "0" + codeProduct;
        }
        //Comprueba si todos los campos obligatorios se han introducido
        if(titleProduct === "" || price === "" || numUnits === "" || image === "" || idCategory === "-")
        {
            alert("No se han introducido todos los datos obligatorios. Por favor, revise que ha introducido el título del producto, su precio, su número de unidades, su imagen y su categoría.");
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
                window.location = '/';
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
    <div class="container d-flex flex-column justify-content-center col-sm-12" v-bind:style="marginBottom">
        <div class="row" v-bind:style="lateralMargin">
            <div id="containerCategory" class="container card col-lg-12 col-md-12 col-sm-12">
                <div class="container card d-flex bg-info" v-bind:style="marginTop">
                    <h3>Formulario del nuevo producto:</h3>
                </div>
                <form id="formCategory" class="form">
                    <div class="form-group container col-sm-12 d-none">
                        <input ref="codeProduct" id="codeProduct" type="text" v-bind:value="(data.products.length + 1)" readOnly/>
                        <p ref="products" v-bind:style="displayNone">{{ data.products }}</p>
                    </div>
                    <div class="form-group container col-sm-12" v-bind:style="marginTop">
                        <div class="row">
                            <h6 v-bind:style="styleSubtitle"><strong>Título del producto(*)</strong></h6>
                            <input ref="titleProduct" id="titleProduct" type="text" required/>
                        </div>
                    </div>
                    <div class="form-group container col-sm-12" v-bind:style="marginTop">
                        <div class="row">
                            <h6 v-bind:style="styleSubtitle"><strong>Categoría a la que pertenecerá el producto(*)</strong></h6>
                            <select ref="selectorCategory" id="selectorCategory">
                                <option value="-">-</option>
                                <option v-for="category in data.categories" v-bind:value="category.idCategory">{{category.nameCategory}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group container col-sm-12" v-bind:style="marginTop">
                        <div class="row">
                            <h6 v-bind:style="styleSubtitle"><strong>Descripción del producto</strong></h6>
                            <textarea ref="description" id="description" cols="2000" rows="4"></textarea>
                        </div>
                    </div>
                    <div class="form-group container col-sm-12" v-bind:style="marginTop">
                        <div class="row">
                            <h6 v-bind:style="styleSubtitle"><strong>Precio del producto(*)</strong></h6>
                            <input ref="price" id="price" type="number" min="0" step=".01" required/>
                        </div>
                    </div>
                    <div class="form-group container col-sm-12" v-bind:style="marginTop">
                        <div class="row">
                            <h6 v-bind:style="styleSubtitle"><strong>Número de unidades del producto(*)</strong></h6>
                            <input ref="numUnits" id="numUnits" type="number" min="0" required/>
                        </div>
                    </div>
                    <div class="form-group container col-sm-12" v-bind:style="marginTop">
                        <div class="row">
                            <h6 v-bind:style="styleSubtitle"><strong>URL de la imagen del producto(*)</strong></h6>
                            <input ref="image" id="image" type="text" required/>
                        </div>
                    </div>
                    <div class="form-group container col-sm-12" v-bind:style="textAlignCenter">
                        <input id="buttonNewProduct" class="btn btn-primary" type="button" v-bind:style="styleButtonSubmit" @click="productSubmit" value="Añadir producto"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>