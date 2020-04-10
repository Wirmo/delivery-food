const cartButton = document.querySelector("#cartButton");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("modal-active");
}

cartButton.addEventListener("click", toggleModal);
close.addEventListener(("click"), toggleModal);

new WOW().init();