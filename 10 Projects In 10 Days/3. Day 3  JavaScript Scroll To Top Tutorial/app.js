const scrollBtn = document.querySelector("#scroll-to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"//pentru scrooling lent
  });
});
