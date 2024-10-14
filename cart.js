

let currentData = JSON.parse(localStorage.getItem('product Data'));


function renderCart() {
  const cartDisplay = document.querySelector('.section-p1');
  cartDisplay.innerHTML = ''; 

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



// // 



// Function to render the cart and calculate totals
function renderCart() {
  const cartDisplay = document.querySelector('tbody'); // tbody for table structure
  const subtotalElement = document.querySelector('.sumSubTotals');
  const totalElement = document.querySelector('.grandTotal strong');
  cartDisplay.innerHTML = ''; 
  
  let totalSubtotal = 0; // Track the subtotal for all items

  for (let i = 0; i < currentData.length; i++) {
    let cartData = `
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
        <td class="price">$${currentData[i].productPrice.toFixed(2)}</td>
        <td>
          <input
            type="number"
            value="1"
            min="1"
            class="quantity-input"
            onchange="updateSubtotal(${i})"
          />
        </td>
        <td class="subtotal">$${currentData[i].productPrice.toFixed(2)}</td>
      </tr>
    `;
    cartDisplay.innerHTML += cartData;

    // Add to the subtotal for all items
    totalSubtotal += currentData[i].productPrice;
  }

  // Update subtotal in the cart totals section
  subtotalElement.innerText = `$${totalSubtotal.toFixed(2)}`;

  // Update the total with shipping (assuming shipping is free)
  let shippingCost = 0; // You can change this if you want to add shipping fees
  let grandTotal = totalSubtotal + shippingCost;
  totalElement.innerText = `$${grandTotal.toFixed(2)}`;
}

// Function to update subtotal when quantity changes
function updateSubtotal(index) {
  const quantityInput = document.querySelectorAll('.quantity-input')[index];
  const price = currentData[index].productPrice;
  const newSubtotal = quantityInput.value * price;

  // Update the subtotal in the table row
  document.querySelectorAll('.subtotal')[index].innerText = `$${newSubtotal.toFixed(2)}`;

  // Update cart totals
  updateTotalPrice();
}

// Function to update the total price in the cart totals section
function updateTotalPrice() {
  let totalSubtotal = 0;
  const subtotals = document.querySelectorAll('.subtotal');

  // Loop through each subtotal and add it to the totalSubtotal
  subtotals.forEach((subtotal) => {
    totalSubtotal += parseFloat(subtotal.innerText.replace('$', ''));
  });

  // Update subtotal in the cart totals section
  const subtotalElement = document.querySelector('.sumSubTotals');
  subtotalElement.innerText = `$${totalSubtotal.toFixed(2)}`;

  // Add shipping cost if needed
  let shippingCost = 0; // Adjust as needed
  let grandTotal = totalSubtotal + shippingCost;

  // Update the grand total
  const totalElement = document.querySelector('.grandTotal strong');
  totalElement.innerText = `$${grandTotal.toFixed(2)}`;
}

// Call renderCart to initialize the cart
renderCart();




// Function to apply the coupon
function applyCoupon() {
  const couponInput = document.querySelector('#coupon input');
  const couponCode = couponInput.value.trim();
  const validCoupon = 'usman123'; // Valid coupon code
  const discountRate = 0.20; // 20% discount

  const subtotalElement = document.querySelector('.sumSubTotals');
  const totalElement = document.querySelector('.grandTotal strong');
  const errorElement = document.querySelector('#coupon h4');

  // Get current subtotal
  let subtotal = parseFloat(subtotalElement.innerText.replace('$', ''));

  // Check if the entered coupon code is valid
  if (couponCode === validCoupon) {
    // Apply discount
    let discountAmount = subtotal * discountRate;
    let newTotal = subtotal - discountAmount;

    // Update the grand total after applying the discount
    totalElement.innerText = `$${newTotal.toFixed(2)}`;
    
    // Hide any previous error message
    errorElement.style.display = 'none';

    // Optional: Show a success message (you can style it as needed)
    alert(`Coupon applied! You saved $${discountAmount.toFixed(2)}`);
  } else {
    // Show invalid coupon message
    errorElement.innerText = 'Invalid Code';
    errorElement.style.display = 'block'; // Make sure the error message is shown
  }
}

// Attach event listener to the "Apply" button in the coupon section
document.querySelector('#coupon button').addEventListener('click', applyCoupon);







// 


// 


let currentPage = 1;
let itemsPerPage = 4; // Default value

// Function to display cart items based on current page and items per page
function displayCartItems() {
  const cartContainer = document.getElementById('cartItems');
  cartContainer.innerHTML = ''; // Clear previous items

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = productItems.slice(startIndex, endIndex);

  // Display the selected items
  itemsToDisplay.forEach((item) => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `
      <p>${item.productName}</p>
      <p>Price: $${item.productPrice}</p>
    `;
    cartContainer.appendChild(itemElement);
  });

  // Update pagination info
  updatePaginationInfo();
}

// Function to update pagination controls
function updatePaginationInfo() {
  const totalItems = productItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  document.getElementById('pageInfo').textContent = `Page ${currentPage} of ${totalPages}`;

  document.getElementById('prevPage').disabled = currentPage === 1;
  document.getElementById('nextPage').disabled = currentPage === totalPages;
}

// Event listener for items per page dropdown
document.getElementById('page-item').addEventListener('change', function () {
  itemsPerPage = parseInt(this.value); // Update items per page based on selection
  currentPage = 1; // Reset to the first page
  displayCartItems(); // Refresh cart items
});

// Event listeners for pagination buttons
document.getElementById('prevPage').addEventListener('click', function () {
  if (currentPage > 1) {
    currentPage--;
    displayCartItems();
  }
});

document.getElementById('nextPage').addEventListener('click', function () {
  const totalPages = Math.ceil(productItems.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayCartItems();
  }
});

// Initial display of cart items
displayCartItems();











// 
