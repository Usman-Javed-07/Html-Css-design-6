const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();
if(pageName === "index.html") {
  document.querySelector (".home").classList.add("activeLink");
}

//  add to card



const productItems = [
  {
        productID : 19,
        productName : 'carton shirt',
        productImage : 'images/card1.jpg',
        productBrand : 'Adidas',
        productPrice : 78,
        // categories : ['men' , 'shirts', 'featured'],
  },
  {
    productID : 37,
    productName : 'Havain shirt',
    productImage : 'images/card2.jpg',
    productBrand : 'Chanel',
    productPrice : 111,
    // categories : ['men' , 'shirts', 'featured'],
},
{
  productID : 46,
  productName : 'Printed shirt',
  productImage : 'images/card3.jpg',
  productBrand : 'Prada',
  productPrice : 265,
  // categories : ['men' , 'shirts', 'featured'],
},
{
  productID : 55,
  productName : 'Emo-Boy Shirt',
  productImage : 'images/card4.jpg',
  productBrand : 'GAP',
  productPrice : 99,
  // categories : ['men' , 'shirts', 'featured'],
},
{
  productID : 307,
  productName : 'off white shirt',
  productImage : 'images/card5.jpg',
  productBrand : 'H3h3',
  productPrice : 76,
  // categories : ['men' , 'shirts', 'featured'],
},
{
  productID : 110,
  productName : 'green Cargo Pants',
  productImage : 'images/card6.jpg',
  productBrand : 'Adidas',
  productPrice : 290,
  // categories : ['men' , 'pants', 'featured'],
},
{
  productID : 115,
  productName : ' blue Cargo Pants',
  productImage : 'images/card7.jpg',
  productBrand : 'H3h3',
  productPrice : 210,
  // categories : ['men' , 'pants', 'featured'],
},
{
  productID : 130,
  productName : 'Brown Cargo Pants',
  productImage : 'images/card8.jpg',
  productBrand : 'Adidas',
  productPrice : 230,
  // categories : ['men' , 'pants', 'featured'],
},
{
  productID : 64,
  productName : 'winter shirts',
  productImage : 'images/f6.jpg',
  productBrand : 'None',
  productPrice : 8,
  // categories : ['men' , 'shirts', 'featured'],
},
{
  productID : 73,
  productName : 'Pants',
  productImage : 'images/f7.jpg',
  productBrand : 'H3h3',
  productPrice : 875,
  // categories : ['women' , 'pants', 'featured'],
},
{
  productID : 82,
  productName : 'ladies shirts',
  productImage : 'images/f8.jpg',
  productBrand : 'H3h3',
  productPrice : 82,
  // categories : ['women' , 'shirts', 'featured'],
},
]

for (let i = 0 ; i < productItems.length; i++) {

  let k=`
 
        <div class="main-card">
          <div class="card-image">
           <img src=${productItems[i].productImage} alt="card image" />
          </div>
          <div class="card-data">
            <p>${productItems[i].productBrand}</p>
            <h3> ${productItems[i].productName}</h3>
            <div class="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h3 class="price">$ ${productItems[i].productPrice}</h3>
            <p class="product-id">Product iD :- ${productItems[i].productID}</p>
            <div class="card-shopping">
              <button onclick="cardData(${productItems[i].productID})">
                <i class="fa-solid fa-cart-shopping add-card"></i>
              </button>
            </div>
          </div>
        </div>
  `
  const cardSection=document.querySelector(".card-section");
  cardSection.innerHTML+=k;
}

let cartitems = [];

 const cardData = (productid ) => {
  let result = productItems.find(obj => obj.productID ===  productid);
  cartitems.push(result)
  console.log(cartitems);

  localStorage.setItem('product Data', JSON.stringify(cartitems));

 }
 console.log (' local storage data' , localStorage.getItem('product Data'))



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






