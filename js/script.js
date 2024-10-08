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


let removeCardItemButton = document.getElementsByClassName ('remove-Btn');
console.log(removeCardItemButton);
for (let i = 0; i < removeCardItemButton.length ; i++) {
  let button = removeCardItemButton[i]
  button.addEventListener ('click', function (){
    let buttonclicked = event.target;
    buttonclicked.parentElement.parentElement.remove();
  });
}


let productData = [
  {
      prodID: 19,
      prodName: "Cartoon Shirt",
      prodAdress: "img/products/f1.jpg",
      prodBrand: "Adidas",
      categories: ["men", "shirts", "featured"],
      prodPrice: 78,
  }
]




