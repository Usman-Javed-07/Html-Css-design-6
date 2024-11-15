# Html-Css-design-6

<!-- previous code of script.js before backend functionality -->

// add to card
// const productItems = [
// {
// productID : 19,
// productName : 'carton shirt',
// productImage : 'images/card1.jpg',
// productBrand : 'Adidas',
// productPrice : 78,
// // categories : ['men' , 'shirts', 'featured'],
// },
// {
// productID : 37,
// productName : 'Havain shirt',
// productImage : 'images/card2.jpg',
// productBrand : 'Chanel',
// productPrice : 111,
// // categories : ['men' , 'shirts', 'featured'],
// },
// {
// productID : 46,
// productName : 'Printed shirt',
// productImage : 'images/card3.jpg',
// productBrand : 'Prada',
// productPrice : 265,
// // categories : ['men' , 'shirts', 'featured'],
// },
// {
// productID : 55,
// productName : 'Emo-Boy Shirt',
// productImage : 'images/card4.jpg',
// productBrand : 'GAP',
// productPrice : 99,
// // categories : ['men' , 'shirts', 'featured'],
// },
// {
// productID : 307,
// productName : 'off white shirt',
// productImage : 'images/card5.jpg',
// productBrand : 'H3h3',
// productPrice : 76,
// // categories : ['men' , 'shirts', 'featured'],
// },
// {
// productID : 110,
// productName : 'green Cargo Pants',
// productImage : 'images/card6.jpg',
// productBrand : 'Adidas',
// productPrice : 290,
// // categories : ['men' , 'pants', 'featured'],
// },
// {
// productID : 115,
// productName : ' blue Cargo Pants',
// productImage : 'images/card7.jpg',
// productBrand : 'H3h3',
// productPrice : 210,
// // categories : ['men' , 'pants', 'featured'],
// },
// {
// productID : 130,
// productName : 'Brown Cargo Pants',
// productImage : 'images/card8.jpg',
// productBrand : 'Adidas',
// productPrice : 230,
// // categories : ['men' , 'pants', 'featured'],
// },
// {
// productID : 64,
// productName : 'winter shirts',
// productImage : 'images/f6.jpg',
// productBrand : 'None',
// productPrice : 8,
// // categories : ['men' , 'shirts', 'featured'],
// },
// {
// productID : 73,
// productName : 'Pants',
// productImage : 'images/f7.jpg',
// productBrand : 'H3h3',
// productPrice : 875,
// // categories : ['women' , 'pants', 'featured'],
// },
// {
// productID : 82,
// productName : 'ladies shirts',
// productImage : 'images/f8.jpg',
// productBrand : 'H3h3',
// productPrice : 82,
// // categories : ['women' , 'shirts', 'featured'],
// },
// ]~

// for (let i = 0; i < productItems.length; i++) {
// let k = `

// <div class="main-card">
// <div class="card-image">
// <img src=${productItems[i].productImage} alt="card image" />
// </div>
// <div class="card-data">
// <p>${productItems[i].productBrand}</p>
//             <h3> ${productItems[i].productName}</h3>
//             <div class="star">
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//             </div>
//             <h3 class="price">$ ${productItems[i].productPrice}</h3>
//             <p class="product-id">Product iD :- ${productItems[i].productID}</p>
//             <div class="card-shopping">
//               <button onclick="cardData(${productItems[i].productID})">
// <i class="fa-solid fa-cart-shopping add-card"></i>
// </button>
// </div>
// </div>
// </div>
// `;
// const cardSection = document.querySelector(".card-section");
// cardSection.innerHTML += k;
// }

// let cartitems = [];

// const cardData = (productid) => {
// let result = productItems.find((obj) => obj.productID === productid);
// cartitems.push(result);
// console.log(cartitems);

// localStorage.setItem("product Data", JSON.stringify(cartitems));
// };
// console.log(" local storage data", localStorage.getItem("product Data"));

//

//
// now adding data to cart from backend
// Array to store products fetched from backend
// let productItems = [];
// let cartItems = [];

// // Fetch product data from the backend
// async function fetchProducts() {
// try {
// const response = await fetch("/api/products");
// productItems = await response.json(); // Store the fetched products
// displayProducts(); // Render products on the page
// } catch (error) {
// console.error("Error fetching products:", error);
// }
// }

// // Display products on the page
// function displayProducts() {
// const cardSection = document.querySelector(".card-section");
// cardSection.innerHTML = ""; // Clear existing content

// for (let i = 0; i < productItems.length; i++) {
// let productHTML = `//             <div class="main-card">
//                 <div class="card-image">
//                     <img src="${productItems[i].productImage}" alt="card image" />
//                 </div>
//                 <div class="card-data">
//                     <p>${productItems[i].productBrand}</p>
//                     <h3>${productItems[i].productName}</h3>
//                     <div class="star">
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                     </div>
//                     <h3 class="price">$${productItems[i].productPrice}</h3>
//                     <p class="product-id">Product ID: ${productItems[i]._id}</p>
//                     <div class="card-shopping">
//                         <button onclick="addToCart('${productItems[i]._id}')">
//                             <i class="fa-solid fa-cart-shopping add-card"></i>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//        `;
// cardSection.innerHTML += productHTML;
// }
// }

// // Add item to cart and save to localStorage
// function addToCart(productId) {
// const selectedProduct = productItems.find(
// (product) => product.\_id === productId
// );

// if (selectedProduct) {
// const existingItem = cartItems.find((item) => item.\_id === productId);

// if (existingItem) {
// existingItem.quantity += 1; // Increase quantity if item exists
// } else {
// selectedProduct.quantity = 1; // Set initial quantity
// cartItems.push(selectedProduct); // Add product to cart
// }

// // Save the updated cart to localStorage
// localStorage.setItem("productData", JSON.stringify(cartItems));
// console.log("Cart items:", cartItems);
// }
// }

// // Fetch and display products when the page loads
// window.onload = fetchProducts;

//

<!-- end of script file -->

<!-- previous code of cart.js -->

// let currentData = JSON.parse(localStorage.getItem("product Data"));

// function renderCart() {
// const cartDisplay = document.querySelector(".section-p1");
// cartDisplay.innerHTML = "";

// for (let i = 0; i < currentData.length; i++) {
// let cartData = `//       <table>
//         <tr>
//           <td class="remove">
//             <button onclick="removeItem(${i})" class="remove-Btn">
//               <i class="fa fa-times-circle"></i>
//             </button>
//           </td>
//           <td class="imgAddress">
//             <img src="${currentData[i].productImage}" alt="" />
//           </td>
//           <td class="ID">${currentData[i].productID}</td>
//           <td class="name">${currentData[i].productName}</td>
//           <td class="price">$${currentData[i].productPrice}</td>
//           <td>
//             <input
//               type="number"
//               value="1"
//               min="1"
//               class="quantity-input"
//               onchange="updateSubtotal(${i})"
//             />
//           </td>
//           <td class="subtotal">$${currentData[i].productPrice}</td>
//         </tr>
//       </table>
//    `;
// cartDisplay.innerHTML += cartData;
// }
// }

// function removeItem(index) {
// currentData.splice(index, 1);
// localStorage.setItem("product Data", JSON.stringify(currentData));
// renderCart();
// }
// function updateSubtotal(index) {
// const quantityInput = document.querySelectorAll(".quantity-input")[index];
// const price = currentData[index].productPrice;
// const newSubtotal = quantityInput.value \* price;
// document.querySelectorAll(".subtotal")[
// index
// ].innerText = `$${newSubtotal.toFixed(2)}`;

// updateTotalPrice();
// }

// function updateTotalPrice() {
// let totalPrice = 0;
// const subtotals = document.querySelectorAll(".subtotal");

// subtotals.forEach((subtotal) => {
// totalPrice += parseFloat(subtotal.innerText.replace("$", ""));
// });

// document.querySelector(
// ".total-price"
// ).innerText = `Total: $${totalPrice.toFixed(2)}`;
// }

// renderCart();

// function renderCart() {
// const cartDisplay = document.querySelector("tbody");
// const subtotalElement = document.querySelector(".sumSubTotals");
// const totalElement = document.querySelector(".grandTotal strong");
// cartDisplay.innerHTML = "";

// let totalSubtotal = 0;

// for (let i = 0; i < currentData.length; i++) {
// let cartData = `//       <tr>
//         <td class="remove">
//           <button onclick="removeItem(${i})" class="remove-Btn">
//             <i class="fa fa-times-circle"></i>
//           </button>
//         </td>
//         <td class="imgAddress">
//           <img src="${currentData[i].productImage}" alt="" />
//         </td>
//         <td class="ID">${currentData[i].productID}</td>
//         <td class="name">${currentData[i].productName}</td>
//         <td class="price">$${currentData[i].productPrice.toFixed(2)}</td>
//         <td>
//           <input
//             type="number"
//             value="1"
//             min="1"
//             class="quantity-input"
//             onchange="updateSubtotal(${i})"
//           />
//         </td>
//         <td class="subtotal">$${currentData[i].productPrice.toFixed(2)}</td>
//       </tr>
//    `;
// cartDisplay.innerHTML += cartData;

// totalSubtotal += currentData[i].productPrice;
// }

// subtotalElement.innerText = `$${totalSubtotal.toFixed(2)}`;

// let shippingCost = 0;
// let grandTotal = totalSubtotal + shippingCost;
// totalElement.innerText = `$${grandTotal.toFixed(2)}`;
// }

// function updateSubtotal(index) {
// const quantityInput = document.querySelectorAll(".quantity-input")[index];
// const price = currentData[index].productPrice;
// const newSubtotal = quantityInput.value \* price;

// document.querySelectorAll(".subtotal")[
// index
// ].innerText = `$${newSubtotal.toFixed(2)}`;

// updateTotalPrice();
// }
// function updateTotalPrice() {
// let totalSubtotal = 0;
// const subtotals = document.querySelectorAll(".subtotal");

// subtotals.forEach((subtotal) => {
// totalSubtotal += parseFloat(subtotal.innerText.replace("$", ""));
// });

// const subtotalElement = document.querySelector(".sumSubTotals");
// subtotalElement.innerText = `$${totalSubtotal.toFixed(2)}`;
// let shippingCost = 0;
// let grandTotal = totalSubtotal + shippingCost;

// const totalElement = document.querySelector(".grandTotal strong");
// totalElement.innerText = `$${grandTotal.toFixed(2)}`;
// }

// renderCart();

// function applyCoupon() {
// const couponInput = document.querySelector("#coupon input");
// const couponCode = couponInput.value.trim();
// const validCoupon = "usman123";
// const discountRate = 0.2;

// const subtotalElement = document.querySelector(".sumSubTotals");
// const totalElement = document.querySelector(".grandTotal strong");
// const errorElement = document.querySelector("#coupon h4");

// let subtotal = parseFloat(subtotalElement.innerText.replace("$", ""));
//   if (couponCode === validCoupon) {
//     let discountAmount = subtotal * discountRate;
//     let newTotal = subtotal - discountAmount;
//     totalElement.innerText = `$${newTotal.toFixed(2)}`;
// errorElement.style.display = "none";

// alert(`Coupon applied! You saved $${discountAmount.toFixed(2)}`);
// } else {
// errorElement.innerText = "Invalid Code";
// errorElement.style.display = "block";
// }
// }
// document.querySelector("#coupon button").addEventListener("click", applyCoupon);

// //
