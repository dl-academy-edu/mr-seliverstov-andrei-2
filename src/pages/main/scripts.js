var popup = document.querySelector(".modal_js"),
    buttonOpen = document.querySelector(".button-open_js"),
    exitButton = document.querySelector(".exit-button_js"),
    inputText = document.querySelector(".input-text_js"),
    mobile = document.querySelector(".mobile-menu__js");

buttonOpen.addEventListener("click", function() {
    popup.classList.add("modal-background_open");
    inputText.focus();
});

exitButton.addEventListener("click", function() {
    popup.classList.remove("modal-background_open");
    buttonOpen.focus();
});

//Escape

window.addEventListener("keydown", function(e) {
    if(e.code === "Escape" && popup.classList.contains("modal-background_open")){
        popup.classList.remove("modal-background_open")
    }
});


var buttonOpenMenu = document.querySelector(".js-button-open-menu"),
    buttonCloseMenu = document.querySelector(".js-button-close-menu");

buttonOpenMenu.addEventListener("click", function() {
    mobile.classList.add("mobile-menu__open")
});

buttonCloseMenu.addEventListener("click", function() {
    mobile.classList.remove("mobile-menu__open")
});