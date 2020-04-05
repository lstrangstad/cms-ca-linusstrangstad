const fullUrl = document.location.search;

const params = new URLSearchParams(fullUrl);

const idLoader = params.get("id");

const apiUrl =
  "https://www.flower-power.bystrangstad.com/wp-json/wc/store/products/" +
  idLoader;

fetch(apiUrl)
  .then(response => response.json())
  .then(json => outputUser(json))
  .catch(error => console.log(error));

function outputUser(json) {
  console.log(json);

  document.title = json.name;

  const productImg = document.querySelector(".product-img");
  productImg.src = json.images[0].src;
  productImg.alt = json.name;

  const productName = document.querySelector("h2");
  productName.innerHTML = json.name;

  const productPrice = document.querySelector("#price");
  productPrice.innerHTML = json.prices.price + json.prices.price_prefix;

  const inStock = document.querySelector("#stock");
  inStock.innerHTML = json.is_in_stock;

  const productDescription = document.querySelector("#description");
  productDescription.innerHTML = json.description;
}
