console.log('');

var mobile = document.querySelector(".mobile-menu__js");

var buttonOpenMenu = document.querySelector(".js-button-open-menu"),
    buttonCloseMenu = document.querySelector(".js-button-close-menu");

buttonOpenMenu.addEventListener("click", function() {
    mobile.classList.add("mobile-menu__open")
});

buttonCloseMenu.addEventListener("click", function() {
    mobile.classList.remove("mobile-menu__open")
});