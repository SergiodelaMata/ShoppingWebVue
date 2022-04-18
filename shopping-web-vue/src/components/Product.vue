<script setup>
var data = defineProps({
  product: {
    type: Object,
    required: true
  },
  products: {
    type: Array,
    required: true
  },
  category: {
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
        if(productsInBag !== null && productsInBag !== undefined && productsInBag.length !== 0)
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

              unitsProduct.setAttribute("numunits", products[indexListProducts].numUnits);
              unitsProduct.innerHTML = "Unidades: " + products[indexListProducts].numUnits;
            }
            //En caso de que sea igual el número de unidades en la cesta al número de unidades en stock menos 1,
            // en ese caso se hace lo mismo que en el caso anterior pero se deshabilita el botón para añadir unidades
            //else if(productInBag.numUnits === product.numUnits - 1)
            else if(product.numUnits - 1 === 0)
            {
              var button = this.$refs.buttonProduct;
              button.disabled = true;
              image.style.opacity = "0.5";
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

              unitsProduct.setAttribute("numunits", products[indexListProducts].numUnits);
              unitsProduct.innerHTML = "Unidades: " + products[indexListProducts].numUnits;
            }
            //En el caso de no cumplirse los casos anteriores, simplemente se deshabilita el botón para añadir a la cesta
            else
            {
              var button = this.$refs.buttonProduct;
              image.style.opacity = "0.5";
              button.disabled = true;
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

            unitsProduct.setAttribute("numunits", products[indexListProducts].numUnits);
            unitsProduct.innerHTML = "Unidades: " + products[indexListProducts].numUnits;
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
          
          unitsProduct.setAttribute("numunits", products[indexListProducts].numUnits);
          unitsProduct.innerHTML = "Unidades: " + products[indexListProducts].numUnits;
        }
      }
      else
      {
        var button = this.$refs.buttonProduct;
        image.style.opacity = "0.5";
        button.disabled = true;
      }
      this.emitter.emit('reloadBag');
      this.emitter.emit('getTotalPrice');
      this.$forceUpdate();
    },
    checkButton : function()
    {
      var image = this.$refs.imageProduct;
      var button = this.$refs.buttonProduct;
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
    },
    reloadProduct(codeProduct) 
    {
      var refUnitsProduct = this.$refs.unitsProduct;
      if(refUnitsProduct !== undefined && refUnitsProduct !== null && refUnitsProduct.getAttribute("codeproduct") === codeProduct)
      {
        var products = JSON.parse(localStorage.products);
        var product = products.find( product => product.codeProduct === codeProduct);
        refUnitsProduct.setAttribute("numunits", "Unidades: " + product.numUnits);
        refUnitsProduct.innerHTML = "Unidades: " + product.numUnits;
      }
    },
    setProduct(codeProduct)
    {
      var refImageProduct = this.$refs.imageProduct;
      var refButtonProduct = this.$refs.buttonProduct;
      if(refImageProduct !== undefined && refImageProduct !== null && refButtonProduct !== undefined && refButtonProduct !== null && refImageProduct.getAttribute("codeproduct") === codeProduct)
      {
        var products = JSON.parse(localStorage.products);
        var product = products.find( product => product.codeProduct === codeProduct);
        if(product.numUnits === 0)
        {
          refImageProduct.style.opacity = "0.5";
          refButtonProduct.disabled = true;
        }
        else
        {
          refImageProduct.style.opacity = "1";
          refButtonProduct.disabled = false;
        }
      }
    }
  },
  mounted()
  {
    this.checkButton();
    this.emitter.on('reloadProduct', codeProduct => {
      this.reloadProduct(codeProduct);
      this.emitter.emit('getTotalPrice');
    })
    this.emitter.on('setProduct', codeProduct => {
      this.setProduct(codeProduct);
    })
  }
}
</script>

<template>
  <div v-if="data.category.idCategory === data.product.idCategory" class='card col-sm-6' style="margin-bottom:'0.5em'"> 
    <div class='row'>
      <div class='col-lg-4 col-md-6 col-sm-12 align-self-center' style="text-align: center">
          <img ref="imageProduct" class='zoom img-product' v-bind:id="'imageProduct' + data.product.codeProduct" v-bind:src="data.product.image" v-bind:alt="data.product.titleProduct" v-bind:title="data.product.titleProduct" v-bind:codeProduct="data.product.codeProduct" style="opacity: 1; margin-top: 1em"/>
          <p ref="unitsProduct" v-bind:id="'unitsProduct' + data.product.codeProduct" v-bind:codeProduct="data.product.codeProduct" v-bind:numUnits="data.product.numUnits" style="font-size: 0.8em"> Unidades: {{data.product.numUnits}}</p>
          <h3 class='text-primary'>{{data.product.price}} €</h3>
          <button ref="buttonProduct" v-bind:id="'buttonProduct' + data.product.codeProduct" v-bind:codeProduct="data.product.codeProduct" v-bind:products="JSON.stringify(data.products)" class='btn btn-primary' type='button' @click="addProduct(data.product.codeProduct, data.products, data.productsInBag)" style="width: 100%; margin-bottom: 1em; font-size: 0.8em" title='Añadir a la cesta'>Añadir a <br/> la cesta</button>
      </div>
      <div class='card-body col-lg-8 col-md-6 col-sm-12'>
          <p style="text-align:'center'">
              <strong> {{data.product.titleProduct}} </strong>
          </p>
          <p class='text-muted' style="text-align: left; font-size: 0.8em">{{data.product.codeProduct}}</p>
          <p style="text-align:'left'; font-size: 0.8em">{{data.product.description}}</p>
      </div>
    </div>
  </div>
</template>