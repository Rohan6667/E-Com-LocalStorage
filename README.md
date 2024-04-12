# 🌐E-Commerce website using Local Storage🏪

<details>
  <summary><h2>📑The Initial Guidelines for the project📚</h2></summary>

### Here are the key tasks that need to be completed in this project:

```txt
 ✅ Check if the API call was made.
 ✅ Check if the filter is working.
 ✅ Students can loop through the data and append it in the JavaScrip DOM.
 ✅ Add a product to the cart and check the alert.
 ✅ Add the same product to the cart and check the alert.
 ✅ Go To the cart page and check if able to show on DOM & the total price is working fine.
 ✅ Check the quantity part. See if the total gets updated when the quantity changes.
 ✅ Check the delete product part.
```

### Problem Statement:

- In this application, we have 2 different pages:
  1. index.html(Home Page)
  2. cart.html(Cart Page)

#### index.html(Home Page):

- First, make an API request with fetch in this API end-point:-
  `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`.
- If you successfully do that you will get some e-commerce product data(Array of Objects).
- In the template, there is a div with an id:- `product-container`.
- You have to loop over the data and create small cards based on the data and append them to the above-mentioned div.
- Show 4 cards per row with a display grid.

![image.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-11-03/screencapture-192-168-1-2-8080-2022-11-03-16_21_05_236071.png)

- Here we also have a select tag with an id:- `filter`.
- Using this select tag you should be able to filter the products with their category.
- Use array.filter() method to filter the products by their category.
- Each Product card should have a button with the text: `Add To Cart`.
- When clicked on this button product data should be added to local storage with a key `cart`.
- The user should not be able to add the same product to the cart multiple times.
- If adding to cart is successful show an alert with the text: `Product Added To Cart` else show an alert with the text: `Product Already in Cart`.

#### cart.html(Cart Page):

- On this page, all the data will come from the localstorage with the key `cart`.
- Loop over the localstorage data and show them in smaller cards inside and div with id:- `cart-container` (Given in the template).
- Now each of the cards also has a span tag where you can see the quantity of the product. By default, the quantity should be 1.
- there are also two buttons and by using them you can increment/decrement the quantity.
- Each card should also have a button with the text `Remove`. Clicking on that this particular cart should be deleted.
- Please follow this structure for the cards:

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
- In the template, we also have a span tag with id:- `cart-total`.
- Here you have to show the total value of the cart.
- Make sure whenever the quantity gets modified the total price is updated. (Total is = sum of (quantity \* price) of all products in cart).
- Please take a look at the below image for a better understanding:

  ![image.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-11-03/Screenshot%202022-11-03%20at%204.23.03%20PM_126954.png)

</details>

## Description📃

It is a simple **E-Commerce** website developed using `HTML`, `CSS` and `JavaScript`. This website allows users to add products to a cart and see the cost of all products.

## Features🤩

- User can **sort** and **filter**product by its categories.
- User can **add** products in the **cart**.
- User can see **loader** is loading on the page while **API** is fetching products.
- If any **error** occurs while getting a response from the server then an **alert** will pop up showing the error **message**.
- Whenever a new product is **added** or **removed** from the cart it will **update** the **UI** accordingly.
- There will be a `Cart` button which when clicked will redirect the user to the cart page where the user can **view** all the **products** in the **cart**.
- The cart **total amount** will be updated whenever a new item is **added** or **removed** from the cart.

<details align="center">
<summary><b>⚠️Important Note & Warning⚠️</b></summary>

<i>Once you **see** and **use** this project, then please don't forget to clear your **LocalStorage** by clicking on the `button`, it is located at the end of the page **Home** page.

Why it is important? [`Read more on MDN Docs`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
</i>

</details>

## Installation🏗️

1. Clone the repository: `git clone https://github.com/SAD0XER/E-Com-LocalStorage.git`.
2. Navigate to the project directory/folder `E-Com-LocalStorage`.
3. Copy the file path of the `index.html` file and open it in your browser to access the user registration page.

## Technologies Used🧑‍💻

- **Frontend**: `HTML`, `CSS` and `JavaScript`
- **Backend**: `JavaScript`
- **Database**: `LocalStorage` (**P.S**: _We have used localStorage as a database for storing data temporarily._)

## Acknowledgments🤗

**Special thanks to [Arbaz Hussain](https://github.com/Arbaz86) for his help.**
