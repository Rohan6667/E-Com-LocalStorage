const url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products";

const productsContainer = document.querySelector("#product-container");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

function shimmerState(status) {
  if (status) return (productsContainer.innerHTML = "");
  let data = "";
  for (let index = 0; index < 12; index++) {
    data += ` <section class="shimmer-card">
      <div class="img-tag"></div>
      <div class="brand-name-tag"></div>
      <div class="price-tag"></div>
      <div class="description1"></div>
      <div class="description2"></div>
      <div class="description3"></div>
      <div class="category-tag"></div>
      <div class="btn-tag"></div>
    </section> `;
  }
  productsContainer.innerHTML = data;
}

/* Asnchronous function that fetches data from API. */
async function getProducts(url) {
  try {
    shimmerState(false); // Hide the shimmers before making a request to server.
    let response = await fetch(url);
    return await response.json();
  } catch (error) {
    alert(error);
  }
}

/* Calling the async function. */
let dataArray = getProducts(url).then((data) => {
  renderProducts(data.data);
  dataArray = data.data;
});

// Adding event listener to filter products.
document.querySelector("#filter").addEventListener("change", (event) => {
  if (event.target.value === "All") {
    productsContainer.innerHTML = ""; // Clear previous products
    renderProducts(dataArray);
  } else {
    productsContainer.innerHTML = ""; // Clear previous products
    renderProducts(
      dataArray.filter((product) => product.category == event.target.value)
    );
  }
});

// Rendering the product initially.
function renderProducts(data) {
  shimmerState(true); // Removing shimmers after rendering initial set of

  data.forEach((data) => {
    const card = document.createElement("section");
    card.className = "card";

    // Image
    const image = document.createElement("img");
    image.className = "card-img";
    image.src = data.img;
    card.appendChild(image);

    // Product Name
    const h1 = document.createElement("h1");
    h1.classList.add("brand-name");
    h1.innerText = `${data.brand}`;
    card.appendChild(h1);

    // Product Details
    const details = document.createElement("small");
    details.classList.add("details");
    details.innerText = data.details;
    card.appendChild(details);

    // Price and Category container
    const priceCategoryContainer = document.createElement("div");
    priceCategoryContainer.classList.add("price-category-container");

    // Product Category
    const category = document.createElement("span");
    category.classList.add("category");
    category.innerText = data.category.replace("_", " ");
    priceCategoryContainer.appendChild(category);

    // Product Price
    const price = document.createElement("span");
    price.classList.add("price");
    price.innerHTML = `₹${data.price}`;
    priceCategoryContainer.appendChild(price);

    card.appendChild(priceCategoryContainer);

    // Button Container
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    // Buy Now Button
    const buyNowButton = document.createElement("button");
    buyNowButton.classList.add("buy-now-btn");
    buyNowButton.innerText = `Buy Now`;
    buttonContainer.appendChild(buyNowButton);

    // Add To Cart Button
    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("add-to-cart-btn");
    addToCartButton.innerText = `Add To Cart`;
    addToCartButton.id = data.id;
    buttonContainer.appendChild(addToCartButton);

    // Adding event listener on button to Add Products into Carts.
    addToCartButton.addEventListener("click", (event) => {
      if (isInCart(Number(data.id))) {
        alert(`Product Already in Cart`);
      } else {
        data.quantity = 1;
        cart.push(data);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`Product has been added in your cart.`);
      }
    });
    card.appendChild(buttonContainer);

    productsContainer.appendChild(card); //Appending card into the product container.
  });
}

// Utility function to check if product is alredy in cart or not.
function isInCart(id) {
  for (const cartProduct of cart) {
    if (cartProduct.id === id) return true;
  }
  return false;
}
