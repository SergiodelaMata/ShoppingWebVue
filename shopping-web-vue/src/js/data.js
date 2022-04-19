import jsonData from '../files/test.json'

var userEmail = sessionStorage.getItem('email');
var userRole = sessionStorage.getItem('role');

var categories = [];
var products = [];
var users = [];

var overlay = false;
localStorage.setItem('overlay', overlay);

if(userEmail === null || userEmail === undefined || userRole === null || userRole === undefined)
{
  userEmail = "";
  userRole = "";
}

if( localStorage.categories !== "" && localStorage.categories !== null && localStorage.categories !== undefined
&& localStorage.products !== "" && localStorage.products !== null && localStorage.products !== undefined
&& localStorage.users !== "" && localStorage.users !== null && localStorage.users !== undefined)
{
  categories = JSON.parse(localStorage.categories);
  products = JSON.parse(localStorage.products);
  users = JSON.parse(localStorage.users);

  var productsInBag = JSON.parse(localStorage.productsInBag);

  if(localStorage.productsInBag === null || localStorage.productsInBag === undefined || localStorage.productsInBag === "")
  {
    localStorage.setItem("productsInBag", JSON.stringify([]));
    productsInBag = JSON.parse(localStorage.productsInBag);
  }
}
else
{
  const json = jsonData;
  categories = json.categories;
  products = json.products;
  users = json.users;

  localStorage.setItem('categories', JSON.stringify(categories));
  localStorage.setItem('products', JSON.stringify(products));
  localStorage.setItem('users', JSON.stringify(users));

  localStorage.setItem('productsInBag', JSON.stringify([]));
}

var user = {
    userEmail: userEmail,
    userRole: userRole
}

export default{
  data() {
      return {
          props: {
              user: user,
              products: products,
              categories: categories,
              users: users,
              productsInBag: productsInBag
          }
      }
  }
}