let burger = document.getElementById("burger");
let navbarText = document.querySelector(".navbarText");
console.log(navbarText);
let navbarConcept = document.querySelector(".navbar-concept");
burger.addEventListener("click", () => {
  burger.classList.toggle("ghost");
  navbarText.classList.toggle("navbar-text-mobile");
  navbarConcept.classList.toggle("navbar-concept-mobile");
});
