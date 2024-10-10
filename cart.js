
let currentData = JSON.parse(localStorage.getItem('product Data'));


let cartData =`
 <tbody> 
               <tr>

               <td class="remove">
            
              <button class="remove-Btn">
                <i class="fa fa-times-circle"></i>
              </button>
            </td>
            <td class="imgAdress">
              <img src="${currentData[1].productImage}" alt="" />
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
            <td class="subtotal">$78</td>
          </tr>
           </tbody> 

`;
//           const cartDisplay = document.querySelector('.section-p1')
//           cartDisplay.innerHTML+=cartData;



//          let cardshow = `
                     
         
         
//          `

//          <tbody> 
//   <tr>
//     <td><a href="#"> <i class="far fa-times-circle"> </i></a></td>
//     <td> <img src="images/card1.jpg" alt=""></td>
//     <td> t shirts</td>
//     <td>$122</td>
//     <td> <input type="number" value="1"></td>
//     <td>$43</td>
//   </tr>
// </tbody>