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

function removeItem(index) {
  currentData.splice(index, 1);
  localStorage.setItem('product Data', JSON.stringify(currentData));
  renderCart();
}
function updateSubtotal(index) {
  const quantityInput = document.querySelectorAll('.quantity-input')[index];
  const price = currentData[index].productPrice;
  const newSubtotal = quantityInput.value * price;
  document.querySelectorAll('.subtotal')[index].innerText = `$${newSubtotal.toFixed(2)}`;

  updateTotalPrice();
}

function updateTotalPrice() {
  let totalPrice = 0;
  const subtotals = document.querySelectorAll('.subtotal');

  subtotals.forEach((subtotal) => {
    totalPrice += parseFloat(subtotal.innerText.replace('$', ''));
  });


  document.querySelector('.total-price').innerText = `Total: $${totalPrice.toFixed(2)}`;
}

renderCart();

function renderCart() {
  const cartDisplay = document.querySelector('tbody'); 
  const subtotalElement = document.querySelector('.sumSubTotals');
  const totalElement = document.querySelector('.grandTotal strong');
  cartDisplay.innerHTML = ''; 
  
  let totalSubtotal = 0; 

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

    totalSubtotal += currentData[i].productPrice;
  }

  subtotalElement.innerText = `$${totalSubtotal.toFixed(2)}`;

  let shippingCost = 0; 
  let grandTotal = totalSubtotal + shippingCost;
  totalElement.innerText = `$${grandTotal.toFixed(2)}`;
}

function updateSubtotal(index) {
  const quantityInput = document.querySelectorAll('.quantity-input')[index];
  const price = currentData[index].productPrice;
  const newSubtotal = quantityInput.value * price;

  document.querySelectorAll('.subtotal')[index].innerText = `$${newSubtotal.toFixed(2)}`;

  updateTotalPrice();
}
function updateTotalPrice() {
  let totalSubtotal = 0;
  const subtotals = document.querySelectorAll('.subtotal');


  subtotals.forEach((subtotal) => {
    totalSubtotal += parseFloat(subtotal.innerText.replace('$', ''));
  });

  const subtotalElement = document.querySelector('.sumSubTotals');
  subtotalElement.innerText = `$${totalSubtotal.toFixed(2)}`;
  let shippingCost = 0; 
  let grandTotal = totalSubtotal + shippingCost;

  const totalElement = document.querySelector('.grandTotal strong');
  totalElement.innerText = `$${grandTotal.toFixed(2)}`;
}

renderCart();

function applyCoupon() {
  const couponInput = document.querySelector('#coupon input');
  const couponCode = couponInput.value.trim();
  const validCoupon = 'usman123'; 
  const discountRate = 0.20; 

  const subtotalElement = document.querySelector('.sumSubTotals');
  const totalElement = document.querySelector('.grandTotal strong');
  const errorElement = document.querySelector('#coupon h4');

  let subtotal = parseFloat(subtotalElement.innerText.replace('$', ''));
  if (couponCode === validCoupon) {

    let discountAmount = subtotal * discountRate;
    let newTotal = subtotal - discountAmount;
    totalElement.innerText = `$${newTotal.toFixed(2)}`;
    errorElement.style.display = 'none';

    alert(`Coupon applied! You saved $${discountAmount.toFixed(2)}`);
  } else {
    errorElement.innerText = 'Invalid Code';
    errorElement.style.display = 'block'; 
  }
}
document.querySelector('#coupon button').addEventListener('click', applyCoupon);


// 




