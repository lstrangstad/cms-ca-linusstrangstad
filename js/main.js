const myUrl =
  "https://www.flower-power.bystrangstad.com/wp-json/wc/store/products/";

fetch(myUrl)
  .then(Response => Response.json())
  .then(json => flowerInfo(json))
  .catch(error => console.log(error));

function flowerInfo(json) {
  let data = json;

  console.log(data);

  const flowerContainer = document.querySelector(".row");

  let html = "";

  data.forEach(result => {
    html += `              
    <div class="card">    
      <img class="image" src="${result.images[0].src}" alt="${result.name}">
       <div class="details">
        <h3 class="name">${result.name}</h3>
        <p>Price: ${result.prices.price} ${result.prices.price_prefix}</p>                           
        <a class="btn" href="details.html?id=${result.id}">View More</a>
      </div>
  </div>`;
  });

  flowerContainer.innerHTML = html;
}
