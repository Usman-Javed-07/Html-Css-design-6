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