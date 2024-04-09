let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products";

const productsContainer = document.querySelector("#product-container");

const cart = JSON.parse(localStorage.getItem("cart")) || [];

/* Asnchronous function that fetches data from API. */
async function renderProducts(url) {
  try {
    let response = await fetch(url);
    return await response.json();
    // localStorage.setItem("data", JSON.stringify(data.data)); // Storing data on local storage.
  } catch (error) {
    alert(error);
  }
}

// Rendering the product initially.
renderProducts(url).then((data) => {
  for (let i = 0; i < data.data.length; i++) {
    const card = document.createElement("section");
    card.className = "card";

    // Image
    const image = document.createElement('img');
    image.className = "card-img";
    image.src = data.data[i].img;
    card.appendChild(image);

    // Product Name
    const h2 = document.createElement('h2');
    h2.classList.add('brand-name');
    h2.innerText = `${data.data[i].brand}`;
    card.appendChild(h2);

    // Product Price
    const price = document.createElement('h3');
    price.classList.add('price');
    price.innerHTML = `₹${data.data[i].price}`;
    card.appendChild(price);

    // Product Details
    const details = document.createElement('p');
    details.classList.add('details');
    details.innerText = data.data[i].details;
    card.appendChild(details);

    // Product Category
    const category = document.createElement('h4');
    category.classList.add('category');
    category.innerText = data.data[i].category.replace("_", " ");
    card.appendChild(category);

    // Add To Cart Button
    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart-btn');
    addToCartButton.innerText = `Add To Cart`;
    addToCartButton.id = data.data[i].id;

    // Adding event listener on button to Add Products into Carts.
    addToCartButton.addEventListener('click', (event) => {
      if (isInCart(Number(data.data[i].id))) {
        alert(`Product Already in Cart`);
      } else {
        data.data[i].quantity = 1;
        cart.push(data.data[i]);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`Product has been added in your cart.`);;
      }
    });
    card.appendChild(addToCartButton);

    productsContainer.appendChild(card); //Appending card into the product container.
  }
});

// Adding event listener to filter products.
document.querySelector('#filter').addEventListener('change', (event) => {
  if (event.target.value === 'All') {
    productsContainer.innerHTML = ""; // Clear previous products
    renderProducts(url).then(data => renderFilteredProduct(data.data)); // Render all products
  } else {
    productsContainer.innerHTML = ""; // Clear previous products
    renderProducts(url).then(data => {
      const filteredData = data.data.filter(product => product.category === event.target.value); // Filtering based on selected filter value and displaying only those products in UI.
      renderFilteredProduct(filteredData); // Render filtered products
    });
  }
});

// Utility function to showing filtered products in UI.
function renderFilteredProduct(filteredData) {
  for (let i = 0; i < filteredData.length; i++) {
    const card = document.createElement("section");
    card.className = "card";

    // Image
    const image = document.createElement('img');
    image.className = "card-img";
    image.src = filteredData[i].img;
    card.appendChild(image);

    // Product Name
    const h2 = document.createElement('h2');
    h2.classList.add('brand-name');
    h2.innerText = `${filteredData[i].brand}`;
    card.appendChild(h2);

    // Product Price
    const price = document.createElement('h3');
    price.classList.add('price');
    price.innerHTML = `Price : ₹${filteredData[i].price}`;
    card.appendChild(price);

    // Product Details
    const details = document.createElement('p');
    details.classList.add('details');
    details.innerText = filteredData[i].details;
    card.appendChild(details);

    // Product Category
    const category = document.createElement('h4');
    category.classList.add('category');
    category.innerText = filteredData[i].category.replace("_", " ");
    card.appendChild(category);

    // Add To Cart Button
    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('btn', 'add-to-cart-btn')
    addToCartButton.innerText = `Add To Cart`;
    addToCartButton.id = filteredData[i].id;
    card.appendChild(addToCartButton);

    // Adding event listener on button to Add Products into Carts.
    addToCartButton.addEventListener('click', (event) => {
      if (isInCart(Number(filteredData[i].id))) {
        alert(`Product Already in Cart`);
      } else {
        filteredData[i].quantity = 1;
        cart.push(filteredData[i]);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`Product has been added in your cart.`);;
      }
    });
    card.appendChild(addToCartButton);

    productsContainer.appendChild(card); //Appending card into the product container.
  }
}

// Utility function to check if product is alredy in cart or not.
function isInCart(id) {
  for (const cartProduct of cart) {
    if (cartProduct.id === id) return true;
  }
  return false;
}