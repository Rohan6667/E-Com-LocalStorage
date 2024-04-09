# E-Commerce website using Local Storage

### Here are the key tasks that needs to be completed in this project:

```
 ✅ Check if the api call made.
 ✅ Check if the filter is working.
 ✅ Student is able to loop through the data and append in the JavaScrip DOM.
 ✅ Add a product to cart and check alert.
 ✅ Add same product to cart and check alert.
 ✅ Go To cart page and check if able to show on DOM & the total price is working fine.
 ✅ Check the quantity part. See if the total gets updated when the quantity changes.
 ✅ Check the delete product part.
```

### Problem Statement:

- In this application, we have 2 different pages:
  1. index.html(Home Page)
  2. cart.html(Cart Page)

#### index.html(Home Page):

- At first make an API request with fetch in this API end-point:-
  `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`.
- If you successfully do that you will get some e-commerce product data(Array of Objects).
- In the template, there is a div with an id:- `product-container`.
- You have to loop over the data and create small cards based on the data and append them to the above-mentioned div.
- Show 4 cards per row with a display grid.

![image.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-11-03/screencapture-192-168-1-2-8080-2022-11-03-16_21_05_236071.png)

- Here we also have a select tag with an id:- `filter`.
- Using this select tag you should be able to filter the products with their category.
- Use array.filter method to filter the products by their category.
- Each Product card should have a button with the text: `Add To Cart`.
- When clicked on this button that product data should be added to local storage with a key `cart`.
- The user should not be able to add the same product to the cart multiple times.
- If adding to cart is successful show an alert with the text: `Product Added To Cart` else show an alert with the text: `Product Already in Cart`.

#### cart.html(Cart Page):

- In this page all the data will come from the localstorage with key `cart`.
- Loop over the localstorage data and show them in smaller cards inside and div with id:- `cart-container` (Given in the template).
- Now each of the cards also have a span tag where you can see the quantity of the product. By default the quantity should be 1.
- there are also two buttons and using them you can increment/decrement the quantity.
- Each card should also have a button with text `Remove`. Clicking on that this particular cart should be deleted.
- Please follow this structure for the cards:-

```html
<div>
  <img src="image" />
  <h2>Brand</h2>
  <h3>Price</h3>
  <p>Details</p>
  <p>Category</p>
  <button>+</button> -> increment button
  <span>quantity</span>
  <button>-</button> -> decrement button <button>Remove</button> -> Remove
  button
</div>
```

- Please make sure all the buttons have the same text as the given structure.
- In the template we also have a span tag with id:- `cart-total`.
- Here you have to show the total value of the cart.
- Make sure whenever the quantity gets modified the total price is updated. (Total is = sum of (quantity \* price) of all products in cart).
- Please take a look at the below image for better understanding:-

  ![image.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-11-03/Screenshot%202022-11-03%20at%204.23.03%20PM_126954.png)
