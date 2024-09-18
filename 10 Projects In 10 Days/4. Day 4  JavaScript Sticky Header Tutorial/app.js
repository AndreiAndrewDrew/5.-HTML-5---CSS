const header = document.querySelector("#header");
const stk = header.offsetTop;
console.log(stk);
window.addEventListener("scroll", () => {
  if (window.pageYOffset > stk) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
