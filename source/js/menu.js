let toggleButton = document.querySelector(".main-nav__toggle");
toggleButton.addEventListener("click", function(){
  let menu = document.querySelector(".main-nav__list");

  menu.classList.toggle("main-nav__list--opened");
  menu.classList.toggle("main-nav__list--closed");
});
