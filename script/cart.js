const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.querySelector("#cart-container");

showCart();

// Utility function for showing products added into cart on UI.
function showCart() {
  cartContainer.innerHTML = ""; // Clear the existing container.

  // Loop through the items in the user's shopping cart and create a new list item for each one.
  for (let i = 0; i < cart.length; i++) {
    const card = document.createElement("section");
    card.className = "card";

    // Image
    const image = document.createElement("img");
    image.className = "card-img";
    image.src = cart[i].img;
    card.appendChild(image);

    // Product Name
    const h1 = document.createElement("h1");
    h1.classList.add("brand-name");
    h1.innerText = `${cart[i].brand}`;
    card.appendChild(h1);

    // Product Details
    const details = document.createElement("small");
    details.classList.add("details");
    details.innerText = cart[i].details;
    card.appendChild(details);

    // Price and Category container
    const priceCategoryContainer = document.createElement("div");
    priceCategoryContainer.classList.add("price-category-container");

    // Product Category
    const category = document.createElement("span");
    category.classList.add("category");
    category.innerText = cart[i].category.replace("_", " ");
    priceCategoryContainer.appendChild(category);

    // Product Price
    const price = document.createElement("span");
    price.classList.add("price");
    price.innerHTML = `₹${cart[i].price}`;
    priceCategoryContainer.appendChild(price);

    card.appendChild(priceCategoryContainer);

    // Container for all elements (Increment/Decrement/Remove).
    const btnSection = document.createElement("section");
    btnSection.classList.add("button-section");
    card.appendChild(btnSection);

    // Quantity Section for Increment/Decrement buttons only.
    const quantitySection = document.createElement("span");
    quantitySection.classList.add("quantity-section");

    // Quantity Span
    const quantitySpan = document.createElement("span");
    quantitySpan.classList.add("quantity-span");
    quantitySpan.id = "quantity-span-" + cart[i].id; // Unique ID for each quantity span
    quantitySpan.innerText = cart[i].quantity; // Set initial quantity

    // Decrement Button
    const decrementBtn = document.createElement("button");
    decrementBtn.classList.add("decrement-btn");
    decrementBtn.innerText = "–";

    // Adding event listener on button to decrease the quantity.
    decrementBtn.addEventListener("click", (event) => {
      if (cart[i].quantity > 1) {
        // Check if quantity is greater than 1
        cart[i].quantity--; // Decrease quantity
        document.getElementById("quantity-span-" + cart[i].id).innerText =
          cart[i].quantity; // Update quantity display
        localStorage.setItem("cart", JSON.stringify(cart)); // Update cart in localStorage
        showTotalCount(); // Update total price
      }
    });

    // Increment Button
    const incrementBtn = document.createElement("button");
    incrementBtn.classList.add("increment-btn");
    incrementBtn.innerText = "+";

    // Adding event listener on button to increase the quantity.
    incrementBtn.addEventListener("click", (event) => {
      cart[i].quantity++; // Increase quantity
      document.getElementById("quantity-span-" + cart[i].id).innerText =
        cart[i].quantity; // Update quantity display
      localStorage.setItem("cart", JSON.stringify(cart)); // Update cart in localStorage
      showTotalCount(); // Update total price
    });

    //Remove Icon
    const removeIcon = document.createElement("i");
    removeIcon.classList.add("remove-icon", "fa-solid", "fa-trash-can");

    /* Adding event listener on button to remove product from the cart. */
    removeIcon.addEventListener("click", (event) => {
      cart.splice(i, 1); // Remove the corresponding object from the array.
      localStorage.setItem("cart", JSON.stringify(cart)); // Update the localStorage with the modified cart array.
      showCart(); // Render the cart again to reflect the changes.
      showTotalCount(); // Update total price

      /* Condition to Empty cart when no items left*/
      if (cart.length === 0) {
        localStorage.clear();
        // alert("LocalStorage is Empty.");
      }
    });

    // Appending elements to btnSection
    quantitySection.appendChild(decrementBtn);
    quantitySection.appendChild(quantitySpan);
    quantitySection.appendChild(incrementBtn);
    btnSection.appendChild(quantitySection);
    btnSection.appendChild(removeIcon);
    cartContainer.appendChild(card); // Appending card into the product container.
  }
  showTotalCount(); // Call to ensure total price is displayed initially
}

// Total Cart Price section in cart UI.
function showTotalCount() {
  let totalPrice = 0;
  let cartPriceLabel = document.querySelector("#cart-price"); // Getting the label for price display.
  cartPriceLabel.innerHTML = "";
  cartPriceLabel.innerText = "Your Total Cart Price is: ";

  let cartTotalSpan = document.createElement("span"); // Creating a new span element to hold the total price value.
  cartTotalSpan.classList.add("cart-total");
  cart.forEach((element) => {
    totalPrice += element.price * element.quantity;
  });
  cartTotalSpan.innerText = totalPrice;
  cartPriceLabel.appendChild(cartTotalSpan);
}
