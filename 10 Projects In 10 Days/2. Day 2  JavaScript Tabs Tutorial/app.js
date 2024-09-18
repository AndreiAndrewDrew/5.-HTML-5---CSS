const tabButtons = document.querySelectorAll(".tablink");

for (let i = 0; i < tabButtons.length; i++) {
  tabButtons[i].addEventListener("click", function () {
    let TabName = this.dataset.tab;
    let TabContent = document.getElementById(TabName);

    let allTabcontent = document.querySelectorAll(".tabcontent");
    let allTabButtons = document.querySelectorAll(".tablink");

    for (let j = 0; j < allTabcontent.length; j++) {
      allTabcontent[j].style.display = "none";
    }

    for (let k = 0; k < allTabcontent.length; k++) {
      allTabButtons[k].classList.remove("active");
    }

    TabContent.style.display = "block";
    this.classList.add("active");
  });
}
document.querySelector(".tablink").click();
