
// // let currentData = JSON.parse(localStorage.getItem('product Data'));

// // // Render the cart data
// // function renderCart() {
// //   const cartDisplay = document.querySelector('.section-p1');
// //   cartDisplay.innerHTML = ''; // Clear current cart display

// //   for (let i = 0; i < currentData.length; i++) {
// //     let cartData = `
// //       <table>
// //         <tr>
// //           <td class="remove">
// //             <button onclick="removeItem(${i})" class="remove-Btn">
// //               <i class="fa fa-times-circle"></i>
// //             </button>
// //           </td>
// //           <td class="imgAddress">
// //             <img src="${currentData[i].productImage}" alt="" />
// //           </td>
// //           <td class="ID">${currentData[i].productID}</td>
// //           <td class="name">${currentData[i].productName}</td>
// //           <td class="price">$${currentData[i].productPrice}</td>
// //           <td>
// //             <input
// //               type="number"
// //               value="1"
// //               min="1"
// //               class="quantity-input"
// //             />
// //           </td>
// //           <td class="subtotal">$${currentData[i].productPrice}</td>
// //         </tr>
// //       </table>
// //     `;
// //     cartDisplay.innerHTML += cartData;
// //   }
// // }

// // // Function to remove an item from the cart
// // function removeItem(index) {
// //   // Remove the item from the currentData array
// //   currentData.splice(index, 1);

// //   // Update localStorage with the modified data
// //   localStorage.setItem('product Data', JSON.stringify(currentData));

// //   // Re-render the cart to reflect the removal
// //   renderCart();
// // }

// // // Initial render when the page loads
// // renderCart();





// // //  subtotal 
// // const newSubTotal = quantity * unitprice 




// // let cart = JSON.parse(localStorage.getItem('product data'));
// // const cartEntryIndex = cart.findIndex( (entry) => entry[0] ==== cartEntryId)



// // let cart = JSON.parse(localStorage.getItem("products"));
// // const cartEntryIndex = cart.findIndex(
// //     (entry) => entry[0] === cartEntryId
// // );
// // cart[cartEntryIndex][1] = quantity;
// // localStorage.setItem("products", JSON.stringify(cart));
// // // we can similarly capture the unit product rate
// // const unitPrice = parseInt(
// //     cartEntry.querySelector(".price").innerText.substring(1),
// //     10
// // );
// // const newSubtotal = quantity * unitPrice;
// // cartEntry.querySelector(".subtotal").innerText = `$${newSubtotal}`;
// // // Might as Well Update the Grand Total from here and suply it with the parent to
// // // the table row since we are looking to then collect all of the item's subtotals
// // updateGrandtotal(cartEntry.parentElement);
// // }

// // Function to update subtotal when quantity changes
// function updateSubtotal(index) {
//   // Get the quantity input field and current price
//   const quantityInput = document.querySelectorAll('.quantity-input')[index];
//   const price = currentData[index].productPrice;

//   // Calculate the new subtotal
//   const newSubtotal = quantityInput.value * price;

//   // Update the subtotal field in the cart
//   document.querySelectorAll('.subtotal')[index].innerText = `$${newSubtotal.toFixed(2)}`;

//   // Optionally update the total price for all items if needed
//   updateTotalPrice();
// }

// // Optional: Function to update the total price of all items in the cart
// function updateTotalPrice() {
//   let totalPrice = 0;
//   const subtotals = document.querySelectorAll('.subtotal');

//   subtotals.forEach((subtotal) => {
//     totalPrice += parseFloat(subtotal.innerText.replace('$', ''));
//   });

//   // Update the total price in the DOM (you need an element to display the total)
//   document.querySelector('.total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;
// }

// // Initial render when the page loads
// renderCart();

























let currentData = JSON.parse(localStorage.getItem('product Data'));

// Render the cart data
function renderCart() {
  const cartDisplay = document.querySelector('.section-p1');
  cartDisplay.innerHTML = ''; // Clear current cart display

  for (let i = 0; i < currentData.length; i++) {
    let cartData = `
      <table>
        <tr>
          <td class="remove">
            <button onclick="removeItem(${i})" class="remove-Btn">
              <i class="fa fa-times-circle"></i>
            </button>
          </td>
          <td class="imgAddress">
            <img src="${currentData[i].productImage}" alt="" />
          </td>
          <td class="ID">${currentData[i].productID}</td>
          <td class="name">${currentData[i].productName}</td>
          <td class="price">$${currentData[i].productPrice}</td>
          <td>
            <input
              type="number"
              value="1"
              min="1"
              class="quantity-input"
              onchange="updateSubtotal(${i})"
            />
          </td>
          <td class="subtotal">$${currentData[i].productPrice}</td>
        </tr>
      </table>
    `;
    cartDisplay.innerHTML += cartData;
  }
}

// Function to remove an item from the cart
function removeItem(index) {
  // Remove the item from the currentData array
  currentData.splice(index, 1);

  // Update localStorage with the modified data
  localStorage.setItem('product Data', JSON.stringify(currentData));

  // Re-render the cart to reflect the removal
  renderCart();
}

// Function to update subtotal when quantity changes
function updateSubtotal(index) {
  // Get the quantity input field and current price
  const quantityInput = document.querySelectorAll('.quantity-input')[index];
  const price = currentData[index].productPrice;

  // Calculate the new subtotal
  const newSubtotal = quantityInput.value * price;

  // Update the subtotal field in the cart
  document.querySelectorAll('.subtotal')[index].innerText = `$${newSubtotal.toFixed(2)}`;

  // Optionally update the total price for all items if needed
  updateTotalPrice();
}

// Optional: Function to update the total price of all items in the cart
function updateTotalPrice() {
  let totalPrice = 0;
  const subtotals = document.querySelectorAll('.subtotal');

  subtotals.forEach((subtotal) => {
    totalPrice += parseFloat(subtotal.innerText.replace('$', ''));
  });

  // Update the total price in the DOM (you need an element to display the total)
  document.querySelector('.total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;
}

// Initial render when the page loads
renderCart();
