
console.log (' local storage data' , localStorage.getItem('product Data'));


let cartData = `
          <!-- <tr>
            <td class="remove">
              <button class="remove-Btn">
                <i class="fa fa-times-circle"></i>
              </button>
            </td>
            <td class="imgAdress">
             
            </td>
            <td class="ID">${}</td>
            <td class="name">${currProd.prodName}</td>
            <td class="price">$${currProd.prodPrice}</td>
            <td>
              <input
                type="number"
                value="${quantity}"
                min="1"
                class="quantity-input"
              />
            </td>
            <td class="subtotal">$${subtotal}</td>
          </tr> -->

          `
          const cartDisplay = document.querySelector('.section-p1')
          cartDisplay.innerHTML+=cartData;