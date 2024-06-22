const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cards = document.querySelectorAll(".card");

let currentCard = 0;

btnAvancar.addEventListener("click", function () {

    if (currentCard === cards.length - 1) return;

    const selectCard = document.querySelector(".selected");
    selectCard.classList.remove("selected");


    currentCard++;
    cards[currentCard].classList.add("selected");

});

btnVoltar.addEventListener("click", function () {

    if (currentCard === 0) return;

    const selectCard = document.querySelector(".selected");
    selectCard.classList.remove("selected");

    currentCard--;
    cards[currentCard].classList.add("selected");

});