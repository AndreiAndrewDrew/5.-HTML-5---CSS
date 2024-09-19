const slider = document.querySelector(".slider");
const slide = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-slide");
const nextBtn = document.querySelector(".next-slide");

let slideIndex = 0;
slide[slideIndex].classList.add("active");

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

function prevSlide() {
  slide[slideIndex].classList.remove("active");
  slideIndex = slideIndex === 0 ? slide.length - 1 : slideIndex - 1;
  slide[slideIndex].classList.add("active");
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
  slide[slideIndex].classList.remove("active");
  slideIndex = slideIndex === slide.length - 1 ? 0 : slideIndex + 1;
  slide[slideIndex].classList.add("active");
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}
