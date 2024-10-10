
let currentData = JSON.parse(localStorage.getItem('product Data'));

for (let i =0 ; i < currentData.length ; i++) {
let cartData =`
              <table>
               <tr>

               <td class="remove">
            
              <button onclick="removeCard( class="remove-Btn)"">
                <i class="fa fa-times-circle"></i>
              </button>
            </td>
            <td class="imgAdress">
              <img src="${currentData[i].productImage}" alt="" />
            </td>
            <td class="ID">${currentData[i].productID}</td>
            <td class="name">${currentData[i].productName}</td>
            <td class="price">$${currentData[i].productPrice}</td>
            <td>
              <input
                type="number"
                value="$"
                min="1"
                class="quantity-input"
              />
            </td>
            <td class="subtotal">$78</td>
          </tr>
          </table>
`;
          const cartDisplay = document.querySelector('.section-p1')
          cartDisplay.innerHTML+=cartData;

}

// remove button 


// const removeCard = document.getElementsByClassName('remove-Btn');
//  function remove () {
//     removeCard.removeEventListner('click', removeCard)
//  }

// document.getElementsByClassName ('remove-Btn').removeEventListner ('click', ()=> {
//     console.log('clicked')
// })
