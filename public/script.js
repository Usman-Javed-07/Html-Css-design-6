const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

const pathName = window.location.pathname;
const pageName = pathName.split("/").pop();
if (pageName === "index.html") {
  document.querySelector(".home").classList.add("activeLink");
}

let productItems = [];
let cartItems = JSON.parse(localStorage.getItem("productData")) || [];

// Fetch product data from the backend
async function fetchProducts() {
  try {
    const response = await fetch("/api/products");
    if (!response.ok) throw new Error("Failed to fetch products");

    productItems = await response.json();
    displayProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function displayProducts() {
  const cardSection = document.querySelector(".card-section");
  cardSection.innerHTML = "";

  productItems.forEach((product) => {
    const productHTML = `
      <div class="main-card">
        <div class="card-image">
          <img src="${product.productImage}" alt="card image" />
        </div>
        <div class="card-data">
          <p>${product.productBrand}</p>
          <h3>${product.productName}</h3>
          <div class="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <h3 class="price">$${product.productPrice}</h3>
          <p class="product-id">Product ID: ${product._id}</p>
          <div class="card-shopping">
            <button onclick="addToCart('${product._id}')">
              <i class="fa-solid fa-cart-shopping add-card"></i>
            </button>
          </div>
        </div>
      </div>
    `;
    cardSection.innerHTML += productHTML;
  });
}

// Add item to cart and save to localStorage
function addToCart(productId) {
  const selectedProduct = productItems.find(
    (product) => product._id === productId
  );

  if (selectedProduct) {
    const existingItem = cartItems.find((item) => item._id === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      selectedProduct.quantity = 1;
      cartItems.push(selectedProduct);
    }

    localStorage.setItem("productData", JSON.stringify(cartItems));
    alert("Product added to cart!");
  }
}
window.onload = fetchProducts;
