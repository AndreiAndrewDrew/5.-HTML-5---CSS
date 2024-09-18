const menuToggle = document.querySelector("#menu-toggle");
const menuList = document.querySelector("#menu-list");
menuToggle.addEventListener("click", () => {
  menuList.classList.toggle("active");
});
