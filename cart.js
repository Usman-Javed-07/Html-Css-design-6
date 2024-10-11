
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

// Initial render when the page loads
renderCart();


