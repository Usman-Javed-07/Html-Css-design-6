let currentData = JSON.parse(localStorage.getItem("productData")) || [];

// Render cart items
function renderCart() {
  const cartDisplay = document.querySelector("tbody");
  const subtotalElement = document.querySelector(".sumSubTotals");
  const totalElement = document.querySelector(".grandTotal strong");

  cartDisplay.innerHTML = "";

  let totalSubtotal = 0;

  if (currentData.length === 0) {
    cartDisplay.innerHTML = "<tr><td colspan='7'>Your cart is empty.</td></tr>";
    subtotalElement.innerText = "$0.00";
    totalElement.innerText = "$0.00";
    return;
  }

  currentData.forEach((item, index) => {
    const cartData = `
      <tr>
        <td class="remove">
          <button onclick="removeItem(${index})" class="remove-Btn">
            <i class="fa fa-times-circle"></i>
          </button>
        </td>
        <td class="imgAddress">
          <img src="${item.productImage}" alt="" />
        </td>
        <td class="ID">${item._id}</td>
        <td class="name">${item.productName}</td>
        <td class="price">$${item.productPrice.toFixed(2)}</td>
        <td>
          <input
            type="number"
            value="${item.quantity}"
            min="1"
            class="quantity-input"
            onchange="updateSubtotal(${index})"
          />
        </td>
        <td class="subtotal">$${(item.productPrice * item.quantity).toFixed(
          2
        )}</td>
      </tr>
    `;
    cartDisplay.innerHTML += cartData;

    totalSubtotal += item.productPrice * item.quantity; // Update total
  });

  subtotalElement.innerText = `$${totalSubtotal.toFixed(2)}`;
  let shippingCost = 0;
  let grandTotal = totalSubtotal + shippingCost;
  totalElement.innerText = `$${grandTotal.toFixed(2)}`;
}

// Remove item from cart
function removeItem(index) {
  currentData.splice(index, 1);
  localStorage.setItem("productData", JSON.stringify(currentData));
  renderCart();
}

// Update subtotal when quantity changes
function updateSubtotal(index) {
  const quantityInput = document.querySelectorAll(".quantity-input")[index];
  const price = currentData[index].productPrice;
  const newSubtotal = quantityInput.value * price;

  currentData[index].quantity = parseInt(quantityInput.value);
  document.querySelectorAll(".subtotal")[
    index
  ].innerText = `$${newSubtotal.toFixed(2)}`;
  localStorage.setItem("productData", JSON.stringify(currentData));
  updateTotalPrice();
}

// Update total price
function updateTotalPrice() {
  let totalSubtotal = 0;
  const subtotals = document.querySelectorAll(".subtotal");

  subtotals.forEach((subtotal) => {
    totalSubtotal += parseFloat(subtotal.innerText.replace("$", ""));
  });

  const subtotalElement = document.querySelector(".sumSubTotals");
  subtotalElement.innerText = `$${totalSubtotal.toFixed(2)}`;
  let shippingCost = 0;
  let grandTotal = totalSubtotal + shippingCost;

  const totalElement = document.querySelector(".grandTotal strong");
  totalElement.innerText = `$${grandTotal.toFixed(2)}`;
}

window.onload = renderCart;

// coupon functionality

let couponDiscount = 0;

function applyCouponCode() {
  const couponInput = document.querySelector("#couponCodeInput").value.trim();
  const couponMessage = document.querySelector("#coupon h4");

  if (couponInput === "usman123") {
    couponDiscount = 30;
    couponMessage.style.color = "green";
    couponMessage.textContent = "Coupon applied successfully! $30 discount.";
    couponMessage.style.display = "block";
    setTimeout(() => {
      couponMessage.style.display = "none";
    }, 3000);
  } else {
    couponDiscount = 0;
    couponMessage.style.color = "red";
    couponMessage.textContent = "Invalid Code";
    couponMessage.style.display = "block";
  }

  updateTotalPrice();
}

//
function updateTotalPrice() {
  let totalSubtotal = 0;
  const subtotals = document.querySelectorAll(".subtotal");

  subtotals.forEach((subtotal) => {
    totalSubtotal += parseFloat(subtotal.innerText.replace("$", ""));
  });

  const subtotalElement = document.querySelector(".sumSubTotals");
  subtotalElement.innerText = `$${totalSubtotal.toFixed(2)}`;

  let shippingCost = 0;
  let grandTotal = totalSubtotal + shippingCost - couponDiscount;

  const totalElement = document.querySelector(".grandTotal strong");
  totalElement.innerText = `$${grandTotal.toFixed(2)}`;
}

function renderCart() {
  const cartDisplay = document.querySelector("tbody");
  const subtotalElement = document.querySelector(".sumSubTotals");
  const totalElement = document.querySelector(".grandTotal strong");

  cartDisplay.innerHTML = "";

  let totalSubtotal = 0;

  if (currentData.length === 0) {
    cartDisplay.innerHTML = "<tr><td colspan='7'>Your cart is empty.</td></tr>";
    subtotalElement.innerText = "$0.00";
    totalElement.innerText = "$0.00";
    return;
  }

  currentData.forEach((item, index) => {
    const cartData = `
      <tr>
        <td class="remove">
          <button onclick="removeItem(${index})" class="remove-Btn">
            <i class="fa fa-times-circle"></i>
          </button>
        </td>
        <td class="imgAddress">
          <img src="${item.productImage}" alt="" />
        </td>
        <td class="ID">${item._id}</td>
        <td class="name">${item.productName}</td>
        <td class="price">$${item.productPrice.toFixed(2)}</td>
        <td>
          <input
            type="number"
            value="${item.quantity}"
            min="1"
            class="quantity-input"
            onchange="updateSubtotal(${index})"
          />
        </td>
        <td class="subtotal">$${(item.productPrice * item.quantity).toFixed(
          2
        )}</td>
      </tr>
    `;
    cartDisplay.innerHTML += cartData;

    totalSubtotal += item.productPrice * item.quantity;
  });

  subtotalElement.innerText = `$${totalSubtotal.toFixed(2)}`;
  updateTotalPrice();
}
