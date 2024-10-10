
let currentData = JSON.parse(localStorage.getItem('product Data'));


let cartData = `

 <tr>
 <td class="remove">
              <button class="remove-Btn">
                <i class="fa fa-times-circle"></i>
              </button>
            </td>
            <td class="imgAdress">
              <img src="${currentData[4].productImage}" alt="" />
            </td>
            <td class="ID">${currentData[2].productID}</td>
            <td class="name">${currentData[2].productName}</td>
            <td class="price">$${currentData[2].productPrice}</td>
            <td>
              <input
                type="number"
                value="$"
                min="1"
                class="quantity-input"
              />
            </td>
            <td class="subtotal">$</td>
          </tr>

`;
          const cartDisplay = document.querySelector('.section-p1')
          cartDisplay.innerHTML+=cartData;




