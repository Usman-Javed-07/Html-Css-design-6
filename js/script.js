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

for (let i = 0 ; i < productItems.length-1; i++) {

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

 