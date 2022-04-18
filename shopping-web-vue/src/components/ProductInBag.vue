<script setup>
var data = defineProps({
  products: {
    type: Array,
    required: true
  },
  productInBag: {
    type: Object,
    required: true
  },
  productsInBag: {
    type: Array,
    required: true
  }
});
</script>
<script>
export default{
  data() {
    return {
    }
  },
  methods: {
    addProduct : function(codeProduct, products, productsInBag) {
      var unitsProduct = this.$refs.unitsProduct;
      var image = this.$refs.imageProduct;
      image.style.opacity = "1";
      const product = products.filter(products => products.codeProduct === codeProduct)[0];
      //Se comprueba que el producto cuenta con unidades
      if(product.numUnits !== 0)
      {
        //Se comprueba que la cesta no está vacía. En tal caso revisa si se puede o no introducir
        if(productsInBag.length !== 0)
        {
          //Se comprueba si el producto ya se encontraba en la cesta. En caso de encontrarse, se revisa si se puede introducir 
          const productInBag = productsInBag.filter(product => product.codeProduct === codeProduct)[0];
          if(productInBag !== undefined && productInBag !== null)
          {
              //Se comprueba si el número de unidades en la cesta es inferior al número de unidades disponibles menos 1 y si es así
              // incrementa en una unidad el número de unidades del producto en la cesta
              //if(productInBag.numUnits < product.numUnits - 1)
              if(product.numUnits - 1 > 0)
              {
                let indexBag = productsInBag.findIndex( product => product.codeProduct === codeProduct);
                const productInBagUpdated = {
                  "codeProduct": productsInBag[indexBag].codeProduct,
                  "titleProduct": productsInBag[indexBag].titleProduct,
                  "description": productsInBag[indexBag].description,
                  "price": productsInBag[indexBag].price,
                  "numUnits": productsInBag[indexBag].numUnits + 1,
                  "image": productsInBag[indexBag].image
                }
                productsInBag[indexBag] = productInBagUpdated;
                localStorage.setItem("productsInBag", JSON.stringify(productsInBag));

                let indexListProducts = products.findIndex( product => product.codeProduct === codeProduct);
                const productUpdated = {
                  "codeProduct": products[indexListProducts].codeProduct,
                  "idCategory": products[indexListProducts].idCategory,
                  "titleProduct": products[indexListProducts].titleProduct,
                  "description": products[indexListProducts].description,
                  "price": products[indexListProducts].price,
                  "numUnits": products[indexListProducts].numUnits - 1,
                  "image": products[indexListProducts].image
                }
                products[indexListProducts] = productUpdated;
                localStorage.setItem("products", JSON.stringify(products));

                unitsProduct.setAttribute("numunits", productsInBag[indexBag].numUnits);
                unitsProduct.innerHTML = "Unidades: " + productsInBag[indexBag].numUnits;
              }
              //En caso de que sea igual el número de unidades en la cesta al número de unidades en stock menos 1,
              // en ese caso se hace lo mismo que en el caso anterior pero se deshabilita el botón para añadir unidades
              //else if(productInBag.numUnits === product.numUnits - 1)
              else if(product.numUnits - 1 === 0)
              {
                var buttonPlus = this.$refs.refPlusCodeProduct;
                image.style.opacity = "0.5";
                buttonPlus.disabled = true;
                let indexBag = productsInBag.findIndex( product => product.codeProduct === codeProduct);
                const productInBagUpdated = {
                  "codeProduct": productsInBag[indexBag].codeProduct,
                  "titleProduct": productsInBag[indexBag].titleProduct,
                  "description": productsInBag[indexBag].description,
                  "price": productsInBag[indexBag].price,
                  "numUnits": productsInBag[indexBag].numUnits + 1,
                  "image": productsInBag[indexBag].image
                }
                productsInBag[indexBag] = productInBagUpdated;
                localStorage.setItem("productsInBag", JSON.stringify(productsInBag));

                let indexListProducts = products.findIndex( product => product.codeProduct === codeProduct);
                const productUpdated = {
                  "codeProduct": products[indexListProducts].codeProduct,
                  "idCategory": products[indexListProducts].idCategory,
                  "titleProduct": products[indexListProducts].titleProduct,
                  "description": products[indexListProducts].description,
                  "price": products[indexListProducts].price,
                  "numUnits": products[indexListProducts].numUnits - 1,
                  "image": products[indexListProducts].image
                }
                products[indexListProducts] = productUpdated;
                localStorage.setItem("products", JSON.stringify(products));

                unitsProduct.setAttribute("numunits", productsInBag[indexBag].numUnits);
                unitsProduct.innerHTML = "Unidades: " + productsInBag[indexBag].numUnits;
              }
              //En el caso de no cumplirse los casos anteriores, simplemente se deshabilita el botón para añadir a la cesta
              else
              {
                image.style.opacity = "0.5";
                buttonPlus.disabled = true;
              }
          }
          //En caso de no encontrarse, lo introduce directamente a la cesta
          else
          {
            const productIntroduced = {
              "codeProduct": product.codeProduct,
              "titleProduct": product.titleProduct,
              "description": product.description,
              "price": product.price,
              "numUnits": 1,
              "image": product.image
            }
            productsInBag.push(productIntroduced);
            localStorage.setItem("productsInBag", JSON.stringify(productsInBag));

            let indexListProducts = products.findIndex( product => product.codeProduct === codeProduct);
            const productUpdated = {
              "codeProduct": products[indexListProducts].codeProduct,
              "idCategory": products[indexListProducts].idCategory,
              "titleProduct": products[indexListProducts].titleProduct,
              "description": products[indexListProducts].description,
              "price": products[indexListProducts].price,
              "numUnits": products[indexListProducts].numUnits - 1,
              "image": products[indexListProducts].image
            }
            products[indexListProducts] = productUpdated;
            localStorage.setItem("products", JSON.stringify(products));

            unitsProduct.setAttribute("numunits", productsInBag[indexBag].numUnits);
            unitsProduct.innerHTML = "Unidades: " + productsInBag[indexBag].numUnits;
          }
        }
        //En caso de estar vacía, lo introduce directamente a la cesta
        else
        {
          const productIntroduced = {
            "codeProduct": product.codeProduct,
            "titleProduct": product.titleProduct,
            "description": product.description,
            "price": product.price,
            "numUnits": 1,
            "image": product.image
          }
          productsInBag.push(productIntroduced);
          localStorage.setItem("productsInBag", JSON.stringify(productsInBag));

          let indexListProducts = products.findIndex( product => product.codeProduct === codeProduct);
          const productUpdated = {
            "codeProduct": products[indexListProducts].codeProduct,
            "idCategory": products[indexListProducts].idCategory,
            "titleProduct": products[indexListProducts].titleProduct,
            "description": products[indexListProducts].description,
            "price": products[indexListProducts].price,
            "numUnits": products[indexListProducts].numUnits - 1,
            "image": products[indexListProducts].image
          }
          products[indexListProducts] = productUpdated;
          localStorage.setItem("products", JSON.stringify(products));

          unitsProduct.setAttribute("numunits", productsInBag[productsInBag.length - 1].numUnits);
          unitsProduct.innerHTML = "Unidades: " + productsInBag[productsInBag.length - 1].numUnits;
        }
      }
      else
      {
        image.style.opacity = "0.5";
        buttonPlus.disabled = true;
      }
      this.emitter.emit('setImageOpacity', image.getAttribute("codeproduct"));
      this.emitter.emit('reloadCategoriesList');
      this.emitter.emit('getTotalPrice');

    },
    removeProduct : function(codeProduct, products, productsInBag) {
      var image = this.$refs.imageProduct;
      image.style.opacity = "1";
      var unitsProduct = this.$refs.unitsProduct;
      const indexNotInBag = products.findIndex(product => product.codeProduct === codeProduct);
      const productInBag = productsInBag.filter(product => product.codeProduct === codeProduct)[0];
      const index = productsInBag.findIndex(product => product.codeProduct === codeProduct);

      var buttonPlus = this.$refs.refPlusCodeProduct;

      //Comprueba si solo existe una unidad del producto y en tal caso lo saca de la cesta
      if(parseInt(productInBag.numUnits) === 1)
      {
        productsInBag.splice(index, 1);
        localStorage.setItem("productsInBag", JSON.stringify(productsInBag));
        buttonPlus.removeAttribute("disabled");

        const productUpdated = {
          "codeProduct": products[indexNotInBag].codeProduct,
          "idCategory": products[indexNotInBag].idCategory,
          "titleProduct": products[indexNotInBag].titleProduct,
          "description": products[indexNotInBag].description,
          "price": products[indexNotInBag].price,
          "numUnits": products[indexNotInBag].numUnits + 1,
          "image": products[indexNotInBag].image
        }
        products[indexNotInBag] = productUpdated;
        localStorage.setItem("products", JSON.stringify(products));
        this.emitter.emit('reloadHomePage');
        this.emitter.emit('reloadProduct', codeProduct);
      }
      //En caso contrario elimina una unidad del producto de la cesta
      else
      {
        const productUpdated = {
          "codeProduct": productsInBag[index].codeProduct,
          "titleProduct": productsInBag[index].titleProduct,
          "description": productsInBag[index].description,
          "price": productsInBag[index].price,
          "numUnits": productsInBag[index].numUnits - 1,
          "image": productsInBag[index].image
        }
        productsInBag[index] = productUpdated;
        localStorage.setItem("productsInBag", JSON.stringify(productsInBag));
        buttonPlus.removeAttribute("disabled");

        const productNotBagUpdated = {
          "codeProduct": products[indexNotInBag].codeProduct,
          "idCategory": products[indexNotInBag].idCategory,
          "titleProduct": products[indexNotInBag].titleProduct,
          "description": products[indexNotInBag].description,
          "price": products[indexNotInBag].price,
          "numUnits": products[indexNotInBag].numUnits + 1,
          "image": products[indexNotInBag].image
        }
        products[indexNotInBag] = productNotBagUpdated;
        localStorage.setItem("products", JSON.stringify(products));

        unitsProduct.setAttribute("numunits", productsInBag[index].numUnits);
        unitsProduct.innerHTML = "Unidades: " + productsInBag[index].numUnits;
      }
      this.emitter.emit('setProduct', image.getAttribute("codeproduct"));
      this.emitter.emit('reloadCategoriesList');
      this.emitter.emit('getTotalPrice');
    },
    checkPlusButton : function()
    {
      var image = this.$refs.imageProduct;
      var button = this.$refs.refPlusCodeProduct;
      //Se comprueba si esta elaborando el botón para añadir a la cesta. 
      //Éste no se genera si el producto no pertenece a la categoría en la que se está elaborando
      if(image !== undefined && button !== undefined)
      {
        var codeProduct = button.getAttribute("codeProduct");
        var products = JSON.parse(button.getAttribute("products"));
        var product = products.find( product => product.codeProduct === codeProduct);
        //Si el número de unidades es 0, el botón se deshabilita
        if(product.numUnits === 0)
        {
          image.style.opacity = "0.5";
          button.disabled = true;
        }
        else
        {
          image.style.opacity = "1";
          button.disabled = false;
        }
      }
    }
  },
  mounted() {
    this.checkPlusButton();
  }
  
}
</script>

<template>
  <div class='card col-sm-12 col-md-12 col-lg-12' style="margin-top: 0.5em">
    <div class='row'>
      <div class='align-self-center col-sm-12 col-md-6 col-lg-5' style="text-align: center">
          <img ref="imageProduct" class='zoom img-product-bag' v-bind:id="'imageProduct' + data.productInBag.codeproduct" v-bind:src="data.productInBag.image" v-bind:alt="data.productInBag.titleProduct" v-bind:title="data.productInBag.titleProduct" v-bind:codeProduct="data.productInBag.codeProduct" style="margin-top: 1em, opacity: 1"/>
          <div class='container'>
            <div class='row' style="margin-top: 0.5em">
              <div class='col-sm-12 col-md-12 col-lg-12'>
                <p ref="unitsProduct" v-bind:id="'unitsProduct' + data.productInBag.codeProduct" v-bind:numUnits="data.productInBag.numUnits" style="text-align: center; font-size: 1em">Unidades: {{data.productInBag.numUnits}}</p>
                <button ref="refMinusCodeProduct" class='btn btn-primary col-sm-12 col-md-6 col-lg-6' type='button' title='Eliminar de la cesta' @click="this.removeProduct(data.productInBag.codeProduct, data.products, data.productsInBag)" style="border-color: black">
                  <img class='icon-element' alt='Eliminar una unidad del producto' title='Eliminar una unidad del producto' src="../img/dash.svg"/>
                </button>
                <button ref="refPlusCodeProduct" class='btn btn-primary col-sm-12 col-md-6 col-lg-6' type='button' title='Agregar a la cesta' v-bind:codeProduct="data.productInBag.codeProduct" v-bind:products="JSON.stringify(data.products)" @click="this.addProduct(data.productInBag.codeProduct, data.products, data.productsInBag)" style="border-color: black">
                  <img class='icon-element' alt='Añadir una unidad del producto' title='Añadir una unidad del producto' src="../img/plus.svg"/>
                </button>
              </div>
              <h3 class='text-primary' style="text-align: center">{{data.productInBag.price}} €</h3>
            </div>
          </div>
        </div>
      <div class='card-body col-sm-12 col-md-6 col-lg-7'>
        <p style="text-align: left">
          <strong>{{data.productInBag.titleProduct}}</strong>
        </p>
        <p class='text-muted' style="font-size: 0.8em; text-align: left">
          {{data.productInBag.codeProduct}}
        </p>
        <p style="font-size: 0.8em; text-align: left">
          {{data.productInBag.description}}
        </p>
        
      </div>
    </div>
  </div>

</template>