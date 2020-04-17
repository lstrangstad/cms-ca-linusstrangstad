const myUrl =
  "https://www.flower-power.bystrangstad.com/wp-json/wc/store/products/";

fetch(myUrl)
  .then(Response => Response.json())
  .then(json => flowerInfo(json))
  .catch(error => console.log(error));

function flowerInfo(json) {
  let siteData = json;

  const flowerContainer = document.querySelector(".row");

  let html = "";

  siteData.forEach(result => {
    html += `              
    <div class="card">    
      <img class="image" src="${result.images[0].src}" alt="${result.name}">
       <div class="details">
        <h3 class="name">${result.name}</h3>
        <p>Price: ${result.prices.price} ${result.prices.price_prefix}</p>                           
        <a class="btn" href="about-product.html?id=${result.id}">View More</a>
      </div>
  </div>`;
  });

  flowerContainer.innerHTML = html;
}

const nameSortUrl =
  "https://www.flower-power.bystrangstad.com/wp-json/wc/store/products?orderby=title&order=asc";
const sortByName = document.querySelector(".sort-name");

sortByName.addEventListener("click", nameSorter => {
  fetch(nameSortUrl)
    .then(response => response.json())
    .then(json => nameSorter(json))
    .catch(error => console.log(error));

  function nameSorter(json) {
    let sortedProducts = json;

    const sortedNameContainer = document.querySelector(".row");

    let newHtml = "";

    sortedProducts.forEach(result => {
      newHtml += `              
    <div class="card">    
      <img class="image" src="${result.images[0].src}" alt="${result.name}">
       <div class="details">
        <h3 class="name">${result.name}</h3>
        <p>Price: ${result.prices.price} ${result.prices.price_prefix}</p>                           
        <a class="btn" href="about-product.html?id=${result.id}">View More</a>
      </div>
  </div>`;
    });

    sortedNameContainer.innerHTML = newHtml;
  }
});

const priceSortUrl =
  "https://www.flower-power.bystrangstad.com/wp-json/wc/store/products?orderby=price&order=asc";

const sortByPrice = document.querySelector(".sort-price");

sortByPrice.addEventListener("click", priceSorter => {
  fetch(priceSortUrl)
    .then(response => response.json())
    .then(json => priceSorter(json))
    .catch(error => console.log(error));

  function priceSorter(json) {
    let sortedProductsPrice = json;

    const sortedPriceContainer = document.querySelector(".row");

    let newHtml = "";

    sortedProductsPrice.forEach(result => {
      newHtml += `              
    <div class="card">    
      <img class="image" src="${result.images[0].src}" alt="${result.name}">
       <div class="details">
        <h3 class="name">${result.name}</h3>
        <p>Price: ${result.prices.price} ${result.prices.price_prefix}</p>                           
        <a class="btn" href="about-product.html?id=${result.id}">View More</a>
      </div>
  </div>`;
    });

    sortedPriceContainer.innerHTML = newHtml;
  }
});
